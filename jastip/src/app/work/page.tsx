import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '../components/Blockquote'
import { Border } from '../components/Border'
import { Button } from '../components/Button'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { PageIntro } from '../components/PageIntro'
import { Testimonial } from '../components/Testimonial'
import logoBrightPath from '../images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '../images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '../images/clients/green-life/logo-dark.svg'
import logoHomeWork from '../images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '../images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '../images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '../images/clients/phobia/logo-dark.svg'
import logoUnseal from '../images/clients/unseal/logo-dark.svg'
import { formatDate } from '../lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '../lib/mdx'
import VideoPlayer from '../components/VideoPlayer'
import Typewriter from 'typewriter-effect'; 

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      {/* <PageIntro
        eyebrow="Our work"
        title="Proven solutions for real-world problems."
      >
      </PageIntro> */}
      <div className="flex flex-col items-center h-[100vh] justify-center">
        {/* <Typewriter
          options={{
            strings: ['OUR','VIDEO'],
            autoStart: true,
            loop: true,
          }}
        /> */}
        <div className="about-container w-full h-[70%]">
          <VideoPlayer />
        </div>
      </div>
      <ContactSection />
    </>
  )
}
