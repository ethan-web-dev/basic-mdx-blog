import { Tabs } from '../components/reusable/Tabs'

const tabData = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
];

export default function About() {
  return (
    <article>  
      <Tabs tabs={tabData} />
    </article>
  )
}