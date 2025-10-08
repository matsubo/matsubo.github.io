import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  RocketLaunchIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline"
import { useTranslation } from "gatsby-plugin-react-i18next"

const FeaturedProjects = () => {
  const { t } = useTranslation()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <RocketLaunchIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("projects.title")}</h2>
        </div>

        {/* AI-Powered Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-accent" />
            {t("projects.aiTools.title")}
          </h3>
          <p className="text-base-content/70 mb-6">
            {t("projects.aiTools.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Moderator */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <StaticImage
                  src="../images/ai-moderator.png"
                  alt="AI Moderator Interface"
                  className="rounded-lg"
                  placeholder="blurred"
                  layout="constrained"
                  height={192}
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">
                  {t("projects.aiTools.moderator.title")}
                </h4>
                <p className="text-sm text-base-content/70">
                  {t("projects.aiTools.moderator.subtitle")}
                </p>
                <p className="mt-2">
                  {t("projects.aiTools.moderator.description")}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="badge badge-outline badge-sm">Next.js</span>
                  <span className="badge badge-outline badge-sm">
                    TypeScript
                  </span>
                  <span className="badge badge-outline badge-sm">Python</span>
                  <span className="badge badge-outline badge-sm">Groq</span>
                  <span className="badge badge-outline badge-sm">Vercel</span>
                </div>
                <div className="card-actions mt-4">
                  <a
                    href="https://ai-moderator.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t("projects.aiTools.moderator.button")}
                  </a>
                </div>
              </div>
            </div>

            {/* Triathlon AI Analyzer */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <StaticImage
                  src="../images/ai-triathlon.png"
                  alt="Triathlon AI Analyzer Dashboard"
                  className="rounded-lg"
                  placeholder="blurred"
                  layout="constrained"
                  height={192}
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">
                  {t("projects.aiTools.triathlon.title")}
                </h4>
                <p className="text-sm text-base-content/70">
                  {t("projects.aiTools.triathlon.subtitle")}
                </p>
                <p className="mt-2">
                  {t("projects.aiTools.triathlon.description")}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="badge badge-outline badge-sm">Next.js</span>
                  <span className="badge badge-outline badge-sm">
                    TypeScript
                  </span>
                  <span className="badge badge-outline badge-sm">AI/ML</span>
                  <span className="badge badge-outline badge-sm">
                    Data Analysis
                  </span>
                </div>
                <div className="card-actions mt-4">
                  <a
                    href="https://ai-triathlon-result.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t("projects.aiTools.triathlon.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Services Collection */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GlobeAltIcon className="w-6 h-6 text-info" />
            {t("projects.apiServices.title")}
          </h3>
          <p className="text-base-content/70 mb-6">
            {t("projects.apiServices.subtitle")}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Postcode API */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-lg">
                  {t("projects.apiServices.postcode.title")}
                </h4>
                <p className="text-sm text-base-content/70 mb-2">
                  {t("projects.apiServices.postcode.subtitle")}
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  {(
                    t("projects.apiServices.postcode.features", {
                      returnObjects: true,
                    }) || []
                  ).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="badge badge-xs">Ruby 3.4</span>
                  <span className="badge badge-xs">Rails 8.0</span>
                  <span className="badge badge-xs">MySQL</span>
                </div>
                <div className="card-actions">
                  <a
                    href="https://postcode.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xs"
                  >
                    {t("projects.apiServices.postcode.button")}
                  </a>
                </div>
              </div>
            </div>

            {/* Other APIs */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-lg">
                  {t("projects.apiServices.bank.title")}
                </h4>
                <p className="text-sm text-base-content/70 mb-2">
                  {t("projects.apiServices.bank.subtitle")}
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  {(
                    t("projects.apiServices.bank.features", {
                      returnObjects: true,
                    }) || []
                  ).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="badge badge-xs">Ruby 3.4</span>
                  <span className="badge badge-xs">Rails 8.0</span>
                </div>
                <div className="card-actions">
                  <a
                    href="https://bank.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xs"
                  >
                    {t("projects.apiServices.bank.button")}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-lg">
                  {t("projects.apiServices.corporation.title")}
                </h4>
                <p className="text-sm text-base-content/70 mb-2">
                  {t("projects.apiServices.corporation.subtitle")}
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  {(
                    t("projects.apiServices.corporation.features", {
                      returnObjects: true,
                    }) || []
                  ).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="badge badge-xs">Ruby 3.4</span>
                  <span className="badge badge-xs">Rails 8.0</span>
                </div>
                <div className="card-actions">
                  <a
                    href="https://corporation.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xs"
                  >
                    {t("projects.apiServices.corporation.button")}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-lg">
                  {t("projects.apiServices.train.title")}
                </h4>
                <p className="text-sm text-base-content/70 mb-2">
                  {t("projects.apiServices.train.subtitle")}
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  {(
                    t("projects.apiServices.train.features", {
                      returnObjects: true,
                    }) || []
                  ).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="badge badge-xs">Ruby 3.4</span>
                  <span className="badge badge-xs">Rails 8.0</span>
                </div>
                <div className="card-actions">
                  <a
                    href="https://train.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xs"
                  >
                    {t("projects.apiServices.train.button")}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h4 className="card-title text-lg">
                  {t("projects.apiServices.school.title")}
                </h4>
                <p className="text-sm text-base-content/70 mb-2">
                  {t("projects.apiServices.school.subtitle")}
                </p>
                <ul className="text-sm space-y-1 mb-4">
                  {(
                    t("projects.apiServices.school.features", {
                      returnObjects: true,
                    }) || []
                  ).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mb-3">
                  <span className="badge badge-xs">Ruby 3.4</span>
                  <span className="badge badge-xs">Rails 8.0</span>
                </div>
                <div className="card-actions">
                  <a
                    href="https://school.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-xs"
                  >
                    {t("projects.apiServices.school.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
