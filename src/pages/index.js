import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import HeroSection from "../components/hero-section"
import AboutSection from "../components/about-section"
import FeaturedProjects from "../components/featured-projects"
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

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />

    {/* MBTI & Work Style Section */}
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <LightBulbIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Personality & Work Style</h2>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-3xl mb-4">
              <span className="badge badge-primary badge-lg">INTP-A</span>
              <span>Logician - Assertive Type</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">Core Strengths</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>Logical Analysis:</strong> Deep analytical
                      thinking and problem-solving capabilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>Strategic Vision:</strong> Long-term planning and
                      architectural decision-making
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>Innovation Focus:</strong> Creating novel
                      solutions and exploring new possibilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SparklesIcon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>
                      <strong>Individual Understanding:</strong> Recognizing and
                      leveraging each team member's unique strengths
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Leadership Approach
                </h4>
                <p className="mb-4">
                  As an INTP-A (Assertive) type, I bring confidence and calm
                  under pressure to technical leadership. My approach combines
                  rigorous logical thinking with genuine care for team members'
                  growth and development.
                </p>
                <p>
                  I excel at breaking down complex technical challenges,
                  creating clear strategic roadmaps, and building environments
                  where engineers can do their best work.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <p className="text-sm italic">
                <strong>Note:</strong> Based on MBTI assessment and AI analysis.{" "}
                <a
                  href="https://diary.teraren.com/2025/04/14/mbti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  Full Analysis
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
            Academic & Research Achievements
          </h2>
        </div>

        {/* Research Papers */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-secondary" />
            Research Papers
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  Understanding Regional Characteristics Through EC Data
                  Analysis
                </h4>
                <p className="text-sm text-base-content/70">
                  Published in Springer • 2023
                </p>
                <p className="mt-2">
                  Research analyzing e-commerce data to understand regional
                  characteristics and consumer behavior patterns.
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="https://link.springer.com/chapter/10.1007/978-3-031-34668-2_26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Publication
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  MUGI: Design and Implementation of Activity Models
                </h4>
                <p className="text-sm text-base-content/70">
                  Master's Thesis, Keio University • 2005
                </p>
                <p className="mt-2">
                  Design and implementation of activity models using location
                  information and place attributes for navigation services.
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="/paper/200502_thesis.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Download PDF
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
            Presentations & Speaking
          </h3>
          <div className="space-y-4">
            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  Snowday Panel Discussion - Data Future
                </h4>
                <p className="text-sm text-base-content/70">2023</p>
                <p className="mt-2">
                  Panel discussion about the future of data ecosystems with
                  insights from Minedia's Mineds service.
                </p>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body">
                <h4 className="card-title">
                  Platform for Realizing Social Gaming
                </h4>
                <p className="text-sm text-base-content/70">CEDEC 2012</p>
                <p className="mt-2">
                  How to Develop Attractive Games for 1 Billion Users
                </p>
                <div className="card-actions mt-4">
                  <a
                    href="https://gigazine.net/news/20120829-gree-strategy-cedec2012/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Coverage
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
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>

        <div className="space-y-8">
          {/* Minedia */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">CTO</h3>
                  <p className="text-lg font-semibold text-primary">
                    Minedia Inc.
                  </p>
                </div>
                <div className="badge badge-primary badge-lg">
                  2018 - Present
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>
                  Leading technology strategy and development for data
                  technology startup
                </li>
                <li>Successfully raised approximately ¥500M in funding</li>
                <li>
                  Published research on regional EC data analysis (Springer,
                  2023)
                </li>
                <li>
                  Built and scaled engineering team to support business growth
                </li>
              </ul>
            </div>
          </div>

          {/* Metaps */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">Manager</h3>
                  <p className="text-lg font-semibold text-primary">
                    Metaps Inc.
                  </p>
                </div>
                <div className="badge badge-secondary badge-lg">
                  2014 - 2018
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>
                  Led development of SPIKE - a revolutionary zero-fee payment
                  service
                </li>
                <li>
                  Built and launched the platform from scratch in 3 months
                </li>
                <li>
                  Managed engineering team and technical architecture decisions
                </li>
              </ul>
            </div>
          </div>

          {/* GREE */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="card-title text-2xl">Manager</h3>
                  <p className="text-lg font-semibold text-primary">
                    GREE Inc.
                  </p>
                </div>
                <div className="badge badge-secondary badge-lg">
                  2011 - 2013
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-base-content/80">
                <li>Managed development of in-house social gaming platform</li>
                <li>
                  Presented at CEDEC 2012 on social gaming platform strategy
                </li>
                <li>Supported platform serving millions of users globally</li>
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
          <h2 className="text-4xl font-bold">Technical Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">Ruby</span>
                <span className="badge badge-primary badge-lg">PHP</span>
                <span className="badge badge-primary badge-lg">JavaScript</span>
                <span className="badge badge-primary badge-lg">TypeScript</span>
                <span className="badge badge-primary badge-lg">Python</span>
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
              <h3 className="card-title text-xl mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary badge-lg">
                  Ruby on Rails
                </span>
                <span className="badge badge-secondary badge-lg">React</span>
                <span className="badge badge-secondary badge-lg">Next.js</span>
                <span className="badge badge-secondary badge-lg">Nuxt.js</span>
                <span className="badge badge-secondary badge-lg">Vue.js</span>
                <span className="badge badge-secondary badge-lg">Angular</span>
                <span className="badge badge-secondary badge-lg">Gatsby</span>
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
              <h3 className="card-title text-xl mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-accent badge-lg">AWS</span>
                <span className="badge badge-accent badge-lg">GCP</span>
                <span className="badge badge-accent badge-lg">Azure</span>
                <span className="badge badge-accent badge-lg">Docker</span>
                <span className="badge badge-accent badge-lg">Kubernetes</span>
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
              <h3 className="card-title text-xl mb-4">Databases & Caching</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-info badge-lg">MySQL</span>
                <span className="badge badge-info badge-lg">PostgreSQL</span>
                <span className="badge badge-info badge-lg">MongoDB</span>
                <span className="badge badge-info badge-lg">Redis</span>
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
              <h3 className="card-title text-xl mb-4">Testing & Quality</h3>
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
              <h3 className="card-title text-xl mb-4">API & Integration</h3>
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
                Infrastructure & Servers
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
                Message Queue & Streaming
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
                Version Control & Tools
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
              <h3 className="card-title text-xl mb-4">AI & Machine Learning</h3>
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
          <h2 className="text-4xl font-bold">Hobbies & Personal Interests</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <TrophyIcon className="w-6 h-6 text-warning" />
                Triathlon
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-warning">🏆</span>
                  <span>IRONMAN World Championship 2017 participant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">💡</span>
                  <span>Developed AI-powered tools for training analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title flex items-center gap-2">
                <DocumentTextIcon className="w-6 h-6 text-info" />
                Technical Writing
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-info">📝</span>
                  <span>88 articles published on Zenn</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">📝</span>
                  <span>19-year tech blog (blog.teraren.com)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-info">📚</span>
                  <span>
                    SFC CNS Guide editor for 3 years, served as Editor-in-Chief
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">Certifications</h3>
              <ul className="space-y-2 mt-4 text-sm">
                <li>
                  • 応用情報技術者試験 (Applied Information Technology Engineer)
                  - 2013
                </li>
                <li>• LPIC Level 2 - 2004</li>
                <li>• 第二種電気工事士 (Second-Class Electrician) - 2021</li>
                <li>• TOEIC: 875</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Archive Section */}
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Archive</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="sfc/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                University Archive
              </h3>
              <p className="text-base-content/70">
                Academic reports and projects from Shonan Fujisawa Campus
                period.
              </p>
            </div>
          </Link>

          <Link
            to="ht/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                Research Lab Archive
              </h3>
              <p className="text-base-content/70">
                Academic work from Hide Tokuda laboratory.
              </p>
            </div>
          </Link>

          <Link
            to="rails/"
            className="card bg-base-100 hover:bg-base-300 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="card-body">
              <h3 className="card-title group-hover:text-primary transition-colors">
                Ruby on Rails Setup Guide
              </h3>
              <p className="text-base-content/70">
                Complete installation and setup guide for Ruby on Rails.
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
          <h2 className="text-4xl font-bold">Let's Connect</h2>
        </div>
        <p className="text-lg text-base-content/70 mb-8">
          Interested in collaboration or just want to say hello? Feel free to
          reach out!
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

export default IndexPage

export const Head = () => <Seo />
