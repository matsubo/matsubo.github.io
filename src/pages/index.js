import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import StructuredData from "../components/structured-data"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import FeaturedProjects from "../components/featured-projects"
import SkillProgress from "../components/skill-progress"
import {
  AcademicCapIcon,
  BeakerIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  HeartIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline"
import { Link } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
  <Layout>
    <HeroSection />
    <AboutSection />

    {/* MBTI & Work Style Section */}
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <LightBulbIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("personality.title")}</h2>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-3xl mb-4 flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <span className="badge badge-primary badge-lg whitespace-nowrap">{t("personality.mbti")}</span>
              <span>{t("personality.subtitle")}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">{t("personality.strengths.title")}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t("personality.strengths.logical.title")}</strong> {t("personality.strengths.logical.description")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t("personality.strengths.strategic.title")}</strong> {t("personality.strengths.strategic.description")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t("personality.strengths.innovation.title")}</strong> {t("personality.strengths.innovation.description")}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>{t("personality.strengths.understanding.title")}</strong> {t("personality.strengths.understanding.description")}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  {t("personality.leadership.title")}
                </h4>
                <p className="mb-4">
                  {t("personality.leadership.description1")}
                </p>
                <p>
                  {t("personality.leadership.description2")}
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <p className="text-sm italic">
                <strong>{t("personality.note")}</strong> {t("personality.noteText")}{" "}
                <a
                  href="https://diary.teraren.com/2025/04/14/mbti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  {t("personality.fullAnalysis")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Academic & Research Section */}
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <AcademicCapIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">
            {t("academic.title")}
          </h2>
        </div>

        {/* Research Papers */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-secondary" />
            {t("academic.papers.title")}
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  {t("academic.papers.ec.title")}
                </h4>
                <p className="text-sm text-base-content/70">
                  {t("academic.papers.ec.meta")}
                </p>
                <p className="mt-2">
                  {t("academic.papers.ec.description")}
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-3-031-34668-2_26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t("academic.papers.ec.button")}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  {t("academic.papers.mugi.title")}
                </h4>
                <p className="text-sm text-base-content/70">
                  {t("academic.papers.mugi.meta")}
                </p>
                <p className="mt-2">
                  {t("academic.papers.mugi.description")}
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="/paper/200502_thesis.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t("academic.papers.mugi.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Presentations */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <BeakerIcon className="w-6 h-6 text-secondary" />
            {t("academic.presentations.title")}
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  {t("academic.presentations.snowday.title")}
                </h4>
                <p className="text-sm text-base-content/70">{t("academic.presentations.snowday.meta")}</p>
                <p className="mt-2">
                  {t("academic.presentations.snowday.description")}
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="https://dev.classmethod.jp/articles/snowday-report-hone/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t("academic.presentations.snowday.button")}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  {t("academic.presentations.cedec.title")}
                </h4>
                <p className="text-sm text-base-content/70">{t("academic.presentations.cedec.meta")}</p>
                <p className="mt-2">
                  {t("academic.presentations.cedec.description")}
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="https://gigazine.net/news/20120829-gree-strategy-cedec2012/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t("academic.presentations.cedec.button")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Professional Experience Section */}
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <BriefcaseIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("experience.title")}</h2>
        </div>

        <div className="space-y-8">
          {/* Minedia */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t("experience.minedia.role")}</h3>
                  <p className="text-lg font-semibold text-primary">
                    {t("experience.minedia.company")}
                  </p>
                </div>
                <div className="badge badge-primary badge-lg">
                  {t("experience.minedia.period")}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {(t("experience.minedia.items", { returnObjects: true }) || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metaps */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t("experience.metaps.role")}</h3>
                  <p className="text-lg font-semibold text-primary">
                    {t("experience.metaps.company")}
                  </p>
                </div>
                <div className="badge badge-secondary badge-lg">
                  {t("experience.metaps.period")}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {(t("experience.metaps.items", { returnObjects: true }) || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* GREE */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">{t("experience.gree.role")}</h3>
                  <p className="text-lg font-semibold text-primary">
                    {t("experience.gree.company")}
                  </p>
                </div>
                <div className="badge badge-secondary badge-lg">
                  {t("experience.gree.period")}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                {(t("experience.gree.items", { returnObjects: true }) || []).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Technical Skills Section */}
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <CodeBracketIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("skills.title")}</h2>
        </div>

        {/* Main Skills with Progress Bars */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-primary" />
            {t("skills.expertSkills")}
          </h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {(t("skills.mainSkills", { returnObjects: true }) || []).map((skill, index) => (
              <SkillProgress
                key={index}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Other Technologies</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.languages")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">PHP</span>
                <span className="badge badge-primary badge-lg">Go</span>
                <span className="badge badge-primary badge-lg">Java</span>
                <span className="badge badge-primary badge-lg">Kotlin</span>
                <span className="badge badge-primary badge-lg">Swift</span>
                <span className="badge badge-primary badge-lg">C</span>
                <span className="badge badge-primary badge-lg">C++</span>
                <span className="badge badge-primary badge-lg">Rust</span>
                <span className="badge badge-primary badge-lg">Shell/Bash</span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.frameworks")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary badge-lg">Nuxt.js</span>
                <span className="badge badge-secondary badge-lg">Vue.js</span>
                <span className="badge badge-secondary badge-lg">Angular</span>
                <span className="badge badge-secondary badge-lg">Django</span>
                <span className="badge badge-secondary badge-lg">FastAPI</span>
                <span className="badge badge-secondary badge-lg">Laravel</span>
                <span className="badge badge-secondary badge-lg">
                  Express.js
                </span>
                <span className="badge badge-secondary badge-lg">Flutter</span>
                <span className="badge badge-secondary badge-lg">
                  React Native
                </span>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.cloud")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-accent badge-lg">Azure</span>
                <span className="badge badge-accent badge-lg">
                  GitHub Actions
                </span>
                <span className="badge badge-accent badge-lg">CircleCI</span>
                <span className="badge badge-accent badge-lg">Jenkins</span>
                <span className="badge badge-accent badge-lg">Terraform</span>
                <span className="badge badge-accent badge-lg">Ansible</span>
                <span className="badge badge-accent badge-lg">Cloudflare</span>
                <span className="badge badge-accent badge-lg">Vercel</span>
                <span className="badge badge-accent badge-lg">Netlify</span>
              </div>
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.database")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-info badge-lg">Elasticsearch</span>
                <span className="badge badge-info badge-lg">DynamoDB</span>
                <span className="badge badge-info badge-lg">Cassandra</span>
                <span className="badge badge-info badge-lg">Memcached</span>
                <span className="badge badge-info badge-lg">SQLite</span>
              </div>
            </div>
          </div>

          {/* Testing & Quality */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.testing")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-warning badge-lg">Jest</span>
                <span className="badge badge-warning badge-lg">RSpec</span>
                <span className="badge badge-warning badge-lg">Pytest</span>
                <span className="badge badge-warning badge-lg">Mocha</span>
                <span className="badge badge-warning badge-lg">Chai</span>
                <span className="badge badge-warning badge-lg">Selenium</span>
                <span className="badge badge-warning badge-lg">Cypress</span>
                <span className="badge badge-warning badge-lg">Playwright</span>
                <span className="badge badge-warning badge-lg">JUnit</span>
              </div>
            </div>
          </div>

          {/* API & Integration */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.api")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-success badge-lg">REST</span>
                <span className="badge badge-success badge-lg">GraphQL</span>
                <span className="badge badge-success badge-lg">gRPC</span>
                <span className="badge badge-success badge-lg">WebSocket</span>
                <span className="badge badge-success badge-lg">OpenAPI</span>
                <span className="badge badge-success badge-lg">Swagger</span>
                <span className="badge badge-success badge-lg">Postman</span>
              </div>
            </div>
          </div>

          {/* Infrastructure & Web Servers */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">
                {t("skills.infrastructure")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg">Linux</span>
                <span className="badge badge-lg">Ubuntu</span>
                <span className="badge badge-lg">CentOS</span>
                <span className="badge badge-lg">Nginx</span>
                <span className="badge badge-lg">Apache</span>
                <span className="badge badge-lg">Load Balancer</span>
                <span className="badge badge-lg">CDN</span>
              </div>
            </div>
          </div>

          {/* Message Queue & Streaming */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">
                {t("skills.messageQueue")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-error badge-lg">RabbitMQ</span>
                <span className="badge badge-error badge-lg">Kafka</span>
                <span className="badge badge-error badge-lg">SQS</span>
                <span className="badge badge-error badge-lg">SNS</span>
                <span className="badge badge-error badge-lg">Pub/Sub</span>
              </div>
            </div>
          </div>

          {/* Version Control & Tools */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">
                {t("skills.versionControl")}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-lg">Git</span>
                <span className="badge badge-lg">GitHub</span>
                <span className="badge badge-lg">GitLab</span>
                <span className="badge badge-lg">Bitbucket</span>
                <span className="badge badge-lg">SVN</span>
                <span className="badge badge-lg">VS Code</span>
                <span className="badge badge-lg">Vim</span>
              </div>
            </div>
          </div>

          {/* AI & Machine Learning */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">{t("skills.ai")}</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">OpenAI</span>
                <span className="badge badge-primary badge-lg">Anthropic</span>
                <span className="badge badge-primary badge-lg">Groq</span>
                <span className="badge badge-primary badge-lg">LangChain</span>
                <span className="badge badge-primary badge-lg">TensorFlow</span>
                <span className="badge badge-primary badge-lg">PyTorch</span>
                <span className="badge badge-primary badge-lg">
                  scikit-learn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FeaturedProjects />

    {/* Hobbies & Interests Section */}
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HeartIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("hobbies.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <TrophyIcon className="w-6 h-6 text-warning" />
                {t("hobbies.triathlon.title")}
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-warning">🏆</span>
                  <span>{t("hobbies.triathlon.worldChampionship")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🏃</span>
                  <span>{t("hobbies.triathlon.marathon")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">🏊</span>
                  <span>{t("hobbies.triathlon.openwater")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🚴</span>
                  <span>{t("hobbies.triathlon.ironman703")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">💡</span>
                  <span>{t("hobbies.triathlon.aiTools")}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-info" />
                {t("hobbies.writing.title")}
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-info">📝</span>
                  <span>{t("hobbies.writing.zenn")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">📝</span>
                  <span>{t("hobbies.writing.blog")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">📚</span>
                  <span>
                    {t("hobbies.writing.editor")}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning">🔥</span>
                  <a
                    href="https://labs.gree.jp/blog/2011/04/3282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary hover:link-accent"
                  >
                    {t("hobbies.writing.gree")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">{t("hobbies.certifications.title")}</h3>
              <ul className="space-y-2 mt-4 text-sm">
                <li>• {t("hobbies.certifications.applied")}</li>
                <li>• {t("hobbies.certifications.lpic")}</li>
                <li>• {t("hobbies.certifications.electrician")}</li>
                <li>• {t("hobbies.certifications.toeic")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Archive Section */}
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("archive.title")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="sfc/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                {t("archive.university.title")}
              </h3>
              <p className="text-base-content/70">
                {t("archive.university.description")}
              </p>
            </div>
          </Link>

          <Link
            to="ht/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                {t("archive.lab.title")}
              </h3>
              <p className="text-base-content/70">
                {t("archive.lab.description")}
              </p>
            </div>
          </Link>

          <Link
            to="rails/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                {t("archive.rails.title")}
              </h3>
              <p className="text-base-content/70">
                {t("archive.rails.description")}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-16 px-4 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <EnvelopeIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t("contact.title")}</h2>
        </div>
        <p className="text-lg text-base-content/70 mb-8">
          {t("contact.description")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/matsubo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yukimatsukura/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary gap-2"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/matsubokkuri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <Seo
      title="Yuki Matsukura - CTO & Software Engineer | 20+ Years Experience"
      description="Experienced CTO at Minedia with 20+ years in software engineering. Expert in scalable systems, Ruby on Rails, React, and team leadership. Former tech lead at Metaps and GREE."
    />
    <StructuredData />
  </>
)

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
