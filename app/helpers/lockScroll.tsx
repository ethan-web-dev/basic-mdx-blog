let scrollLocked = false;
let scrollPosition: number | null = null;

export const disableScroll = () => {
  if (!scrollLocked) {
    scrollLocked = true;
    scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
  }
};

export const enableScroll = () => {
  if (scrollLocked) {
    scrollLocked = false;
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    if (scrollPosition !== null) {
      window.scrollTo(0, scrollPosition);
      scrollPosition = null;
    }
  }
};

/* 
  This function locks scrolling when used in separate programs. 
  Specifically, if something then disableScroll, if else, then enable scroll. 
  Easy right?
*/