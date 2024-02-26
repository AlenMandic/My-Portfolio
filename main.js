const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-ul');
const logoImage = document.getElementById('left-nav-img');
const spanOne = document.getElementById('first-span');
const spanTwo = document.getElementById('middle-span');
const spanThree = document.getElementById('last-span');

const menuLinks = document.getElementsByClassName('menuItem');
const otherProjects = document.getElementsByClassName('other-project');

const linksOtherProjects = ['https://alenmandic.github.io/', 'https://87zksq.csb.app/', 'https://alenmandic.pages.dev/', 'https://ngdqj3-5173.csb.app']

const githubOtherProjects = ['https://github.com/AlenMandic/AlenMandic.github.io', 'https://github.com/AlenMandic/login-system-react','https://github.com/AlenMandic/react-to-do-app', 'https://github.com/AlenMandic/My-Portfolio', 'https://github.com/AlenMandic/React-Query-Basic-Examples']

hamburger.addEventListener("click", () => {
  menu.classList.toggle('open');
  hamburger.classList.toggle('opened');
  spanOne.classList.toggle('opened-one');
  spanTwo.classList.toggle('opened-two');
  spanThree.classList.toggle('opened-three');
});

for (let link of menuLinks) {
  link.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('opened');
    spanOne.classList.toggle('opened-one');
    spanTwo.classList.toggle('opened-two');
    spanThree.classList.toggle('opened-three');
  })
}

logoImage.setAttribute('role', 'button');

for (let i = 0; i < otherProjects.length; i++) {
  // if we click on the github image icon, open it instead of the project
  const githubLink = otherProjects[i].querySelector('.other-mini-icon');

  otherProjects[i].addEventListener('click', (event) => {

    if (event.target === githubLink) {
      window.open(githubOtherProjects[i], '_blank', 'noopener noreferrer');
    } else {
      window.open(linksOtherProjects[i], '_blank', 'noopener noreferrer');
    }
  });
}
