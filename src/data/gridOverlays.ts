import { OverlayConfig } from '@/components/ui/Grid'

const box = (
  w: number,
  h: number,
  anchor: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
): OverlayConfig => ({
  widthSquares: w,
  heightSquares: h,
  anchor,
  className: ''
})

export const hero_sm: OverlayConfig[] = []
export const hero_md: OverlayConfig[] = [
  box(12, 4, 'top-left'),
  box(9, 4, 'bottom-right'),
  box(7, 5, 'top-left'),
  box(3, 6, 'top-left'),
  box(1, 7, 'top-left'),
  box(13, 1, 'top-left'),
  box(6, 5, 'bottom-right'),
  box(3, 6, 'bottom-right'),
  box(1, 8, 'bottom-right'),
  box(2, 7, 'bottom-right'),
  box(1, 3, 'top-right'),
  box(2, 1, 'top-right'),
  box(2, 3, 'bottom-left'),
  box(1, 7, 'bottom-left'),
  box(4, 1, 'bottom-left'),
  box(11, 1, 'bottom-right')
]
export const hero_lg: OverlayConfig[] = [
  box(11, 4, 'top-left'),
  box(9, 4, 'bottom-right'),
  box(9, 1, 'top-left'),
  box(15, 1, 'top-left'),
  box(12, 2, 'top-left'),
  box(5, 5, 'top-left'),
  box(2, 6, 'top-left'),
  box(1, 7, 'top-left'),
  box(2, 2, 'top-right'),
  box(3, 1, 'top-right'),
  box(1, 3, 'top-right'),
  box(4, 1, 'top-right'),
  box(1, 6, 'bottom-right'),
  box(1, 1, 'bottom-right'),
  box(4, 5, 'bottom-right'),
  box(10, 3, 'bottom-right'),
  box(12, 2, 'bottom-right'),
  box(14, 1, 'bottom-right'),
  box(1, 3, 'bottom-left'),
  box(2, 2, 'bottom-left'),
  box(3, 1, 'bottom-left'),
  box(4, 1, 'bottom-left')
]
export const hero_xl: OverlayConfig[] = [
  box(10, 3, 'top-left'),
  box(5, 4, 'top-left'),
  box(1, 5, 'top-left'),
  box(8, 3, 'bottom-right'),
  box(17, 1, 'top-left'),
  box(13, 2, 'top-left'),
  box(1, 5, 'bottom-left'),
  box(3, 4, 'bottom-left'),
  box(4, 2, 'bottom-left'),
  box(6, 1, 'bottom-left'),
  box(13, 1, 'bottom-right'),
  box(5, 1, 'top-right'),
  box(1, 4, 'top-right'),
  box(3, 4, 'bottom-right'),
  box(1, 5, 'bottom-right'),
  box(3, 3, 'top-right'),
  box(11, 4, 'top-left'),
  box(6, 5, 'top-left'),
  box(1, 4, 'top-left'),
  box(1, 6, 'top-left'),
  box(9, 4, 'bottom-right'),
  box(5, 5, 'bottom-right'),
  box(1, 7, 'bottom-right'),
  box(2, 6, 'bottom-right'),
  box(10, 3, 'bottom-right'),
  box(13, 2, 'bottom-right'),
  box(16, 1, 'bottom-right')
]
export const hero_2xl: OverlayConfig[] = [
  box(11, 4, 'top-left'),
  box(9, 4, 'bottom-right'),
  box(6, 5, 'top-left'),
  box(13, 2, 'top-left'),
  box(20, 1, 'top-left'),
  box(1, 5, 'bottom-left'),
  box(3, 4, 'bottom-left'),
  box(4, 2, 'bottom-left'),
  box(7, 1, 'bottom-left'),
  box(5, 5, 'bottom-right'),
  box(1, 6, 'bottom-right'),
  box(1, 5, 'top-right'),
  box(7, 1, 'top-right'),
  box(5, 2, 'top-right'),
  box(2, 2, 'top-right'),
  box(2, 3, 'top-right'),
  box(18, 1, 'bottom-right'),
  box(1, 1, 'bottom-right'),
  box(10, 3, 'bottom-right'),
  box(14, 2, 'bottom-right')
]
export const hero_fhd: OverlayConfig[] = [
  box(14, 5, 'top-left'),
  box(6, 6, 'top-left'),
  box(16, 3, 'top-left'),
  box(24, 1, 'top-left'),
  box(5, 1, 'top-right'),
  box(3, 2, 'top-right'),
  box(1, 4, 'top-right'),
  box(11, 5, 'bottom-right'),
  box(6, 6, 'bottom-right'),
  box(1, 7, 'bottom-right'),
  box(12, 4, 'bottom-right'),
  box(13, 3, 'bottom-right'),
  box(18, 2, 'bottom-right'),
  box(22, 1, 'bottom-right'),
  box(3, 3, 'bottom-left'),
  box(1, 4, 'bottom-left'),
  box(5, 1, 'bottom-left')
]
export const hero_qhd: OverlayConfig[] = [
  box(18, 7, 'top-left'),
  box(10, 8, 'top-left'),
  box(1, 9, 'top-left'),
  box(19, 5, 'top-left'),
  box(20, 3, 'top-left'),
  box(22, 2, 'top-left'),
  box(28, 1, 'top-left'),
  box(8, 1, 'top-right'),
  box(5, 2, 'top-right'),
  box(3, 2, 'top-right'),
  box(1, 4, 'top-right'),
  box(15, 7, 'bottom-right'),
  box(13, 8, 'bottom-right'),
  box(5, 9, 'bottom-right'),
  box(1, 10, 'bottom-right'),
  box(17, 5, 'bottom-right'),
  box(20, 4, 'bottom-right'),
  box(24, 2, 'bottom-right'),
  box(25, 1, 'bottom-right'),
  box(4, 3, 'bottom-left'),
  box(6, 2, 'bottom-left'),
  box(8, 1, 'bottom-left'),
  box(3, 5, 'bottom-left'),
  box(1, 6, 'bottom-left')
]

