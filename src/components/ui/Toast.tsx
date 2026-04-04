'use client'

import { useEffect } from 'react'

type ToastType = 'success' | 'error'

interface ToastProps {
  type: ToastType
  message: string
  onClose: () => void
  duration?: number
}

export function Toast({ type, message, onClose, duration = 4000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [onClose, duration])

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-xl px-5 py-4 shadow-lg transition-all ${
        type === 'success'
          ? 'bg-green-50 text-green-800 ring-1 ring-green-200 dark:bg-green-950/60 dark:text-green-300 dark:ring-green-800'
          : 'bg-red-50 text-red-800 ring-1 ring-red-200 dark:bg-red-950/60 dark:text-red-300 dark:ring-red-800'
      }`}
    >
      <span className="mt-0.5 text-lg leading-none" aria-hidden>
        {type === 'success' ? '✓' : '✕'}
      </span>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        aria-label="Dismiss"
        className="ml-2 text-current opacity-50 transition-opacity hover:opacity-100"
      >
        ✕
      </button>
    </div>
  )
}
