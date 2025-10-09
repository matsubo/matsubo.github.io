import React from "react"
import "./src/styles/global.css"
import enTranslation from "./locales/en/translation.json"
import jaTranslation from "./locales/ja/translation.json"

// Listen for system preference changes
if (typeof window !== "undefined") {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", e => {
      // Only update if user hasn't set a manual preference
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "cupcake"
        document.documentElement.setAttribute("data-theme", newTheme)
      }
    })
}

// Initialize i18n with both languages
const initializeI18n = async () => {
  try {
    const { default: i18next } = await import('i18next')

    if (i18next.isInitialized) {
      // Add Japanese resources if not already added
      if (!i18next.hasResourceBundle("ja", "translation")) {
        i18next.addResourceBundle("ja", "translation", jaTranslation, true, true)
      }

      // Check saved language and restore it
      const savedLanguage = localStorage.getItem("language")

      if (savedLanguage && savedLanguage !== i18next.language) {
        await i18next.changeLanguage(savedLanguage)
      }
    }
  } catch (error) {
    console.error("Failed to initialize i18n:", error)
  }
}

// Add Japanese translations when client loads
export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    // Wait a bit for gatsby-plugin-react-i18next to initialize
    setTimeout(() => {
      initializeI18n()
    }, 100)
  }
}

// Restore language on page navigation
export const onRouteUpdate = ({ location }) => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      initializeI18n()
    }, 50)
  }
}

// Simple approach: just return the element
// Language restoration will happen in the footer component
export const wrapPageElement = ({ element }) => {
  return element
}
