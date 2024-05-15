// @ts-nocheck
export const enter = (element: HTMLElement) => {
  if(element.requestFullscreen) {
    element.requestFullscreen()
  }else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  }else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  }else if(element.msRequestFullscreen) {
    element.msRequestFullscreen
  }
}

export const exit = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.mozExitFullScreen) {
    document.mozExitFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
};

export const getFullScreenElement = () => {
  return document.fullscreenElement ||
  document.webkitFullscreenElement ||
  document.mozFullScreenElement ||
  document.msFullscreenElement || null
}

export const isFullScreen = () => {
  return !!getFullScreenElement()
}

const fullScreen = {
  enter,
  exit,
  getFullScreenElement,
  isFullScreen
}

export default fullScreen;
