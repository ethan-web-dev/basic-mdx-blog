import FootNotes from './footer-submodules/FootNotes'
import FooterBorder from './footer-submodules/FooterBorder'
import FooterMenu from './footer-submodules/FooterMenu'
import MobileHeaderBuffer from './footer-submodules/MobileHeaderBuffer'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center overflow-hidden w-full md:w-[82%] md:mx-[9%] md:mb-2 border-t md:border-x md:rounded-md bg-primary text-secondary dark:bg-secondary dark:text-primary">
      <FooterBorder />
      <FooterMenu />
      <FootNotes />
      <MobileHeaderBuffer />
    </footer>
  )
}