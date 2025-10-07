import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  RocketLaunchIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline"

const FeaturedProjects = () => (
  <section className="py-16 px-4 bg-base-200">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <RocketLaunchIcon className="w-8 h-8 text-primary" />
        <h2 className="text-4xl font-bold">Featured Projects</h2>
      </div>

      {/* AI-Powered Tools */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-accent" />
          AI-Powered Tools
        </h3>
        <p className="text-base-content/70 mb-6">
          Modern intelligent applications for real-world workflows
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
              <h4 className="card-title">AI Moderator</h4>
              <p className="text-sm text-base-content/70">
                AI-powered content moderation system
              </p>
              <p className="mt-2">
                Intelligent content filtering and moderation using advanced AI
                models to ensure safe and appropriate content across platforms.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-outline badge-sm">Next.js</span>
                <span className="badge badge-outline badge-sm">TypeScript</span>
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
                  Visit site
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
              <h4 className="card-title">Triathlon AI Analyzer</h4>
              <p className="text-sm text-base-content/70">
                Performance insights for triathlon training
              </p>
              <p className="mt-2">
                AI-powered analysis of triathlon training data providing
                actionable insights for performance optimization and race
                preparation.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="badge badge-outline badge-sm">Python</span>
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
                  View live site
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
          API Services Collection
        </h3>
        <p className="text-base-content/70 mb-6">
          Modern REST & GraphQL APIs for Japanese data
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Postcode API */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="card-title text-lg">Postcode API</h4>
              <p className="text-sm text-base-content/70 mb-2">
                High-performance Japanese postal code lookup service
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• REST & GraphQL support</li>
                <li>• 90%+ test coverage</li>
                <li>• Multilingual (JP/EN)</li>
                <li>• Cloudflare optimized</li>
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
                  Visit site
                </a>
              </div>
            </div>
          </div>

          {/* Other APIs */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="card-title text-lg">Bank Code API</h4>
              <p className="text-sm text-base-content/70 mb-2">
                Japanese banking institution codes
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Complete bank code database</li>
                <li>• Fast lookup by code/name</li>
                <li>• Financial institution info</li>
                <li>• REST API support</li>
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
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="card-title text-lg">Corporation API</h4>
              <p className="text-sm text-base-content/70 mb-2">
                Company registration information
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Corporate number search</li>
                <li>• Company profile data</li>
                <li>• Registration details</li>
                <li>• Business information</li>
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
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="card-title text-lg">Train & Station API</h4>
              <p className="text-sm text-base-content/70 mb-2">
                Railway and station information
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• Station database search</li>
                <li>• Railway line information</li>
                <li>• Route planning data</li>
                <li>• Location coordinates</li>
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
                  Visit site
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h4 className="card-title text-lg">School API</h4>
              <p className="text-sm text-base-content/70 mb-2">
                Educational institution database
              </p>
              <ul className="text-sm space-y-1 mb-4">
                <li>• School information lookup</li>
                <li>• Educational facility data</li>
                <li>• Institution classification</li>
                <li>• Contact information</li>
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
                  Visit site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
