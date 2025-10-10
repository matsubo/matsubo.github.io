'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface ImageWithLightboxProps {
  src: string | StaticImageData
  alt: string
  className?: string
}

export default function ImageWithLightbox({
  src,
  alt,
  className = '',
}: ImageWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(true)
          }
        }}
      >
        <Image src={src} alt={alt} className="rounded-lg shadow-md" />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setIsOpen(false)
            }
          }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
              aria-label="閉じる"
            >
              ✕ 閉じる
            </button>
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                className="max-h-[85vh] w-auto object-contain"
                style={{ maxWidth: '90vw' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
