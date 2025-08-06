'use client'

import { useBreakpoint } from '@/hooks/useBreakpoint'
import { Toaster } from 'react-hot-toast'

const StyledToaster = () => {
  const isLgUp = useBreakpoint('lg')

  const toastConfig = {
    position: `${isLgUp ? 'bottom-right' : 'bottom-center'}` as const,
    toastOptions: {
      style: {
        fontSize: 'var(--toast-font-size)',
        border: '0px solid var(--background)',
        borderRadius: '12px',
        padding: 'var(--toast-padding)',
        color: 'var(--foreground)',
        backgroundColor: 'var(--background)',
        fontFamily: 'var(--font-goia-display)',
        boxShadow: '8px 8px 0 0 var(--foreground), 0 0 0 3px var(--foreground)',
        fontWeight: '600',
        marginRight: 'var(--toast-margin-right)',
        marginBottom: '20px'
      },
      success: {
        iconTheme: {
          primary: 'var(--foreground)',
          secondary: 'var(--background)'
        }
      }
    }
  }

  return <Toaster {...toastConfig} />
}

export default StyledToaster
