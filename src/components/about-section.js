import * as React from "react"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { useScrollAnimation } from "../hooks/use-scroll-animation"

const AboutSection = () => {
  const { t } = useTranslation()
  const sectionRef = useScrollAnimation()

  return (
    <section className="py-16 px-4 bg-base-100" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        <div className="flex items-center gap-3 mb-8">
          <UserCircleIcon className="w-8 h-8 text-primary" aria-hidden="true" />
          <h2 id="about-heading" className="text-4xl font-bold">{t("about.title")}</h2>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg leading-relaxed">
            {t("about.paragraph2")}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
