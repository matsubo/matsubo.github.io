'use client'

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link fixed top-2 left-2 z-50 bg-primary text-primary-content px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-4 focus:ring-primary-focus transform -translate-y-20 focus:translate-y-0 transition-transform duration-200"
      style={{
        position: "fixed",
        top: "0.5rem",
        left: "0.5rem",
        zIndex: 9999,
      }}
    >
      Skip to main content
    </a>
  )
}
