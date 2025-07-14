import React, { useState, useEffect, useRef } from 'react'

export type OverlayConfig = {
  widthSquares: number
  heightSquares: number
  anchor?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className?: string
}

type GridProps = {
  overlays?: OverlayConfig[]
  baseSize?: number
}

const Grid: React.FC<GridProps> = ({ overlays = [], baseSize = 45 }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null)
  const [gridConfig, setGridConfig] = useState({
    cols: 0,
    rows: 0,
    squareSize: baseSize
  })
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null)
  const [trailSquares, setTrailSquares] = useState<Set<number>>(new Set())
  const [lastHoveredSquare, setLastHoveredSquare] = useState<number | null>(
    null
  )

  const getOverlayStyle = (
    overlay: OverlayConfig,
    itemWidth: number,
    itemHeight: number
  ): React.CSSProperties => {
    const width = overlay.widthSquares * itemWidth
    const height = overlay.heightSquares * itemHeight

    const style: React.CSSProperties = {
      position: 'absolute',
      width: `${width}px`,
      height: `${height}px`
    }

    switch (overlay.anchor ?? 'top-left') {
      case 'top-left':
        style.top = `0px`
        style.left = `0px`
        break
      case 'top-right':
        style.top = `0px`
        style.right = `0px`
        break
      case 'bottom-left':
        style.bottom = `0px`
        style.left = `0px`
        break
      case 'bottom-right':
        style.bottom = `0px`
        style.right = `0px`
        break
    }

    return style
  }

  const calculateGrid = () => {
    if (!containerRef.current) return
    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight
    const tolerance = 5

    // Oblicz liczbę kolumn i wierszy na podstawie rozmiaru bazowego
    const baseCols = Math.floor(containerWidth / baseSize)
    const baseRows = Math.floor(containerHeight / baseSize)

    // Oblicz dokładny rozmiar kwadratu, aby wypełnić całą przestrzeń
    const exactSquareWidth = containerWidth / baseCols
    const exactSquareHeight = containerHeight / baseRows

    // Sprawdź, czy rozmiary mieszczą się w tolerancji
    const widthInTolerance = Math.abs(exactSquareWidth - baseSize) <= tolerance
    const heightInTolerance =
      Math.abs(exactSquareHeight - baseSize) <= tolerance

    let finalCols = baseCols
    let finalRows = baseRows
    let finalSquareSize = baseSize

    if (widthInTolerance && heightInTolerance) {
      // Użyj średniej z dokładnych rozmiarów
      finalSquareSize = Math.min(exactSquareWidth, exactSquareHeight)
    } else {
      // Dostosuj liczbę kolumn/wierszy, aby rozmiar był bliższy bazowemu
      if (!widthInTolerance) {
        const altCols = Math.round(containerWidth / baseSize)
        const altSquareWidth = containerWidth / altCols
        if (
          Math.abs(altSquareWidth - baseSize) <
          Math.abs(exactSquareWidth - baseSize)
        ) {
          finalCols = altCols
        }
      }
      if (!heightInTolerance) {
        const altRows = Math.round(containerHeight / baseSize)
        const altSquareHeight = containerHeight / altRows
        if (
          Math.abs(altSquareHeight - baseSize) <
          Math.abs(exactSquareHeight - baseSize)
        ) {
          finalRows = altRows
        }
      }
      finalSquareSize = Math.min(
        containerWidth / finalCols,
        containerHeight / finalRows
      )
    }

    setGridConfig({
      cols: finalCols,
      rows: finalRows,
      squareSize: finalSquareSize
    })
  }

  useEffect(() => {
    calculateGrid()
    const handleResize = () => {
      calculateGrid()
    }
    window.addEventListener('resize', handleResize)

    // Obserwator zmian rozmiaru kontenera
    const resizeObserver = new ResizeObserver(calculateGrid)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Funkcja do czyszczenia śladu po czasie
    const clearTrailInterval = setInterval(() => {
      setTrailSquares(prev => {
        if (prev.size === 0) return prev
        const newSet = new Set(prev)
        const squareToRemove = newSet.values().next().value
        if (squareToRemove !== undefined) {
          newSet.delete(squareToRemove)
        }
        return newSet
      })
    }, 30) // Usuwa jeden kwadrat co 100ms

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      clearInterval(clearTrailInterval)
    }
  }, [baseSize]) // Dodano baseSize jako dependency

  // Funkcja do obliczania ścieżki między dwoma kwadratami
  const getSquaresBetween = (startIndex: number, endIndex: number) => {
    const squares = []
    const { cols } = gridConfig

    const startRow = Math.floor(startIndex / cols)
    const startCol = startIndex % cols
    const endRow = Math.floor(endIndex / cols)
    const endCol = endIndex % cols

    const rowDiff = endRow - startRow
    const colDiff = endCol - startCol
    const maxSteps = Math.max(Math.abs(rowDiff), Math.abs(colDiff))

    for (let step = 0; step <= maxSteps; step++) {
      const progress = maxSteps === 0 ? 0 : step / maxSteps
      const currentRow = Math.round(startRow + rowDiff * progress)
      const currentCol = Math.round(startCol + colDiff * progress)
      const currentIndex = currentRow * cols + currentCol

      if (currentIndex >= 0 && currentIndex < cols * gridConfig.rows) {
        squares.push(currentIndex)
      }
    }

    return squares
  }

  const handleSquareHover = (index: number) => {
    setHoveredSquare(index)

    // Jeśli jest poprzedni kwadrat, dodaj wszystkie kwadraty na ścieżce
    if (lastHoveredSquare !== null && lastHoveredSquare !== index) {
      const pathSquares = getSquaresBetween(lastHoveredSquare, index)
      setTrailSquares(prev => new Set([...prev, ...pathSquares]))
    } else {
      // Jeśli nie ma poprzedniego kwadratu, po prostu dodaj bieżący
      setTrailSquares(prev => new Set([...prev, index]))
    }

    setLastHoveredSquare(index)
  }

  const handleSquareLeave = (index: number) => {
    setHoveredSquare(null)
    // Nie resetuj lastHoveredSquare tutaj, aby zachować ciągłość ścieżki
  }

  const generateSquares = () => {
    const squares = []
    const totalSquares = gridConfig.cols * gridConfig.rows

    for (let i = 0; i < totalSquares; i++) {
      const isHovered = hoveredSquare === i
      const isInTrail = trailSquares.has(i)

      squares.push(
        <div
          ref={i === 0 ? itemRef : null}
          className={`border-foreground-light box-border border-1 transition-all duration-100 ease-out ${
            isHovered
              ? 'bg-orange-500'
              : isInTrail
                ? 'bg-orange-300'
                : 'bg-transparent'
          } ${!isHovered ? 'duration-1000' : ''}`}
          key={i}
          onMouseEnter={() => handleSquareHover(i)}
          onMouseLeave={() => handleSquareLeave(i)}
        />
      )
    }
    return squares
  }

  return (
    <div className='relative h-full w-full overflow-hidden'>
      {overlays.map((overlay, index) => (
        <div
          key={index}
          className={`${overlay.className} bg-background z-1`}
          style={getOverlayStyle(
            overlay,
            itemRef.current?.getBoundingClientRect()?.width ?? 0,
            itemRef.current?.getBoundingClientRect()?.height ?? 0
          )}
        />
      ))}

      <div
        ref={containerRef}
        className='border-foreground-light relative h-full w-full overflow-hidden border-1'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridConfig.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridConfig.rows}, 1fr)`,
          filter: 'url(#gooey-filter)',
          maxHeight: '1000px'
        }}
      >
        {/* SVG Filter dla efektu Gooey */}
        <svg width='0' height='0' style={{ position: 'absolute' }}>
          <defs>
            <filter id='gooey-filter'>
              <feGaussianBlur
                in='SourceGraphic'
                stdDeviation='3'
                result='blur'
              />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
                result='gooey'
              />
              <feBlend in='SourceGraphic' in2='gooey' />
            </filter>
          </defs>
        </svg>
        {generateSquares()}
      </div>
    </div>
  )
}

export default Grid
