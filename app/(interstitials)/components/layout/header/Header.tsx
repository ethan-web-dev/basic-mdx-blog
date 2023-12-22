import Menu from './header-submodules/Menu'
import Logo from './header-submodules/Logo'

export default function Header() {
  return (
    <header className="fixed top-auto bottom-0 sm:top-0 sm:bottom-auto flex justify-between w-full md:w-[82%] items-center py-2 pl-2 pr-4 bg-primary/50 dark:bg-secondary/50 border-t border-b-0 sm:border-b sm:border-t-0 md:mx-[9%] md:border-x md:rounded-b-md md:overflow-hidden shadow-lg">    
      <Logo />  
      <Menu />  
      {/* Styled the glass effect below, does not work unless like this */}
      <div className="absolute inset-0 -z-10 backdrop-blur-sm" /> 
    </header>
  )
}