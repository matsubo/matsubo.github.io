'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { RocketLaunchIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import aiModeratorImg from '@/images/ai-moderator.png'
import aiTriathlonImg from '@/images/ai-triathlon.png'
import minedsImg from '@/images/mineds.webp'
import gasPlatformImg from '@/images/gas-platform.png'
import recallSystemImg from '@/images/recall-system.png'
import spikeImg from '@/images/spike.webp'
import greeSmartphoneImg from '@/images/gree-smartphone.webp'
import cytaImg from '@/images/cyta.webp'
import terarenImg from '@/images/teraren.webp'
import emojiSpriteImg from '@/images/emoji-sprite.webp'
import covid19DailyImg from '@/images/covid19-daily.webp'

export function ProjectsSection() {
  const t = useTranslations()

  return (
    <section className="py-16 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <RocketLaunchIcon className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">{t('projects.title')}</h2>
        </div>

        {/* AI Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <CpuChipIcon className="w-6 h-6 text-secondary" />
            {t('projects.aiTools.title')}
          </h3>
          <p className="text-base-content/70 mb-6">{t('projects.aiTools.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <Image
                  src={aiModeratorImg}
                  alt="AI Moderator"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.aiTools.moderator.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.aiTools.moderator.subtitle')}</p>
                <p className="text-base-content/80 whitespace-pre-line">{t('projects.aiTools.moderator.description')}</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://ai-moderator.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('projects.aiTools.moderator.button')}
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure>
                <Image
                  src={aiTriathlonImg}
                  alt="AI Triathlon Training"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.aiTools.triathlon.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.aiTools.triathlon.subtitle')}</p>
                <p className="text-base-content/80 whitespace-pre-line">{t('projects.aiTools.triathlon.description')}</p>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://triathlon.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {t('projects.aiTools.triathlon.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-2">{t('projects.apiServices.title')}</h3>
          <p className="text-base-content/70 mb-6">{t('projects.apiServices.subtitle')}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Postcode API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.postcode.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.postcode.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.postcode.features')) &&
                    t.raw('projects.apiServices.postcode.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://postcode.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.postcode.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Bank Code API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.bank.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.bank.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.bank.features')) &&
                    t.raw('projects.apiServices.bank.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://bank.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.bank.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Corporation API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.corporation.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.corporation.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.corporation.features')) &&
                    t.raw('projects.apiServices.corporation.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://corporation.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.corporation.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* Train API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.train.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.train.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.train.features')) &&
                    t.raw('projects.apiServices.train.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://train.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.train.button')}
                  </a>
                </div>
              </div>
            </div>

            {/* School API */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="card-body">
                <h4 className="card-title text-lg">{t('projects.apiServices.school.title')}</h4>
                <p className="text-sm text-secondary font-semibold">{t('projects.apiServices.school.subtitle')}</p>
                <ul className="text-sm space-y-1 mt-2">
                  {Array.isArray(t.raw('projects.apiServices.school.features')) &&
                    t.raw('projects.apiServices.school.features').map((feature: string, index: number) => (
                      <li key={index}>• {feature}</li>
                    ))}
                </ul>
                <div className="card-actions justify-end mt-4">
                  <a
                    href="https://school.teraren.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.apiServices.school.button')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">{t('projects.pastProjects.title')}</h3>
          <p className="text-base-content/70 mb-6">{t('projects.pastProjects.subtitle')}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mineds */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={minedsImg}
                  alt="Mineds"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.mineds.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.mineds.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.mineds.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.mineds.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.mineds.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.mineds.tech')}</p>
                </div>
              </div>
            </div>

            {/* Gas Platform */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={gasPlatformImg}
                  alt="City Gas Retail Platform"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.gas.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.gas.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.gas.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.gas.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.gas.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.gas.tech')}</p>
                </div>
              </div>
            </div>

            {/* Recall System */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={recallSystemImg}
                  alt="Product Recall System"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.recall.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.recall.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.recall.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.recall.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.recall.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.recall.tech')}</p>
                </div>
              </div>
            </div>

            {/* SPIKE */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={spikeImg}
                  alt="SPIKE Payment Service"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.spike.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.spike.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.spike.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.spike.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.spike.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.spike.tech')}</p>
                </div>
              </div>
            </div>

            {/* GREE Smartphone */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={greeSmartphoneImg}
                  alt="GREE Smartphone Adaptation"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.gree.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.gree.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.gree.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.gree.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.gree.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.gree.tech')}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <a
                    href={t('projects.pastProjects.gree.links.blog')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.pastProjects.gree.links.blogLabel')}
                  </a>
                  <a
                    href={t('projects.pastProjects.gree.links.hatena')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.pastProjects.gree.links.hatenaLabel')}
                  </a>
                </div>
              </div>
            </div>

            {/* Cyta.jp */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  alt="Cyta.jp Learning Platform"
                  src={cytaImg}
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.cyta.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.cyta.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.cyta.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.cyta.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.cyta.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.cyta.tech')}</p>
                </div>
              </div>
            </div>

            {/* teraren.com */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={terarenImg}
                  alt="teraren.com Rental Server"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.teraren.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.teraren.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.teraren.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.teraren.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.teraren.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.teraren.tech')}</p>
                </div>
              </div>
            </div>

            {/* Emoji Sprite */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={emojiSpriteImg}
                  alt="Emoji Sprite OSS Library"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.emoji.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.emoji.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.emoji.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.emoji.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.emoji.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.emoji.tech')}</p>
                </div>
              </div>
            </div>

            {/* COVID-19 Daily Tweet */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="bg-base-300">
                <Image
                  src={covid19DailyImg}
                  alt="COVID-19 Case Visualization System"
                  className="w-full h-48 object-cover brightness-75 hover:brightness-100 transition-all duration-300"
                />
              </figure>
              <div className="card-body">
                <h4 className="card-title">{t('projects.pastProjects.covid19.title')}</h4>
                <div className="flex flex-wrap gap-2 text-xs mb-2">
                  <span className="badge badge-primary">{t('projects.pastProjects.covid19.period')}</span>
                  <span className="badge badge-secondary">{t('projects.pastProjects.covid19.company')}</span>
                </div>
                <p className="text-sm font-semibold text-accent">{t('projects.pastProjects.covid19.role')}</p>
                <p className="text-sm text-base-content/80">{t('projects.pastProjects.covid19.description')}</p>
                <div className="mt-2">
                  <p className="text-xs text-base-content/60"><strong>Tech:</strong> {t('projects.pastProjects.covid19.tech')}</p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <a
                    href={t('projects.pastProjects.covid19.links.site')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.pastProjects.covid19.links.siteLabel')}
                  </a>
                  <a
                    href={t('projects.pastProjects.covid19.links.github')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    {t('projects.pastProjects.covid19.links.githubLabel')}
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
