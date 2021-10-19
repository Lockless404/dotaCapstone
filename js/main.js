const menuIcon = document.querySelector('.menuIcon');
const navMenu = document.querySelector('.navMenu');
const navWords = document.querySelectorAll('.navWords');

const speakerInfo = [
  {
    name: 'Sir Actionslacks',
    info: 'Mad Man',
    paragraph: 'Jake "SirActionSlacks" Kanner is a content creator and event organizer. He has been referred to as many things from crazy to Ice Frog himself.',
    imageSrc: 'images/image-1.png',
  },
  {
    name: 'Insania',
    info: 'Team Liquid Captain',
    paragraph: 'Aydin "iNSaNiA" Sarkohi is Swedish player. He is a hard support for Team Liquid and team captain. He reached 10k MMR in 2021.',
    imageSrc: 'images/image-2.png',
  },
  {
    name: 'Ephey',
    info: 'Dota Streamer',
    paragraph: 'Mira "Ephey" Riad is a dota streamer, commentator and analyst. Is not Dota Bae. Best known for saying "Eh ha ha ha ha".',
    imageSrc: 'images/image-3.png',
  },
  {
    name: 'Jenkins',
    info: 'Dota Player, Streamer and Content Creator',
    paragraph: 'Andrew "Jenkins" Jenkins is a homeless man who advises people on how best to lose at dota.',
    imageSrc: 'images/image-4.png',
  },
  {
    name: 'Sheever',
    info: 'Host and Content Creator',
    paragraph: 'Jorien "Sheever" van der Heijden is Dota Bae.',
    imageSrc: 'images/image-5.png',
  },
  {
    name: 'Purge',
    info: 'Dota Commentator and Content Creator',
    paragraph: 'Kevin "Purge" Godec has read all books and knows all things.',
    imageSrc: 'images/image-6.png',
  },
];

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('turn');
  navMenu.classList.toggle('nav-active');
});

for (let i = 0; i < navWords.length; i += 1) {
  navWords[i].addEventListener('click', () => {
    menuIcon.classList.remove('turn');
    navMenu.classList.remove('nav-active');
  });
}