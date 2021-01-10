const burgerBtn = document.querySelector('#burger-btn');
const dashList = [...document.querySelectorAll('#burger-btn span')]
const menu = document.querySelector('#navbar-list')
const template = document.querySelector('.article-template').content

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


const fillArticleTemplate = (title, lg, img) => {
  const copyTemplate = document.importNode(template, true)
  const articlesContainer = document.querySelector('.article-container')
  const languages = [...copyTemplate.querySelectorAll('.article__list-item')]
  const templateInfo = copyTemplate.querySelector('.article__info')
  const templateImage = [...copyTemplate.querySelectorAll('.article__img')]
  
  templateImage.map(el => {
    el.style.background = `url(assets/img/${img}.jpg) center/cover`;
  })

  templateInfo.style.background = `url(assets/img/${img}.jpg) center/cover`;

  copyTemplate.querySelector('.article__name').textContent = title
  languages.map( (el, idx)  => {
    el.textContent = lg[idx]
  });
  articlesContainer.appendChild(copyTemplate)
}

fillArticleTemplate("article1", ["js", "css", "ruby"], 'mockup')
// fillArticleTemplate("article2", ["nodeJs", "Java", "RoR"], 'mockup')
