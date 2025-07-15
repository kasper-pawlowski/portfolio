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
export const hero_md: OverlayConfig[] = []
export const hero_lg: OverlayConfig[] = []
export const hero_xl: OverlayConfig[] = []
export const hero_2xl: OverlayConfig[] = []
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

export const about_sm: OverlayConfig[] = []
export const about_md: OverlayConfig[] = []
export const about_lg: OverlayConfig[] = []
export const about_xl: OverlayConfig[] = []
export const about_2xl: OverlayConfig[] = []
export const about_fhd: OverlayConfig[] = []
export const about_qhd: OverlayConfig[] = []

export const blank: OverlayConfig[] = []
