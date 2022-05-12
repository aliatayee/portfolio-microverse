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
                        <li>${project.techstack[0]}</li>
                        <li>${project.techstack[1]}</li>
                        <li>${project.techstack[2]}</li>
                        <li>${project.techstack[3]}</li>
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
  const gridContainer = document.getElementById('modal-container').innerHTML += `
  <div id="myModal" class="modal">
  <div class="modal-content">
                    <span id="close" class="close" onclick="closeModal()">&times;</span>

                    <div class="modal-img img-desktop"><img src="assets/images/modal-banner.svg" alt="project 1"></div>
                    <div class="modal-img img-mobile"><img src="assets/images/mobile-banner.svg" alt="project 1"></div>
                    <div class="row modal-header" id="modalHead">
                        <div class="modal-title-container"><h3 class=" modal-title">Keeping track of hundreds of components</h3></div>
                        <div class="desk-btns">
                            <button class="modal-btn">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            <button class="modal-btn">See Source <i class="fa-brands fa-github"></i></button>
                        </div>
                    </div> 
                    <div class="stucks-modal">
                        <ul class=" modal-desktop-btn">
                            <li>Codekit</li>
                            <li>Github</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Terminal</li>
                            <li>Codepen</li>
                        </ul>
                    </div>
                    <div class="stucks-modal-mobile">
                        <ul class=" modal-desktop-btn">
                            <li>Codekit</li>
                            <li>Github</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                    <p class="modal-p">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem
                        Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it 1960s with the relea</p>
                        <div class="mobile-btns">
                          <button class="modal-btn">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                          <button class="modal-btn">See Source <i class="fa-brands fa-github"></i></button>
                      </div>
                </div>
                </div>
                `;
}
// When the user clicks on <span> (x), close the modal

function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
