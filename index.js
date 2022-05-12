/* eslint-disable */
function menuFunction() {
  const links = document.getElementById('mobile-menu-container');
  if (links.style.display === 'block') {
    links.style.display = 'none';
  } else if (window.screen.width < 995) {
    links.style.display = 'block';
  } else {
    links.style.display = 'none';
  }
}
/* eslint-disable */
function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('mobile-menu-container');
  links.style.display = 'none';
}

// description project modal array

const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/placeholder-image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/placeholder-image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/placeholder-image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/placeholder-image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/placeholder-image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img: 'assets/images/placeholder-image.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://aliatayee.github.io/Portfolio-mobile-version-skeleton-/',
    github: 'https://github.com/aliatayee/Portfolio-mobile-version-skeleton-',
    techstack: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
  },

];

window.onload = () => {
  projects.forEach((project, index) => {
    document.getElementById('project_container').innerHTML += `<div class="img-patholder">
                    <div class="img-box"><img src="${project.img}" alt="project 1"></div>
                    <h3 class="title-project">${project.title}</h3>
                    <ul class="buttons">
                        <li>ruby on rails</li>
                        <li>Css</li>
                        <li>javascript</li>
                        <li>html</li>
                    </ul>
                    <div class="see-project">
                        <button id="modal-btn" onclick="openModal(projects[${index}])">See project</button>
                    </div>
                </div>
      `;
  });
};

/* eslint-disable */
function openModal() {
  const gridContainer = document.getElementById('myModal');
  gridContainer.style.display = 'block';
}
// When the user clicks on <span> (x), close the modal
