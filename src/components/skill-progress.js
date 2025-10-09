import * as React from "react"

const SkillProgress = ({ name, level }) => {
  const [animatedLevel, setAnimatedLevel] = React.useState(0)
  const progressRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate progress bar
            setTimeout(() => {
              setAnimatedLevel(level)
            }, 100)
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current)
      }
    }
  }, [level])

  // Determine color based on level
  const getProgressColor = () => {
    if (level >= 90) return "progress-primary"
    if (level >= 80) return "progress-secondary"
    if (level >= 70) return "progress-accent"
    return "progress-info"
  }

  return (
    <div ref={progressRef} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-sm font-bold text-primary">{level}%</span>
      </div>
      <progress
        className={`progress ${getProgressColor()} w-full h-3`}
        value={animatedLevel}
        max="100"
        style={{
          transition: "value 1s ease-out",
        }}
      ></progress>
    </div>
  )
}

export default SkillProgress
