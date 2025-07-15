'use client'

import React from 'react'
import Grid from './Grid'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import * as overlays from '@/data/gridOverlays'

type GridWrapperProps = {
  section?: 'hero' | 'about' | 'footer'
}

type Section = 'hero' | 'about' | 'footer'
type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fhd' | 'qhd'

const GridWrapper = ({ section: section }: GridWrapperProps) => {
  const breakpoints = {
    sm: useBreakpoint('sm'),
    md: useBreakpoint('md'),
    lg: useBreakpoint('lg'),
    xl: useBreakpoint('xl'),
    '2xl': useBreakpoint('2xl'),
    fhd: useBreakpoint('fhd'),
    qhd: useBreakpoint('qhd')
  }

  const getOverlay = (section: Section) => {
    for (const size of [
      'qhd',
      'fhd',
      '2xl',
      'xl',
      'lg',
      'md',
      'sm'
    ] as Size[]) {
      if (breakpoints[size]) {
        const key = `${section}_${size}` as keyof typeof overlays
        return overlays[key] ?? overlays.blank
      }
    }
    return overlays.blank
  }

  const selectedOverlay = section ? getOverlay(section) : overlays.blank
  const baseSize = breakpoints.lg ? 45 : 40
  return (
    <Grid overlays={selectedOverlay} baseSize={baseSize} section={section} />
  )
}

export default GridWrapper
