import { Tabs } from '../(interstitials)/components/reusable/Tabs'

const tabData = [
  { 
    label: 'The Software', 
    content: <p>This website originated as a conceptual model designed for a client requiring a highly performant Personal Web Application(PWA) while fulfilling the needs of their full time development team proficient in React & Javascript for day to day front-end operations. With a primary focus on speed, code base interoperability, and scalability, the objective was to showcase the efficiency provided by a next-generation framework likewise to Next.js. The benefits to my client for going with this framework meant that they could remain at the edge of their current tech stack. In addition to Next.js, the client, also adopted both Typescript and Tailwind Css. Personal feelings aside, upon their inception these technologies introduced an increase in iteration speeds for developers everywhere, the clients in-house team met no exception. Since then I have stripped the original architecture back a notch given that my needs do not reflect those of an enterprise level business. I intend to use this platform as an example for developers future employers and clients alike. Enjoy and please use this template at your convenience, it is also available on my Github.</p>
  },
  { 
    label: 'The Developer', 
    content: 'Content for Tab 2' 
  },
];

export default function About() {
  return (
    <article className="mt-8 flex flex-col gap-8">  
      <Tabs tabs={tabData} />
    </article>
  )
}