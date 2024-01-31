import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import { Seo } from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AboutPage = () => (
  <Layout>
    <div className="container my-2">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Research lab
          </li>
        </ol>
      </nav>
    </div>

    <div class="container">
      <div class="page-header" id="banner">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-sm-6">
            <h1>Yuki Matsukura in academic</h1>
          </div>
        </div>
      </div>
      <div class="contents">
        <h2>Profile</h2>
        <div>
          <div class="row">
            <div class="col-md-3 text-center">
              <StaticImage
                src="img/face.png"
                width="120"
                height="130"
                alt="Face"
              />
            </div>
            <div class="col-md-9">
              <div class="align-top">
                <strong>Yuki Matsukura</strong>
                &nbsp; (
                <ruby>
                  松倉<rt>まつくら</rt>
                  &nbsp; 友樹<rt>ゆうき</rt>
                </ruby>
                )
              </div>
              Keio University Faculty of environmental information.
              <br />
              Hide Tokuda Lab.
              <table width="408" border="0" cellpadding="1" summary="profile">
                <tr>
                  <td width="106">
                    <FontAwesomeIcon icon={["fas", "coffee"]} />
                  </td>
                  <td width="292">
                    <Link href="https://www.facebook.com/matsubokkuri">
                      https://www.facebook.com/matsubokkuri
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td valign="top">Interests:</td>
                  <td>
                    Location Information
                    <br />
                    Global Positioning System (GPS)
                    <br />
                    Behavior Modeling
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <h2>Publications</h2>
        <div>
          <dl>
            <dt>
              u-Texture: A Self-Organizable Material with Multiple Sensors [{" "}
              <a href={`../../paper/200408_ubicomp.pdf`}>PDF</a> ]
            </dt>
            <dd>
              Yuki Matsukura, Naohiko Kohtake, Jin Nakazawa, Kazunori Takashio,
              Hideyuki Tokuda
              <br />
              Position paper of Ubicomp 2004 on Playing with Sensors workshop.
            </dd>
            <dt>
              MUGI:Design and Implementation of Activity Models for Proposal
              Navigation Services using Location Information and Places'
              Attributes [ <a href={`../../paper/200502_thesis.pdf`}>PDF</a> ]
            </dt>
            <dd>
              Yuki Matsukura
              <br />
              Bachelor's thesis 2005, Keio University Faculty of environmental
              information.
            </dd>
            <dt>
              Activity Model using Location and Places' Attributes for
              Navigation Services [
              <a href={`../../paper/200506_iwsawc.pdf`}>PDF</a> ]
            </dt>
            <dd>
              Yuki Matsukura, Naohiko Kohtake, Kazunori Takashio, Hideyuki
              Tokuda
              <br />
              IWSAWC 2005, Held in conjunction with the IEEE International
              Conference on Distributed Computing Systems (ICDCS)
            </dd>
            <dt>
              Platform for Realizing Social Gaming -How to Develop Attractive
              Games for 1 Billion Users- [
              <a href="http://www.ieice.org/ken/program/index.php?tgs_regid=7b51ac8a2255b64211deee115de18aa9001df9945f52808b72e33513fedb8ef3&amp;tgid=IEICE-NLC&amp;lang=">
                URL
              </a>
              ]
            </dt>
            <dd>
              Yuki Matsukura, Hideki Tanaka, Masaki Fujimoto
              <br />
              Technical Committee on Natural Language Understanding and Models
              of Communication (NLC) 2012
            </dd>
          </dl>
        </div>
        <h2>Presentations</h2>
        <div>
          <dl>
            <dt>
              Basics and Development using PHP5 [
              <a href={`../../ppt/function.zip`}>Zip</a>]
            </dt>
            <dd>
              This presentation is for PHP beginner. By hearing this
              presentation, you can know basics of PHP, new functions of PHP5
              and treands in development field.
            </dd>
            <dt>Survey of "Privacy-Aware Location Sensor Networks"</dt>
            <dd>
              This research shows how to protect sensor nodes' privacy in sensor
              networks.
            </dd>
            <dt>
              Survey of "Social Disclosure of Place: From Location Technology to
              Communication Practices" [{" "}
              <a href={`../../ppt/social_disclosure_of_place.ppt`}>PPT</a>]
            </dt>
            <dd>
              PlaceLab works middleware of multiple location devices such as
              GPS, GSM and 802.11. Application programmer can obtain users'
              location wherever indoor or outdoor.
            </dd>
            <dt>
              GREE's strategy exporting Japanese social game to the world wide.
            </dt>
            <dd>
              Made a presentation on CEDEC(Computer science Entertainment
              Developers Conference) 2012.
              <br />
              <a href="https://gigazine.net/news/20120829-gree-strategy-cedec2012/">
                https://gigazine.net/news/20120829-gree-strategy-cedec2012/
              </a>
            </dd>
          </dl>
        </div>
        <h2>Term Projects</h2>
        <div>
          <dl>
            <dt>Area Based Matcing system - 2002/Spring</dt>
            <dd>
              This system enables users to find someone who can offer users'
              needs. As a scinario, when a user is alone in university, the user
              wants to have lunch. the user use this system and find a person
              who wants to have lunch near the user.
              <br />
              <a href="https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/%7ematsu/2002s/">
                http://www.ht.sfc.keio.ac.jp/~matsu/2002s/
              </a>
            </dd>
            <dt>DoCoDeMo pingpong! - 2002/Autumn</dt>
            <dd>
              This system enables users to receive home's interphone on PC. Even
              users are in university, they can receive and respond to visitors.
              <br />
              <a href="https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/~matsu/2002a/">
                http://www.ht.sfc.keio.ac.jp/~matsu/2002a/
              </a>
            </dd>
            <dt>Middleware for Public Services - 2003/Spring</dt>
            <dd>
              I constructed a middleware to save working snapshot. A user can
              continue works even in moved another location.
              <br />
            </dd>
            <dt>Object LOcating System - 2003/Autumn</dt>
            <dd>
              This system manages objects attached RFID by managin RFID readers'
              location. So applications can navigate users to the wanted
              objects, and manage object by shopkeeper. These days, many
              products are published related in this research.
              <br />
              <a href="https://web.archive.org/web/20211019064322/http://www.ht.sfc.keio.ac.jp/%7Ematsu/2003a/">
                http://www.ht.sfc.keio.ac.jp/~matsu/2003a/
              </a>
            </dd>
          </dl>
        </div>
        <h2>Links</h2>
        <div>
          <dl>
            <dt>BLOG</dt>
            <dd>
              I'm writing my daily life and interests about bikes, aquarium and
              traveling.
              <br />
              <a href="https://matsu.teraren.com/blog/">
                http://matsu.teraren.com/blog/
              </a>
            </dd>
            <dt>Photograph</dt>
            <dd>
              Publishing for Creative Commons on my server.
              <br />
              <a href="https://portfolio.teraren.com/">
                https://portfolio.teraren.com/
              </a>
            </dd>
            <dt>500px</dt>
            <dd>
              <a href="https://500px.com/p/matsubokkuri?view=photos">
                https://500px.com/p/matsubokkuri/
              </a>
            </dd>
          </dl>
        </div>
        <h2>Work history</h2>
        <div>
          <ul>
            <li>
              COM Corp [ System management department] (
              <a
                href="https://web.archive.org/web/20211019064322/http://www.com56.com/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2001/4 - 2001/8
            </li>
            <li>
              CNS guide 2002 [ Editor ] (
              <a
                href="https://cns-guide.sfc.keio.ac.jp/2002/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2001/9 - 2002/4
            </li>
            <li>SFC-connect proj.</li>
            <li>
              V-cube internet Inc. (
              <a
                href="https://web.archive.org/web/20211019064322/http://www.vcube.com/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              )
            </li>
            <li>
              SFC Data Science Lab [ Sub-administrator ] (
              <a
                href="https://web.archive.org/web/20191226035209/http://www.dsci.sfc.keio.ac.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2002/4 - 2003/3
            </li>
            <li>
              Clair Inc. [ System developer] (
              <a
                href="https://web.archive.org/web/20211019064322/http://www.clair-inc.com/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2002/4 - 2002/9
            </li>
            <li>
              CNS guide 2003 [ Duputy editor ] (
              <a
                href="https://cns-guide.sfc.keio.ac.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2002/4 - 2003/4
            </li>
            <li>
              Marue Corp., [ Consultant, System Management] (
              <a
                href="https://www.marue.com/"
                rel=" noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2002/4 - 2005/9
            </li>
            <li>
              digit Corp., [ Instructor of Network Administration ] (
              <a
                href="https://web.archive.org/web/20211019064322/http://www.digit.co.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2002/5 - 2002/8
            </li>
            <li>
              Marvins Corp., [ Programmer ] (
              <a
                href="https://www.marvins.co.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2002/9
            </li>
            <li>
              CNS guide 2004 [ Chief editor ] (
              <a
                href="https://cns-guide.sfc.keio.ac.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2003/4 - 2004/3
            </li>
            <li>
              SFC Data Science Lab [ Administrator ] (
              <a
                href="https://web.archive.org/web/20191226035209/http://www.dsci.sfc.keio.ac.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2003/4 - 2005/4
            </li>
            <li>
              Bulthaup [ Consulting, Network Administration ] (
              <a
                href="https://bulthaup.com/en-jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2005/2 - 2005/9
            </li>
            <li>
              CAL BOOK Accounting Systems [ Web design, Web Application] (
              <a
                href="https://www.cal-book.com/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2005/9 - 2006/3
            </li>
            <li>
              Zipangoods [ Web Application, Consulting ] (
              <a
                href="http://j-goods.us/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) (
              <a
                href="https://web.archive.org/web/20211019064322/http://www.cilabousa-ch.com/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2005/10 - 2006/3
            </li>
            <li>E-commerce ASP Company [ System Architect ] 2006/4 - 2009/3</li>
            <li>
              Coach United [ Chief Engineer ] (
              <a
                href="https://web.archive.org/web/20211019064322/http://cunited.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2009/4 - 2011/1
            </li>
            <li>
              GREE, Inc. [ Senior Engineer / Manager ] (
              <a
                href="https://gree.co.jp/"
                rel="noreferrer nofollow extern"
                target="_blank"
              >
                URL
              </a>
              ) 2011/2 -
            </li>
          </ul>
        </div>
        <h2>Skill and certificates</h2>
        <div>
          <ul>
            <li>System Administration: Linux, UNIX, Windows Server</li>
            <li>
              Programming Language: Perl PHP SH (B) Java MQL4 LaTeX Ruby Prolog
              HTML CSS Javascript
            </li>
            <li>Applications: MySQL PostgreSQL MS-Office</li>
            <li>
              <a href="https://www.lpi.org/" target="_blank" rel="noreferrer">
                LPIC (Linux Professional Institute Certification)
              </a>{" "}
              Level 1, Level 2 (2005/5) INACTIVE
              <StaticImage src="img/lpi-lpic2-24.jpg" alt="LPIC" />
            </li>
            <li>
              Gold holder of
              <a
                href="https://www.kentei.ne.jp/keytouch"
                target="_blank"
                rel="noreferrer"
              >
                Keytouch 2000
              </a>
            </li>
            <li>Amateur Third-Class Radio Operator</li>
            <li>
              3rd grade of{" "}
              <a href="http://www.shuzan.jp/" target="_blank" rel="noreferrer">
                Abacus
              </a>
            </li>
            <li>
              3rd grade of{" "}
              <a href="http://www.shuzan.jp/" target="_blank" rel="noreferrer">
                Mental Computation
              </a>
            </li>
            <li>
              AP (
              <a
                href="https://www.jitec.ipa.go.jp/1_11seido/ap.html"
                target="_blank"
                rel="noreferrer"
              >
                Applied Information Technology Engineer Examination)
              </a>
            </li>
          </ul>
        </div>
      </div>
      <footer id="footer">
        <div class="row">
          <div class="col-lg-12">
            <ul class="list-unstyled">
              <li class="float-end">
                <a href="#top">Back to top</a>
              </li>
              <li>
                <a href="https://twitter.com/matsubokkuri">X</a>
              </li>
            </ul>
            <p>Last update :2023-11-07</p>
          </div>
        </div>
      </footer>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => <Seo title="Yuki Matsukura on research" />
