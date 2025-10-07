import * as React from "react"
import { UserCircleIcon } from "@heroicons/react/24/outline"

const AboutSection = () => (
  <section className="py-16 px-4 bg-base-100">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <UserCircleIcon className="w-8 h-8 text-primary" />
        <h2 className="text-4xl font-bold">About Me</h2>
      </div>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed">
          I'm a software engineer with over 20 years of experience building
          scalable systems and innovative solutions. Currently serving as CTO at
          Minedia, a data technology startup where we've successfully raised
          approximately ¥500M in funding. My career has spanned multiple
          high-growth companies including Metaps, where I led the development of
          SPIKE (a zero-fee payment service), and GREE, where I managed social
          gaming platform development.
        </p>
        <p className="text-lg leading-relaxed">
          I hold a degree from Keio University Shonan Fujisawa Campus (2005) and
          studied at UCLA Extension (2006). My approach combines deep technical
          expertise with strategic thinking, enabling me to build systems that
          drive business growth while maintaining high engineering standards.
        </p>
      </div>
    </div>
  </section>
)

export default AboutSection
