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
    href: '/posts/choosing-a-tech-stack',
    key: 'cts',
    label: 'Choosing a tech stack'
  },
  {
    href: 'posts/what-is-coding',
    key: 'wic',
    label: 'What is coding'
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
    </section>
  )
}





/**
       <div className="flex flex-col justify-center">
        <Image alt='Contact Me Memoji' className="h-12 w-auto" src={Memoji} />
        <p className="text-sm px-1 py-0.5 bg-secondary text-primary dark:bg-primary dark:text-secondary rounded-sm">Contact Me</p>
      </div>
 */