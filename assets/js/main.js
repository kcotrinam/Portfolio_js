const burgerBtn = document.querySelector('#burger-btn');
const template = document.querySelector('.article-template').content

const projects = [
  {
    name: 'Movie Life',
    languages: [
      'Ruby',
      'SCSS',
      'Ruby on Rails'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam rem eligendi, consequuntur modi porro quia a nam, vero corporis distinctio voluptatem id, consequatur deserunt ipsam. Odit tenetur animi fugiat.Ratione molestiae deserunt facere magni animi eius id. Tempora eaque doloribus in. Reiciendis repellendus laboriosam aliquam earum nam ipsum, enim beatae quos quam saepe quidem nobis ut voluptatum, deleniti porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam rem eligendi, consequuntur modi porro quia a nam, vero corporis distinctio ',
    image: {
      main: 'movielife-mockup.jpg',
      upper: 'movielife1.png',
      lower: 'movielife2.png'
    },
    carrousel: [
      'movielife-mockup.jpg',
      'movielife1.png',
      'movielife2.png'
    ]
  },
  {
    name: 'Kika Homemade',
    languages: [
      'HTML5',
      'SCSS',
      'CSS'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam rem eligendi, consequuntur modi porro quia a nam, vero corporis distinctio voluptatem id, consequatur deserunt ipsam. Odit tenetur animi fugiat.Ratione molestiae deserunt facere magni animi eius id. Tempora eaque doloribus in. Reiciendis repellendus laboriosam aliquam earum nam ipsum, enim beatae quos quam saepe quidem nobis ut voluptatum, deleniti porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam rem eligendi, consequuntur modi porro quia a nam, vero corporis distinctio ',
    image: {
      main: 'kika-mockup.png',
      upper: 'kika1.png',
      lower: 'kika2.png'
    },
    carrousel: [
      'kika-mockup.png',
      'kika1.png',
      'kika2.png'
    ]
  },
  {
    name: 'News Week',
    languages: [
      'HTML5',
      'CSS3',
      'Bootstrap'
    ],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam rem eligendi, consequuntur modi porro quia a nam, vero corporis distinctio voluptatem id, consequatur deserunt ipsam. Odit tenetur animi fugiat.Ratione molestiae deserunt facere magni animi eius id. Tempora eaque doloribus in. Reiciendis repellendus laboriosam aliquam earum nam ipsum, enim beatae quos quam saepe quidem nobis ut voluptatum, deleniti porro?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam rem eligendi, consequuntur modi porro quia a nam, vero corporis distinctio ',
    image: {
      main: 'newsweek-mockup.png',
      upper: 'newsweek1.png',
      lower: 'newsweek2.png'
    },
    carrousel: [
      'newsweek-mockup.png',
      'newsweek1.png',
      'newsweek2.png'
    ]
  }

]

burgerBtn.addEventListener('click', () => {
  const menu = document.querySelector('#navbar-list')
  const dashList = [...document.querySelectorAll('#burger-btn span')]

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
  const [upperImg, lowerImg] = [...copyTemplate.querySelectorAll('.article__img')]

  upperImg.style.background = `url(assets/img/${img.upper}) top/cover`;
  lowerImg.style.background = `url(assets/img/${img.lower}) top/cover`;
  templateInfo.style.background = `url(assets/img/${img.main}) center/cover`;

  copyTemplate.querySelector('.article__name').textContent = title
  languages.map( (el, idx)  => {
    el.textContent = lg[idx]
  });
  articlesContainer.appendChild(copyTemplate)
}

( () => {
  projects.map(project => {
    fillArticleTemplate(project.name, project.languages, project.image)
  })
})()

const seeProjectButtons = [...document.querySelectorAll('.article__button')]
const modalTemplate = document.querySelector('.modal-article-template').content
const modalContainer = document.querySelector('.modal-container')
const closeModalBtn = document.getElementById('close-modal')
const articleModalContainer = document.querySelector('#modal-container')


const fillModalTemplate = (idx) => {
  const copyArticleTemplate = document.importNode(modalTemplate, true)
  const modalTitle = copyArticleTemplate.querySelector('.modal-article__name')
  const modalImg = copyArticleTemplate.querySelector('.modal-article__img-container img')
  const modalDescription = copyArticleTemplate.querySelector('.modal-article__description')
  const langs = [...copyArticleTemplate.querySelectorAll('.modal-article__list-item')]
  
  modalTitle.textContent = `${projects[idx].name}`
  modalImg.src = `assets/img/${projects[idx].image.main}`
  startCarrousel(modalImg, idx, 2000)
  modalDescription.textContent = projects[idx].description

  langs.map((lang, idx) => [
    lang.textContent = projects[idx].languages[idx] 
  ])

  articleModalContainer.textContent = ''
  articleModalContainer.appendChild(copyArticleTemplate)

}

const showArticleModal = () => {
  seeProjectButtons.map((button, idx) => {
    button.addEventListener('click', (e) => {
      modalContainer.classList.add('show-modal')
      fillModalTemplate(idx)
    })
  })
}

(() => {
  closeModalBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show-modal')
  })
})()

showArticleModal()


const carr = document.querySelector('.carrousel img')
let n = 1

const displayCarrousel = (carrouselContainer, idx) => {
  if(n > 2) {
    n = 0
  }
  carrouselContainer.src = `assets/img/${projects[idx].carrousel[n]}`
    n++
}

const startCarrousel = (container, projectIdx, speed) => {
  setInterval(() => {
    displayCarrousel(container, projectIdx)
  }, speed);
}
 
// startCarrousel(carr, 0, 1500)