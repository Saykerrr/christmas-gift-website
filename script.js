// Audio configuration
const audio = new Audio('https://www.cjoint.com/doc/24_12/NLzixkwIkRb_HUMBLE-Christmas-Remix-Kendrick-Lamar-x-Mariah-Carey.mp3');
audio.loop = true; // Loop the audio for continuous playback
audio.volume = 0.5; // Adjust volume (0.0 to 1.0)

// Try to play audio on load (may be blocked by browsers)
audio.play().catch(() => console.log('Autoplay blocked by the browser'));

// Handle mute/unmute functionality
const muteButton = document.querySelector('.mute-button');
muteButton.addEventListener('click', () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.classList.remove('muted');
  } else {
    audio.muted = true;
    muteButton.classList.add('muted');
  }
});

// Add snowflake styles and effect
const createSnowflake = () => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.innerText = '❄';
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
};

setInterval(createSnowflake, 200);

const style = document.createElement('style');
style.innerHTML = `
  .snowflake {
    position: absolute;
    top: 0;
    font-size: 1.5em;
    color: white;
    opacity: 0.8;
    animation: fall linear infinite;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);
