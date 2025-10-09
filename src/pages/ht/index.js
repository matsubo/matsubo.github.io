import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import {
  UserIcon,
  BookOpenIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  LinkIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline"

const AboutPage = () => (
  <Layout>
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-primary to-secondary text-primary-content py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <StaticImage src="img/face.png" alt="Yuki Matsukura" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Yuki Matsukura</h1>
            <p className="text-xl opacity-90 mb-2">
              <ruby>
                松倉<rt>まつくら</rt> 友樹<rt>ゆうき</rt>
              </ruby>
            </p>
            <p className="text-lg opacity-80">
              Keio University Faculty of Environmental Information
            </p>
            <p className="text-lg opacity-80">Hide Tokuda Lab</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Profile Section */}
      <section className="mb-16">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-6">
              <UserIcon className="h-8 w-8" />
              Profile
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3">Contact</h3>
                <a
                  href="https://www.facebook.com/matsubokkuri"
                  className="link link-primary flex items-center gap-2 mb-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Facebook Profile
                </a>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-primary badge-lg">
                    Location Information
                  </div>
                  <div className="badge badge-primary badge-lg">GPS</div>
                  <div className="badge badge-primary badge-lg">
                    Behavior Modeling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <BookOpenIcon className="h-10 w-10 text-primary" />
          Publications
        </h2>
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">
                u-Texture: A Self-Organizable Material with Multiple Sensors
                <a
                  href="/paper/200408_ubicomp.pdf"
                  className="badge badge-secondary"
                >
                  PDF
                </a>
              </h3>
              <p className="text-sm opacity-70">
                Yuki Matsukura, Naohiko Kohtake, Jin Nakazawa, Kazunori
                Takashio, Hideyuki Tokuda
              </p>
              <p>
                Position paper of Ubicomp 2004 on Playing with Sensors workshop.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">
                MUGI:Design and Implementation of Activity Models for Proposal
                Navigation Services using Location Information and Places'
                Attributes
                <a
                  href="/paper/200502_thesis.pdf"
                  className="badge badge-secondary"
                >
                  PDF
                </a>
              </h3>
              <p className="text-sm opacity-70">Yuki Matsukura</p>
              <p>
                Bachelor's thesis 2005, Keio University Faculty of environmental
                information.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">
                Activity Model using Location and Places' Attributes for
                Navigation Services
                <a
                  href="/paper/200506_iwsawc.pdf"
                  className="badge badge-secondary"
                >
                  PDF
                </a>
              </h3>
              <p className="text-sm opacity-70">
                Yuki Matsukura, Naohiko Kohtake, Kazunori Takashio, Hideyuki
                Tokuda
              </p>
              <p>
                IWSAWC 2005, Held in conjunction with the IEEE International
                Conference on Distributed Computing Systems (ICDCS)
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-lg">
                Platform for Realizing Social Gaming -How to Develop Attractive
                Games for 1 Billion Users-
                <a
                  href="http://www.ieice.org/ken/program/index.php?tgs_regid=7b51ac8a2255b64211deee115de18aa9001df9945f52808b72e33513fedb8ef3&amp;tgid=IEICE-NLC&amp;lang="
                  className="badge badge-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  URL
                </a>
              </h3>
              <p className="text-sm opacity-70">
                Yuki Matsukura, Hideki Tanaka, Masaki Fujimoto
              </p>
              <p>
                Technical Committee on Natural Language Understanding and Models
                of Communication (NLC) 2012
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <PresentationChartBarIcon className="h-10 w-10 text-primary" />
          Presentations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">
                Basics and Development using PHP5
                <a href="/ppt/function.zip" className="badge badge-accent">
                  Zip
                </a>
              </h3>
              <p>
                This presentation is for PHP beginner. By hearing this
                presentation, you can know basics of PHP, new functions of PHP5
                and treands in development field.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">
                Survey of "Privacy-Aware Location Sensor Networks"
              </h3>
              <p>
                This research shows how to protect sensor nodes' privacy in
                sensor networks.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">
                Survey of "Social Disclosure of Place: From Location Technology
                to Communication Practices"
                <a
                  href="/ppt/social_disclosure_of_place.ppt"
                  className="badge badge-accent"
                >
                  PPT
                </a>
              </h3>
              <p>
                PlaceLab works middleware of multiple location devices such as
                GPS, GSM and 802.11. Application programmer can obtain users'
                location wherever indoor or outdoor.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">
                GREE's strategy exporting Japanese social game to the world
                wide.
              </h3>
              <p>
                Made a presentation on CEDEC(Computer science Entertainment
                Developers Conference) 2012.
              </p>
              <a
                href="https://gigazine.net/news/20120829-gree-strategy-cedec2012/"
                className="link link-primary"
                target="_blank"
                rel="noreferrer"
              >
                View on Gigazine →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Term Projects Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <DocumentTextIcon className="h-10 w-10 text-primary" />
          Term Projects
        </h2>
        <div className="space-y-6">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-xl">
                Area Based Matching system - 2002/Spring
              </h3>
              <p>
                This system enables users to find someone who can offer users'
                needs. As a scenario, when a user is alone in university, the
                user wants to have lunch. the user use this system and find a
                person who wants to have lunch near the user.
              </p>
              <a
                href="https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/%7ematsu/2002s/"
                className="link link-primary"
                target="_blank"
                rel="noreferrer"
              >
                Archive Link →
              </a>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-xl">
                DoCoDeMo pingpong! - 2002/Autumn
              </h3>
              <p>
                This system enables users to receive home's interphone on PC.
                Even users are in university, they can receive and respond to
                visitors.
              </p>
              <a
                href="https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/~matsu/2002a/"
                className="link link-primary"
                target="_blank"
                rel="noreferrer"
              >
                Archive Link →
              </a>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-xl">
                Middleware for Public Services - 2003/Spring
              </h3>
              <p>
                I constructed a middleware to save working snapshot. A user can
                continue works even in moved another location.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-xl">
                Object LOcating System - 2003/Autumn
              </h3>
              <p>
                This system manages objects attached RFID by managing RFID
                readers' location. So applications can navigate users to the
                wanted objects, and manage object by shopkeeper. These days,
                many products are published related in this research.
              </p>
              <a
                href="https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/%7Ematsu/2003a/"
                className="link link-primary"
                target="_blank"
                rel="noreferrer"
              >
                Archive Link →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <LinkIcon className="h-10 w-10 text-primary" />
          Links
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://matsu.teraren.com/blog/"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-body">
              <h3 className="card-title">BLOG</h3>
              <p>
                I'm writing my daily life and interests about bikes, aquarium
                and traveling.
              </p>
            </div>
          </a>

          <a
            href="https://portfolio.teraren.com/"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-body">
              <h3 className="card-title">Photograph</h3>
              <p>Publishing for Creative Commons on my server.</p>
            </div>
          </a>

          <a
            href="https://500px.com/p/matsubokkuri?view=photos"
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-body">
              <h3 className="card-title">500px</h3>
              <p>Photo portfolio on 500px platform.</p>
            </div>
          </a>
        </div>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <BriefcaseIcon className="h-10 w-10 text-primary" />
          Work History
        </h2>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start">2001/4 - 2001/8</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>COM Corp</strong> - System management department
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2001/9 - 2002/4</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>CNS guide 2002</strong> - Editor
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2002/4 - 2003/3</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>SFC Data Science Lab</strong> - Sub-administrator
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2002/4 - 2002/9</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>Clair Inc.</strong> - System developer
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2002/4 - 2005/9</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>Marue Corp.</strong> - Consultant, System Management
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2003/4 - 2004/3</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>CNS guide 2004</strong> - Chief editor
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2003/4 - 2005/4</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>SFC Data Science Lab</strong> - Administrator
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2006/4 - 2009/3</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>E-commerce ASP Company</strong> - System Architect
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2009/4 - 2011/1</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-primary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>Coach United</strong> - Chief Engineer
                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-start">2011/2 - Present</div>
                <div className="timeline-middle">
                  <CheckCircleIcon className="w-5 h-5 text-secondary" />
                </div>
                <div className="timeline-end timeline-box">
                  <strong>GREE, Inc.</strong> - Senior Engineer / Manager
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <ShieldCheckIcon className="h-10 w-10 text-primary" />
          Skills & Certificates
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">System Administration</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-outline">Linux</div>
                <div className="badge badge-outline">UNIX</div>
                <div className="badge badge-outline">Windows Server</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-outline">Perl</div>
                <div className="badge badge-outline">PHP</div>
                <div className="badge badge-outline">Shell</div>
                <div className="badge badge-outline">Java</div>
                <div className="badge badge-outline">Ruby</div>
                <div className="badge badge-outline">JavaScript</div>
                <div className="badge badge-outline">HTML/CSS</div>
                <div className="badge badge-outline">LaTeX</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Applications & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <div className="badge badge-outline">MySQL</div>
                <div className="badge badge-outline">PostgreSQL</div>
                <div className="badge badge-outline">MS-Office</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                  LPIC Level 1, Level 2
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                  Applied Information Technology Engineer (AP)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                  Amateur Third-Class Radio Operator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Footer */}
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-t-3xl">
      <div>
        <p className="font-semibold">Last update: 2023-11-07</p>
        <div className="grid grid-flow-col gap-4 mt-4">
          <a
            href="https://twitter.com/matsubokkuri"
            className="link link-hover"
            target="_blank"
            rel="noreferrer"
          >
            X (Twitter)
          </a>
          <a
            href="https://www.facebook.com/matsubokkuri"
            className="link link-hover"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a href="#top" className="link link-hover">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  </Layout>
)

export default AboutPage

export const Head = () => (
  <Seo
    title="Research Laboratory Archive - Yuki Matsukura"
    description="Academic research projects and publications from Hide Tokuda laboratory at Keio University. Context-aware systems, ubiquitous computing, and location-based services."
    pathname="/ht/"
  />
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
