import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type HeroGridProps = {
  tileSize?: number
  stroke?: string
  fill?: string
  className?: string
  width?: string
  height?: string
}

const HeroGrid = ({
  tileSize = 39,
  stroke = '#8A8A8A',
  fill = 'none',
  width = '100%',
  height = 'auto',
  className = 'absolute z-[-2]'
}: HeroGridProps) => {
  const { scrollYProgress } = useScroll()

  const rotateElement08 = useTransform(
    scrollYProgress,
    [0, 1],
    ['0deg', '960deg']
  )

  const gridElements = [
    // row01
    {
      id: 'sq01-r1',
      type: 'path',
      d: 'M907 0.5H936.5V39.5H897.5V10C897.5 4.7533 901.753 0.5 907 0.5Z'
    },
    { id: 'sq02-r1', type: 'rect', x: 936.5, y: 0.5 },
    { id: 'sq03-r1', type: 'rect', x: 975.5, y: 0.5 },
    { id: 'sq04-r1', type: 'rect', x: 1014.5, y: 0.5 },
    // row02
    {
      id: 'sq01-r2',
      type: 'path',
      d: 'M556 39.5H585.5V78.5H546.5V49C546.5 43.7533 550.753 39.5 556 39.5Z'
    },
    { id: 'sq02-r2', type: 'rect', x: 585.5, y: 39.5 },
    { id: 'sq03-r2', type: 'rect', x: 624.5, y: 39.5 },
    { id: 'sq04-r2', type: 'rect', x: 780.5, y: 39.5 },
    { id: 'sq05-r2', type: 'rect', x: 819.5, y: 39.5 },
    { id: 'sq06-r2', type: 'rect', x: 858.5, y: 39.5 },
    { id: 'sq07-r2', type: 'rect', x: 897.5, y: 39.5 },
    { id: 'sq08-r2', type: 'rect', x: 936.5, y: 39.5 },
    { id: 'sq09-r2', type: 'rect', x: 975.5, y: 39.5 },
    { id: 'sq10-r2', type: 'rect', x: 1014.5, y: 39.5 },
    { id: 'sq11-r2', type: 'rect', x: 1053.5, y: 39.5 },
    { id: 'sq12-r2', type: 'rect', x: 1092.5, y: 39.5 },
    // row03
    { id: 'sq01-r3', type: 'rect', x: 546.5, y: 78.5 },
    { id: 'sq02-r3', type: 'rect', x: 585.5, y: 78.5 },
    { id: 'sq03-r3', type: 'rect', x: 624.5, y: 78.5 },
    { id: 'sq04-r3', type: 'rect', x: 780.5, y: 78.5 },
    { id: 'sq05-r3', type: 'rect', x: 819.5, y: 78.5 },
    { id: 'sq06-r3', type: 'rect', x: 858.5, y: 78.5 },
    { id: 'sq07-r3', type: 'rect', x: 897.5, y: 78.5 },
    { id: 'sq08-r3', type: 'rect', x: 936.5, y: 78.5 },
    { id: 'sq09-r3', type: 'rect', x: 975.5, y: 78.5 },
    { id: 'sq10-r3', type: 'rect', x: 1014.5, y: 78.5 },
    { id: 'sq11-r3', type: 'rect', x: 1053.5, y: 78.5 },
    { id: 'sq12-r3', type: 'rect', x: 1092.5, y: 78.5 },
    {
      id: 'sq13-r3',
      type: 'path',
      d: 'M1161 78.5C1166.25 78.5 1170.5 82.7533 1170.5 88V117.5H1131.5V78.5H1161Z'
    },
    // row04
    { id: 'sq01-r4', type: 'rect', x: 507.5, y: 117.5 },
    { id: 'sq02-r4', type: 'rect', x: 546.5, y: 117.5 },
    { id: 'sq03-r4', type: 'rect', x: 585.5, y: 117.5 },
    { id: 'sq04-r4', type: 'rect', x: 624.5, y: 117.5 },
    { id: 'sq05-r4', type: 'rect', x: 663.5, y: 117.5 },
    { id: 'sq06-r4', type: 'rect', x: 702.5, y: 117.5 },
    { id: 'sq07-r4', type: 'rect', x: 741.5, y: 117.5 },
    { id: 'sq08-r4', type: 'rect', x: 780.5, y: 117.5 },
    { id: 'sq09-r4', type: 'rect', x: 819.5, y: 117.5 },
    { id: 'sq10-r4', type: 'rect', x: 858.5, y: 117.5 },
    { id: 'sq11-r4', type: 'rect', x: 897.5, y: 117.5 },
    { id: 'sq12-r4', type: 'rect', x: 936.5, y: 117.5 },
    { id: 'sq13-r4', type: 'rect', x: 975.5, y: 117.5 },
    { id: 'sq14-r4', type: 'rect', x: 1014.5, y: 117.5 },
    { id: 'sq15-r4', type: 'rect', x: 1053.5, y: 117.5 },
    { id: 'sq16-r4', type: 'rect', x: 1092.5, y: 117.5 },
    { id: 'sq17-r4', type: 'rect', x: 1131.5, y: 117.5 },
    // row05
    { id: 'sq01-r5', type: 'rect', x: 507.5, y: 156.5 },
    { id: 'sq02-r5', type: 'rect', x: 546.5, y: 156.5 },
    { id: 'sq03-r5', type: 'rect', x: 585.5, y: 156.5 },
    { id: 'sq04-r5', type: 'rect', x: 624.5, y: 156.5 },
    { id: 'sq05-r5', type: 'rect', x: 663.5, y: 156.5 },
    { id: 'sq06-r5', type: 'rect', x: 702.5, y: 156.5 },
    { id: 'sq07-r5', type: 'rect', x: 741.5, y: 156.5 },
    { id: 'sq08-r5', type: 'rect', x: 780.5, y: 156.5 },
    { id: 'sq09-r5', type: 'rect', x: 819.5, y: 156.5 },
    { id: 'sq10-r5', type: 'rect', x: 858.5, y: 156.5 },
    { id: 'sq11-r5', type: 'rect', x: 897.5, y: 156.5 },
    { id: 'sq12-r5', type: 'rect', x: 936.5, y: 156.5 },
    { id: 'sq13-r5', type: 'rect', x: 975.5, y: 156.5 },
    { id: 'sq14-r5', type: 'rect', x: 1014.5, y: 156.5 },
    { id: 'sq15-r5', type: 'rect', x: 1053.5, y: 156.5 },
    { id: 'sq16-r5', type: 'rect', x: 1092.5, y: 156.5 },
    { id: 'sq17-r5', type: 'rect', x: 1131.5, y: 156.5 },
    // row06
    { id: 'sq01-r6', type: 'rect', x: 507.5, y: 195.5 },
    { id: 'sq02-r6', type: 'rect', x: 546.5, y: 195.5 },
    { id: 'sq03-r6', type: 'rect', x: 585.5, y: 195.5 },
    { id: 'sq04-r6', type: 'rect', x: 624.5, y: 195.5 },
    { id: 'sq05-r6', type: 'rect', x: 663.5, y: 195.5 },
    { id: 'sq06-r6', type: 'rect', x: 702.5, y: 195.5 },
    { id: 'sq07-r6', type: 'rect', x: 741.5, y: 195.5 },
    { id: 'sq08-r6', type: 'rect', x: 780.5, y: 195.5 },
    { id: 'sq09-r6', type: 'rect', x: 819.5, y: 195.5 },
    { id: 'sq10-r6', type: 'rect', x: 858.5, y: 195.5 },
    { id: 'sq11-r6', type: 'rect', x: 897.5, y: 195.5 },
    { id: 'sq12-r6', type: 'rect', x: 936.5, y: 195.5 },
    { id: 'sq13-r6', type: 'rect', x: 975.5, y: 195.5 },
    { id: 'sq14-r6', type: 'rect', x: 1014.5, y: 195.5 },
    { id: 'sq15-r6', type: 'rect', x: 1053.5, y: 195.5 },
    { id: 'sq16-r6', type: 'rect', x: 1092.5, y: 195.5 },
    { id: 'sq17-r6', type: 'rect', x: 1131.5, y: 195.5 },
    // row07
    {
      id: 'sq01-r7',
      type: 'path',
      d: 'M205 234.5H234.5V273.5H195.5V244C195.5 238.753 199.753 234.5 205 234.5Z'
    },
    { id: 'sq02-r7', type: 'rect', x: 234.5, y: 234.5 },
    { id: 'sq03-r7', type: 'rect', x: 273.5, y: 234.5 },
    { id: 'sq04-r7', type: 'rect', x: 312.5, y: 234.5 },
    { id: 'sq05-r7', type: 'rect', x: 351.5, y: 234.5 },
    { id: 'sq06-r7', type: 'rect', x: 390.5, y: 234.5 },
    { id: 'sq07-r7', type: 'rect', x: 429.5, y: 234.5 },
    { id: 'sq08-r7', type: 'rect', x: 468.5, y: 234.5 },
    { id: 'sq09-r7', type: 'rect', x: 507.5, y: 234.5 },
    { id: 'sq10-r7', type: 'rect', x: 546.5, y: 234.5 },
    { id: 'sq11-r7', type: 'rect', x: 585.5, y: 234.5 },
    { id: 'sq12-r7', type: 'rect', x: 624.5, y: 234.5 },
    { id: 'sq13-r7', type: 'rect', x: 663.5, y: 234.5 },
    { id: 'sq14-r7', type: 'rect', x: 702.5, y: 234.5 },
    { id: 'sq15-r7', type: 'rect', x: 741.5, y: 234.5 },
    { id: 'sq16-r7', type: 'rect', x: 780.5, y: 234.5 },
    { id: 'sq17-r7', type: 'rect', x: 819.5, y: 234.5 },
    { id: 'sq18-r7', type: 'rect', x: 858.5, y: 234.5 },
    { id: 'sq19-r7', type: 'rect', x: 897.5, y: 234.5 },
    { id: 'sq20-r7', type: 'rect', x: 936.5, y: 234.5 },
    { id: 'sq21-r7', type: 'rect', x: 975.5, y: 234.5 },
    { id: 'sq22-r7', type: 'rect', x: 1014.5, y: 234.5 },
    { id: 'sq23-r7', type: 'rect', x: 1053.5, y: 234.5 },
    // row08
    { id: 'sq01-r8', type: 'rect', x: 0.5, y: 273.5 },
    { id: 'sq02-r8', type: 'rect', x: 39.5, y: 273.5 },
    { id: 'sq03-r8', type: 'rect', x: 78.5, y: 273.5 },
    { id: 'sq04-r8', type: 'rect', x: 117.5, y: 273.5 },
    { id: 'sq05-r8', type: 'rect', x: 156.5, y: 273.5 },
    { id: 'sq06-r8', type: 'rect', x: 195.5, y: 273.5 },
    { id: 'sq07-r8', type: 'rect', x: 234.5, y: 273.5 },
    { id: 'sq08-r8', type: 'rect', x: 273.5, y: 273.5 },
    { id: 'sq09-r8', type: 'rect', x: 312.5, y: 273.5 },
    { id: 'sq10-r8', type: 'rect', x: 351.5, y: 273.5 },
    { id: 'sq11-r8', type: 'rect', x: 390.5, y: 273.5 },
    { id: 'sq12-r8', type: 'rect', x: 429.5, y: 273.5 },
    { id: 'sq13-r8', type: 'rect', x: 468.5, y: 273.5 },
    { id: 'sq14-r8', type: 'rect', x: 507.5, y: 273.5 },
    { id: 'sq15-r8', type: 'rect', x: 546.5, y: 273.5 },
    { id: 'sq16-r8', type: 'rect', x: 585.5, y: 273.5 },
    { id: 'sq17-r8', type: 'rect', x: 624.5, y: 273.5 },
    { id: 'sq18-r8', type: 'rect', x: 663.5, y: 273.5 },
    { id: 'sq19-r8', type: 'rect', x: 702.5, y: 273.5 },
    { id: 'sq20-r8', type: 'rect', x: 741.5, y: 273.5 },
    { id: 'sq21-r8', type: 'rect', x: 780.5, y: 273.5 },
    { id: 'sq22-r8', type: 'rect', x: 819.5, y: 273.5 },
    { id: 'sq23-r8', type: 'rect', x: 858.5, y: 273.5 },
    { id: 'sq24-r8', type: 'rect', x: 897.5, y: 273.5 },
    { id: 'sq25-r8', type: 'rect', x: 936.5, y: 273.5 },
    { id: 'sq26-r8', type: 'rect', x: 975.5, y: 273.5 },
    { id: 'sq27-r8', type: 'rect', x: 1014.5, y: 273.5 },
    { id: 'sq28-r8', type: 'rect', x: 1053.5, y: 273.5 },
    // row09
    { id: 'sq01-r9', type: 'rect', x: 0.5, y: 312.5 },
    { id: 'sq02-r9', type: 'rect', x: 39.5, y: 312.5 },
    { id: 'sq03-r9', type: 'rect', x: 78.5, y: 312.5 },
    { id: 'sq04-r9', type: 'rect', x: 117.5, y: 312.5 },
    { id: 'sq05-r9', type: 'rect', x: 156.5, y: 312.5 },
    { id: 'sq06-r9', type: 'rect', x: 195.5, y: 312.5 },
    { id: 'sq07-r9', type: 'rect', x: 234.5, y: 312.5 },
    { id: 'sq08-r9', type: 'rect', x: 273.5, y: 312.5 },
    { id: 'sq09-r9', type: 'rect', x: 312.5, y: 312.5 },
    { id: 'sq10-r9', type: 'rect', x: 351.5, y: 312.5 },
    { id: 'sq11-r9', type: 'rect', x: 390.5, y: 312.5 },
    { id: 'sq12-r9', type: 'rect', x: 429.5, y: 312.5 },
    { id: 'sq13-r9', type: 'rect', x: 468.5, y: 312.5 },
    { id: 'sq14-r9', type: 'rect', x: 507.5, y: 312.5 },
    { id: 'sq15-r9', type: 'rect', x: 546.5, y: 312.5 },
    { id: 'sq16-r9', type: 'rect', x: 585.5, y: 312.5 },
    { id: 'sq17-r9', type: 'rect', x: 624.5, y: 312.5 },
    { id: 'sq18-r9', type: 'rect', x: 663.5, y: 312.5 },
    { id: 'sq19-r9', type: 'rect', x: 702.5, y: 312.5 },
    { id: 'sq20-r9', type: 'rect', x: 741.5, y: 312.5 },
    { id: 'sq21-r9', type: 'rect', x: 780.5, y: 312.5 },
    { id: 'sq22-r9', type: 'rect', x: 819.5, y: 312.5 },
    { id: 'sq23-r9', type: 'rect', x: 858.5, y: 312.5 },
    { id: 'sq24-r9', type: 'rect', x: 897.5, y: 312.5 },
    // row10
    { id: 'sq01-r10', type: 'rect', x: 0.5, y: 351.5 },
    { id: 'sq02-r10', type: 'rect', x: 39.5, y: 351.5 },
    { id: 'sq03-r10', type: 'rect', x: 78.5, y: 351.5 },
    { id: 'sq04-r10', type: 'rect', x: 117.5, y: 351.5 },
    { id: 'sq05-r10', type: 'rect', x: 156.5, y: 351.5 },
    { id: 'sq06-r10', type: 'rect', x: 195.5, y: 351.5 },
    { id: 'sq07-r10', type: 'rect', x: 234.5, y: 351.5 },
    { id: 'sq08-r10', type: 'rect', x: 273.5, y: 351.5 },
    { id: 'sq09-r10', type: 'rect', x: 312.5, y: 351.5 },
    { id: 'sq10-r10', type: 'rect', x: 351.5, y: 351.5 },
    { id: 'sq11-r10', type: 'rect', x: 390.5, y: 351.5 },
    { id: 'sq12-r10', type: 'rect', x: 429.5, y: 351.5 },
    { id: 'sq13-r10', type: 'rect', x: 468.5, y: 351.5 },
    { id: 'sq14-r10', type: 'rect', x: 507.5, y: 351.5 },
    { id: 'sq15-r10', type: 'rect', x: 546.5, y: 351.5 },
    { id: 'sq16-r10', type: 'rect', x: 585.5, y: 351.5 },
    { id: 'sq17-r10', type: 'rect', x: 624.5, y: 351.5 },
    { id: 'sq18-r10', type: 'rect', x: 663.5, y: 351.5 },
    { id: 'sq19-r10', type: 'rect', x: 702.5, y: 351.5 },
    // row11
    {
      id: 'sq01-r11',
      type: 'path',
      d: 'M39.5 390.5V429.5H10C4.7533 429.5 0.5 425.247 0.5 420V390.5H39.5Z'
    },
    { id: 'sq02-r11', type: 'rect', x: 39.5, y: 390.5 },
    { id: 'sq03-r11', type: 'rect', x: 78.5, y: 390.5 },
    { id: 'sq04-r11', type: 'rect', x: 117.5, y: 390.5 },
    { id: 'sq05-r11', type: 'rect', x: 156.5, y: 390.5 },
    { id: 'sq06-r11', type: 'rect', x: 195.5, y: 390.5 },
    { id: 'sq07-r11', type: 'rect', x: 234.5, y: 390.5 },
    { id: 'sq08-r11', type: 'rect', x: 273.5, y: 390.5 },
    { id: 'sq09-r11', type: 'rect', x: 312.5, y: 390.5 },
    { id: 'sq10-r11', type: 'rect', x: 351.5, y: 390.5 },
    { id: 'sq11-r11', type: 'rect', x: 390.5, y: 390.5 },
    { id: 'sq12-r11', type: 'rect', x: 429.5, y: 390.5 },
    { id: 'sq13-r11', type: 'rect', x: 468.5, y: 390.5 },
    { id: 'sq14-r11', type: 'rect', x: 507.5, y: 390.5 },
    { id: 'sq15-r11', type: 'rect', x: 546.5, y: 390.5 },
    { id: 'sq16-r11', type: 'rect', x: 585.5, y: 390.5 },
    { id: 'sq17-r11', type: 'rect', x: 624.5, y: 390.5 },
    { id: 'sq18-r11', type: 'rect', x: 663.5, y: 390.5 },
    // row12
    { id: 'sq01-r12', type: 'rect', x: 117.5, y: 429.5 },
    { id: 'sq02-r12', type: 'rect', x: 156.5, y: 429.5 },
    { id: 'sq03-r12', type: 'rect', x: 195.5, y: 429.5 },
    { id: 'sq04-r12', type: 'rect', x: 234.5, y: 429.5 },
    { id: 'sq05-r12', type: 'rect', x: 273.5, y: 429.5 },
    { id: 'sq06-r12', type: 'rect', x: 312.5, y: 429.5 },
    { id: 'sq07-r12', type: 'rect', x: 351.5, y: 429.5 },
    { id: 'sq08-r12', type: 'rect', x: 390.5, y: 429.5 },
    { id: 'sq09-r12', type: 'rect', x: 429.5, y: 429.5 },
    { id: 'sq10-r12', type: 'rect', x: 468.5, y: 429.5 },
    { id: 'sq11-r12', type: 'rect', x: 507.5, y: 429.5 },
    { id: 'sq12-r12', type: 'rect', x: 546.5, y: 429.5 },
    { id: 'sq13-r12', type: 'rect', x: 585.5, y: 429.5 },
    { id: 'sq14-r12', type: 'rect', x: 624.5, y: 429.5 },
    {
      id: 'sq15-r12',
      type: 'path',
      d: 'M702.5 429.5V459C702.5 464.247 698.247 468.5 693 468.5H663.5V429.5H702.5Z'
    },
    // row13
    { id: 'sq01-r13', type: 'rect', x: 117.5, y: 468.5 },
    { id: 'sq02-r13', type: 'rect', x: 156.5, y: 468.5 },
    { id: 'sq03-r13', type: 'rect', x: 195.5, y: 468.5 },
    { id: 'sq04-r13', type: 'rect', x: 234.5, y: 468.5 },
    { id: 'sq05-r13', type: 'rect', x: 273.5, y: 468.5 },
    { id: 'sq06-r13', type: 'rect', x: 312.5, y: 468.5 },
    { id: 'sq07-r13', type: 'rect', x: 351.5, y: 468.5 },
    { id: 'sq08-r13', type: 'rect', x: 390.5, y: 468.5 },
    { id: 'sq09-r13', type: 'rect', x: 429.5, y: 468.5 },
    { id: 'sq10-r13', type: 'rect', x: 468.5, y: 468.5 },
    { id: 'sq11-r13', type: 'rect', x: 507.5, y: 468.5 },
    { id: 'sq12-r13', type: 'rect', x: 546.5, y: 468.5 },
    // row14
    { id: 'sq01-r14', type: 'rect', x: 117.5, y: 507.5 },
    { id: 'sq02-r14', type: 'rect', x: 156.5, y: 507.5 },
    { id: 'sq03-r14', type: 'rect', x: 195.5, y: 507.5 },
    { id: 'sq04-r14', type: 'rect', x: 234.5, y: 507.5 },
    { id: 'sq05-r14', type: 'rect', x: 273.5, y: 507.5 },
    { id: 'sq06-r14', type: 'rect', x: 312.5, y: 507.5 },
    { id: 'sq07-r14', type: 'rect', x: 351.5, y: 507.5 },
    { id: 'sq08-r14', type: 'rect', x: 390.5, y: 507.5 },
    { id: 'sq09-r14', type: 'rect', x: 429.5, y: 507.5 }
  ]

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox='0 0 1171 547'
      fill='none' // Tło SVG, może być 'none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <motion.g id='hero-grid'>
        {gridElements.map(e =>
          e.type === 'path' ? (
            <motion.path
              key={e.id}
              id={e.id}
              d={e.d!}
              stroke={stroke}
              fill={fill}
            />
          ) : (
            <motion.rect
              key={e.id}
              id={e.id}
              x={e.x!}
              y={e.y!}
              width={tileSize}
              height={tileSize}
              stroke={stroke}
              fill={fill}
            />
          )
        )}
      </motion.g>
      <motion.g id='grid-elements' style={{}}>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          style={{ rotate: rotateElement08 }}
          id='element-08'
          d='M1043 29.5001L1037.47 19.9908L1020.03 29.9873V10H1008.97V29.9907L991.531 19.9943L986 29.5047L1003.44 39.4988L986.005 49.492L991.536 59.0012L1008.97 49.0048V69H1020.03V49.0117L1037.46 59.0058L1043 49.4954L1025.56 39.4988L1043 29.5001Z'
          fill='var(--foreground-light)'
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          id='element-07'
          d='M936.5 255C936.459 243.692 927.297 234.538 916 234.538C927.322 234.538 936.5 225.343 936.5 214C936.541 225.308 945.703 234.462 957 234.462C945.678 234.462 936.5 243.657 936.5 255Z'
          fill='#8A8A8A'
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          id='element-06'
          d='M820 79H793.334V65.6674H806.667V52.3337H820V79ZM806.667 52.3337H793.334V65.6674H780V39H806.667V52.3337Z'
          fill='#8A8A8A'
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          id='element-05'
          d='M624.508 140.538C626.279 148.466 632.515 154.703 640.435 156.462C632.49 158.226 626.239 164.498 624.491 172.461C622.72 164.534 616.484 158.296 608.564 156.537C616.51 154.773 622.76 148.502 624.508 140.538Z'
          fill='#C4C2BB'
          stroke='#8A8A8A'
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          id='element-04'
          d='M585.5 333C585.459 321.692 576.297 312.538 565 312.538C576.322 312.538 585.5 303.343 585.5 292C585.541 303.308 594.703 312.462 606 312.462C594.678 312.462 585.5 321.657 585.5 333Z'
          fill='#8A8A8A'
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          id='element-03'
          d='M546.511 318.269C549.244 335.289 562.677 348.721 579.679 351.426C562.628 354.138 549.169 367.641 546.488 384.73C543.754 367.71 530.322 354.277 513.32 351.573C530.371 348.862 543.831 335.358 546.511 318.269Z'
          fill='#C4C2BB'
          stroke='#8A8A8A'
        />
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          id='element-02'
        >
          <path d='M215 507H205.5V497.5H215V507Z' fill='#8A8A8A' />
          <path d='M234 507H224.5V497.5H234V507Z' fill='#8A8A8A' />
          <path d='M205.5 497.5H196V488H205.5V497.5Z' fill='#8A8A8A' />
          <path d='M224.5 497.5H215V488H224.5V497.5Z' fill='#8A8A8A' />
          <path d='M215 488H205.5V478.5H215V488Z' fill='#8A8A8A' />
          <path d='M234 488H224.5V478.5H234V488Z' fill='#8A8A8A' />
          <path d='M205.5 478.5H196V469H205.5V478.5Z' fill='#8A8A8A' />
          <path d='M224.5 478.5H215V469H224.5V478.5Z' fill='#8A8A8A' />
        </motion.g>
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          id='element-01'
          d='M78.0312 294.708C78.1823 294.3 78.7328 294.275 78.9336 294.632L78.9688 294.708L83.4082 306.705C83.5601 307.116 83.8843 307.44 84.2949 307.592L96.292 312.031C96.7001 312.182 96.7255 312.733 96.3682 312.934L96.292 312.969L84.2949 317.408C83.8843 317.56 83.5601 317.884 83.4082 318.295L78.9688 330.292C78.8177 330.7 78.2672 330.725 78.0664 330.368L78.0312 330.292L73.5918 318.295C73.4399 317.884 73.1157 317.56 72.7051 317.408L60.708 312.969C60.2999 312.818 60.2745 312.267 60.6318 312.066L60.708 312.031L72.7051 307.592C73.1157 307.44 73.4399 307.116 73.5918 306.705L78.0312 294.708Z'
          fill='#C4C2BB'
          stroke='#8A8A8A'
        />
      </motion.g>
    </motion.svg>
  )
}

export default HeroGrid
