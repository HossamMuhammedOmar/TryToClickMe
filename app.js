const catchMe = document.querySelector('#catch');
const emoji = [
  '😛',
  '😝',
  '😜',
  '🤪',
  '😂',
  '🙄',
  '😎',
  '🤓',
  '😅',
  '🤣',
  '😌',
];

const colors = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#ecf0f1',
  '#e74c3c',
  '#bdc3c7',
];

catchMe.addEventListener('mouseover', () => {
  const randomEmoji = Math.floor(Math.random() * emoji.length);
  const reandomColor = Math.floor(Math.random() * colors.length);
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  document.body.style.backgroundColor = `${colors[reandomColor]}`;
  catchMe.innerText = emoji[randomEmoji];
  catchMe.style.left = `${width}px`;
  catchMe.style.top = `${height}px`;
});

catchMe.addEventListener('click', () => {
  catchMe.innerHTML = 'Winner!!!!!!!!!!!!!';
});
