import "./src/styles/global.css"

// Set default theme to cupcake on initial load
if (typeof window !== "undefined") {
  // Check if theme is already set
  const theme = document.documentElement.getAttribute("data-theme")
  if (!theme) {
    document.documentElement.setAttribute("data-theme", "cupcake")
  }
}
