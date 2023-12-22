import ThemeSwitchSelect from '@/app/(interstitials)/components/reusable/ThemeSwitchSelect'

export default function FooterBorder() {
  return (
    <section className="px-4 py-1 flex content-center justify-end border-b">
      <ThemeSwitchSelect />
    </section>
  )
}