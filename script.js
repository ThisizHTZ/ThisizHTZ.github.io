document.addEventListener('DOMContentLoaded', () => {
  // Animate doors opening
  setTimeout(() => {
    document.querySelector('.left-door').style.transform = 'translateX(-100%)';
    document.querySelector('.right-door').style.transform = 'translateX(100%)';
    document.querySelector('.door-backlight').style.width = '200%';
  }, 500);

  // Typing effect for call-to-action
  const textEl = document.getElementById('typed-text');
  const message = 'Click to Enter';
  let idx = 0;
  function type() {
    if (idx < message.length) {
      textEl.innerHTML = message.slice(0, idx + 1) + '<span class="cursor">|</span>';
      idx++;
      setTimeout(type, 200);
    } else {
      // Show selection UI
      document.querySelector('.selection').style.opacity = '1';
    }
  }
  // Start typing after doors open
  setTimeout(type, 1600);
});
