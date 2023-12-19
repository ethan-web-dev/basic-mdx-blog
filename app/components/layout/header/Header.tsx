import { Menu } from "./header-submodules/Menu";
import Logo from "./header-submodules/Logo";

export default function Header() {
  return (
    <header className="fixed bottom-0 sm:relative flex justify-between items-center min-w-full">
      <Logo />  
      <Menu />    
    </header>
  )
}