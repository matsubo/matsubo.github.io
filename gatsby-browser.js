import "./src/styles/global.css"

// Set theme based on system preference on initial load
if (typeof window !== "undefined") {
  // Check if theme is already set in localStorage
  const savedTheme = localStorage.getItem("theme")

  if (savedTheme) {
    // Use saved theme preference
    document.documentElement.setAttribute("data-theme", savedTheme)
  } else {
    // Use system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    const systemTheme = prefersDark ? "dark" : "cupcake"
    document.documentElement.setAttribute("data-theme", systemTheme)
  }

  // Listen for system preference changes
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
