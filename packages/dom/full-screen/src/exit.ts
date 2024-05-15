export const enter = () => {
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