export const about_sm: OverlayConfig[] = [
  box(1, 6, 'bottom-left'),
  box(5, 1, 'top-left'),
  box(4, 2, 'top-left'),
  box(2, 4, 'top-left'),
  box(3, 1, 'bottom-right'),
  box(1, 2, 'bottom-right'),
  box(1, 1, 'top-right')
]
export const about_md: OverlayConfig[] = [
  box(4, 2, 'top-left'),
  box(7, 1, 'top-left'),
  box(1, 2, 'bottom-left'),
  box(8, 1, 'bottom-left'),
  box(5, 1, 'bottom-right'),
  box(2, 3, 'bottom-right'),
  box(1, 4, 'bottom-right'),
  box(5, 1, 'top-right')
]
export const about_lg: OverlayConfig[] = [
  box(4, 1, 'top-left'),
  box(3, 2, 'top-left'),
  box(2, 4, 'top-left'),
  box(1, 6, 'top-left'),
  box(5, 1, 'bottom-left'),
  box(4, 2, 'bottom-left'),
  box(1, 3, 'bottom-left'),
  box(5, 3, 'bottom-right'),
  box(1, 6, 'bottom-right'),
  box(2, 4, 'bottom-right'),
  box(1, 2, 'top-right')
]
export const about_xl: OverlayConfig[] = [
  box(5, 1, 'top-left'),
  box(3, 2, 'top-left'),
  box(2, 4, 'top-left'),
  box(1, 6, 'top-left'),
  box(5, 1, 'bottom-left'),
  box(4, 2, 'bottom-left'),
  box(1, 3, 'bottom-left'),
  box(1, 2, 'bottom-right'),
  box(2, 1, 'bottom-right'),
  box(1, 3, 'top-right'),
  box(2, 1, 'top-right')
]
export const about_2xl: OverlayConfig[] = [
  box(2, 2, 'top-right'),
  box(3, 1, 'bottom-right'),
  box(1, 3, 'bottom-right'),
  box(1, 2, 'bottom-left'),
  box(3, 1, 'bottom-left'),
  box(1, 4, 'top-left'),
  box(2, 3, 'top-left'),
  box(3, 2, 'top-left'),
  box(4, 1, 'top-left')
]
export const about_fhd: OverlayConfig[] = [
  box(3, 3, 'top-left'),
  box(4, 1, 'top-left'),
  box(1, 4, 'top-left'),
  box(3, 1, 'bottom-left'),
  box(1, 2, 'bottom-left'),
  box(2, 2, 'top-right'),
  box(3, 1, 'bottom-right'),
  box(1, 3, 'bottom-right')
]
export const about_qhd: OverlayConfig[] = [
  box(4, 1, 'bottom-right'),
  box(1, 3, 'bottom-right'),
  box(2, 1, 'top-right'),
  box(2, 2, 'bottom-right'),
  box(4, 3, 'top-left'),
  box(10, 1, 'top-left'),
  box(8, 2, 'top-left'),
  box(3, 6, 'bottom-left'),
  box(2, 2, 'bottom-left'),
  box(6, 1, 'bottom-left')
]

export const blank: OverlayConfig[] = []
