"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

interface TextChange {
  className?: React.ComponentProps<'div'>['className'];
  textColor?: string[]; 
  phrases: string[];
}

const TextChange = ({
  className,
  textColor = [], 
  phrases,
}: TextChange): JSX.Element => {
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const fade = document.querySelector('#jsText');
    const caption = document.querySelector('#jsText');
    
    const tl = gsap.timeline({
      repeat: -1,
    });

    for (let i = 0; i < phrases.length; i++) { 
      tl.to(fade, { duration: 0.4, backgroundColor: textColor[i] });
      if (i) {
        tl.fromTo(
          caption,
          { text: phrases[i - 1], opacity: 0 },
          { text: '', opacity: 1, ease: 'none' },
          '<'
        ).to(caption, { text: phrases[i], duration: 3.5, opacity: 1 });
      } else {
        tl.fromTo(
          caption,
          { text: phrases[phrases.length - 1], opacity: 0 },
          { text: '', opacity: 1 },
          '<'
        ).to(caption, { text: phrases[i], duration: 3.5, opacity: 1 });
      }
    }
  }, [phrases, textColor]);

  return (
      <span id="jsText" className={className} />
  );
}

export default TextChange;