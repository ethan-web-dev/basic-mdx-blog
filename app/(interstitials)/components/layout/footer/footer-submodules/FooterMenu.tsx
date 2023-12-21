import Link from 'next/link'
import { linkData } from '../../linkData'
import Image from 'next/image';
import Memoji from '../../../../../public/memojis/call-me.svg'

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

  const listStyle = "text-sm"  

  return (
    <section className="px-2 py-2 flex justify-between items-center">
      <ul className={listStyle}>
        {linkData.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.label}</Link>  
          </li>
        ))}      
      </ul>
      <ul className={listStyle}>
        {blogLinks.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.label}</Link>
          </li>    
        ))}
      </ul>
      <ul className={listStyle}>
        {faqLinks.map((link) => (
          <li key={link.key}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}





/**
       <div className="flex flex-col justify-center">
        <Image alt='Contact Me Memoji' className="h-12 w-auto" src={Memoji} />
        <p className="text-sm px-1 py-0.5 bg-secondary text-primary dark:bg-primary dark:text-secondary rounded-sm">Contact Me</p>
      </div>
 */