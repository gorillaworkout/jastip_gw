import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '../components/Border'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { GridList, GridListItem } from '../components/GridList'
import { PageIntro } from '../components/PageIntro'
import { PageLinks } from '../components/PageLinks'
import { SectionIntro } from '../components/SectionIntro'
import { StatList, StatListItem } from '../components/StatList'
import imageAngelaFisher from '../images/team/angela-fisher.jpg'
import imageBenjaminRussel from '../images/team/benjamin-russel.jpg'
import imageBlakeReid from '../images/team/blake-reid.jpg'
import imageChelseaHagon from '../images/team/chelsea-hagon.jpg'
import imageDriesVincent from '../images/team/dries-vincent.jpg'
import imageEmmaDorsey from '../images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '../images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '../images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '../images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '../images/team/leslie-alexander.jpg'
import imageMichaelFoster from '../images/team/michael-foster.jpg'
import imageWhitneyFrancis from '../images/team/whitney-francis.jpg'
import amon from '../../assets/photos/amon.jpg'
import putra from '../../assets/photos/putra.jpg'
import bayu from '../../assets/photos/bayu.jpg'
import { loadArticles } from '../lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="CheerVolution"
        invert
      >
        <p>
          Creating an unstoppable force that leads us to success.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
          unwavering commitment and dedication to a cause, team, or individual. It signifies standing by each other through thick and thin, demonstrating reliability and support no matter the circumstances
          </GridListItem>
          <GridListItem title="Trust" invert>
          cornerstone of our community, where transparency, honesty, and dependability form the foundation of our interactions.
          </GridListItem>
          <GridListItem title="Compassion" invert>
          empathetic understanding and kindness we extend to one another. It involves recognizing and respecting the personal challenges and circumstances each team member faces
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Coach',
    people: [
      {
        name: 'Diamant Yakhsyaa',
        role: 'Coach',
        image: { src: amon },
      },
      {
        name: 'Dewanda Dwi Putra',
        role: 'Co-Coach',
        image: { src: putra },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Christofel',
        role: 'Captain',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Khansa Adira',
        role: 'Co-Captain',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Yuni Supriyani',
        role: 'Treasurer I',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Dilla Nabila',
        role: 'Treasurer II',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Victoria Sharon',
        role: 'Secretary',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Deszra Deo',
        role: 'Marketing PR',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Dini Yunita',
        role: 'Social Media',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Bayu Darmawan',
        role: 'Technical Support',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Muhammad Akmal',
        role: 'Logistic Support',
        image: { src: imageBenjaminRussel },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is Focused">
        <p>
        Crown Allstar Cheerleading is a prototype team under the parent organization APSI, established in Bandung on September 23, 2007.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Athletes from the Crown Allstar team consist of groups of young men and women from various backgrounds and ages who actively pursue the sport of cheerleading. Since its inception, Crown Allstar has always been a leading team consistently achieving impressive accomplishments both in national and international championships. 
          </p>
          <p>
          Crown Allstar cheerleading athletes are trained with a series of superior programs developed by the best coaches in Indonesia. Crown Allstar Cheerleading is determined to continue to shape the nation&apos;s best cheerleading athletes, especially athletes from West Java, to maintain a healthy, productive, and proud lifestyle through the sport of cheerleading.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="389" label="Athletes" />
          <StatListItem value="14" label="National Championship" />
          <StatListItem value="3" label="World Championship Participate" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
