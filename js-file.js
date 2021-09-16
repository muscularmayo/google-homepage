const redP = document.createElement('p')
redP.textContent = 'Hey, I\'m red!'
redP.style.color = 'red';

const container = document.querySelector('#container')
container.appendChild(redP)