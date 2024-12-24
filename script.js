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

// Add snowflake styles
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
