import Image from 'next/image'
import Link from 'next/link'
import { linkData } from '../../linkData'
import VercelLogo from '../../../../../../public/technologies/vercel.svg'
import NextjsLogo from '../../../../../../public/technologies/next.svg'

const blogLinks = [
  {
    href: '/posts/building-this-site',
    key: 'bts',
    label: 'How I built this site'
  },
  {
    href: '/posts/how-software-is-built',
    key: 'hsb',
    label: 'How Software is Built'
  },
  {
    href: '/posts/how-to-become-a-developer',
    key: 'hbd',
    label: 'How to become a Developer'
  },
  {
    href: '/posts/math-in-programming',
    key: 'mip',
    label: 'Math in Programming'
  }
];

const faqLinks = [
  {
    href: '/posts/what-is-coding',
    key: 'wic',
    label: 'What is Coding?'
  },
  {
    href: '/posts/what-is-a-programming-language',
    key: 'wpl',
    label: 'What is a Programming Language?'
  },
  {
    href: '/posts/what-is-a-framework',
    key: 'waf',
    label: 'What is a Framework?'
  },
  {
    href: '/posts/what-is-a-tech-stack',
    key: 'wits',
    label: 'What is a Tech Stack?'
  }
];

export default function FooterMenu() {  

  const listStyle = "text-sm pl-2 pt-2 flex flex-col gap-1"  
  const containerStyle = "pl-[3%] sm:pl-[20%] lg:pl-[3%] flex flex-col w-fit col-span-1 row-span-1"
  const headingFour = "text-lg font-extralight"
  const linkLabel = "whitespace-nowrap"

  return (
    <section className="py-8 grid lg:justify-items-center items-start gap-x-1 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <div className={containerStyle}>  
        <h4 className={headingFour}>Quick Links</h4>
        <ul className={listStyle}>
          {linkData.map((link) => (
            <li key={link.key}>
              <Link className={linkLabel} href={link.href}>{link.label}</Link>  
            </li>
          ))}      
        </ul>
      </div>
      <div className={containerStyle}>
        <h4 className={headingFour}>The Basics</h4>  
        <ul className={listStyle}>
          {blogLinks.map((link) => (
            <li key={link.key}>
              <Link className={linkLabel} href={link.href}>{link.label}</Link>
            </li>    
          ))}
        </ul>
      </div>
      <div className={containerStyle}>
        <h4 className={headingFour}>Frequently Asked</h4>  
        <ul className={listStyle}>
          {faqLinks.map((link) => (
            <li key={link.key}>
              <Link className={linkLabel} href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={containerStyle}>
        <h4 className={headingFour}>The Platform</h4>
        <div className="pl-2 pt-3 flex flex-col gap-5">
          <div className="flex flex-col gap-1.5 w-fit">
            <p className="text-sm md:text-xs">Built With</p>
            <Image alt='Next.js Logo' className="h-3 w-auto pl-2.5 dark:invert" src={NextjsLogo} />
          </div>
          <div className="flex flex-col gap-1.5 w-fit">
            <p className="text-sm md:text-xs">Deployed On</p>
            <Image alt='Vercel Logo' className="h-3 w-auto dark:invert" src={VercelLogo} />
          </div>
        </div>
      </div>
    </section>
  )
}





/**
       <div className="flex flex-col justify-center">
        <Image alt='Contact Me Memoji' className="h-12 w-auto" src={Memoji} />
        <p className="text-sm px-1 py-0.5 bg-secondary text-primary dark:bg-primary dark:text-secondary rounded-sm">Contact Me</p>
      </div>
 */