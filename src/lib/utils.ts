import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Możesz też wyeksportować je osobno, jeśli chcesz
export { clsx, twMerge }
