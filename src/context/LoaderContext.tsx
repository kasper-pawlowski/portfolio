'use client'

import { createContext, useState, useContext, ReactNode } from 'react'

interface LoaderContextType {
  hasInitialLoadFinished: boolean
  setHasInitialLoadFinished: (value: boolean) => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [hasInitialLoadFinished, setHasInitialLoadFinished] = useState(false)

  return (
    <LoaderContext.Provider
      value={{ hasInitialLoadFinished, setHasInitialLoadFinished }}
    >
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider')
  }
  return context
}
