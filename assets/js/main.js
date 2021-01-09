const burgerBtn = document.querySelector('#burger-btn');
const dashList = [...document.querySelectorAll('#burger-btn span')]
const menu = document.querySelector('#navbar-list')

burgerBtn.addEventListener('click', () => {
  dashList.map((el,idx) => {
    switch (idx) {
      case 0:
        el.classList.toggle('rotate-first')
        break;
      case 1:
        el.classList.toggle('hide')
        break;
      default:
        el.classList.toggle('rotate-second')
        break;
    }
    menu.classList.toggle('show-menu')
  })
})

//NAVBAR

const setNavbarColumns = () => {
  const menuItems = [...document.querySelectorAll('#navbar-list li')]
  document.documentElement.style.setProperty('--navbar-columns', menuItems.length)
}

setNavbarColumns()

const displayLetterByLetter = (destination, destination2, message, speed ) => {
  let i = 0;
  let interval = setInterval(() => {
    if (i < 6) {
      document.getElementById(destination).innerHTML += message.charAt(i);
      i++;
    } else {
      document.getElementById(destination2).innerHTML += message.charAt(i);
      i++;
    }
    if(i > message.length) {
      clearInterval(interval);
    }
  }, speed)
}

displayLetterByLetter('firstname', 'lastname' ,'Kevin Cotrina', 150)
