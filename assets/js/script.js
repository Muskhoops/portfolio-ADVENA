"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");

    localStorage.setItem("theme", "dark_theme");
  }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

const translations = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    getintouch: "Get in touch",
    hireMe: "Hire me",
    downloadCV: "Download CV",
    yearsOfExperience: "5+ Years of Experience",
    completedProjects: "30+ Completed Projects",
    happyClients: "11+ Happy Clients",
    aboutMe: "About me",
    needCreativeProduct: "Need a Creative Product? I can Help You!",
    hiIm: "Hi! I’m Ridwan AL MASRI, and I’m a developer who has passion for building clean web applications with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects, I have worked with creative teams, which involves daily stand-ups and communications, source control, and project management.",
    projects: "My Works",
    skillss: "My skills",
    skillsans:
      "I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.",
    whatskills: " What My Programming Skills Included ?",
    seeMyWorks: "See Some of My Works Which Will Amaze You!",
    weDevelop:
      "We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send",
    address: "Address:",
    phoneNumber: "+33 6 95 53 52 93",
    email1: "almasri.ridwan@outlook.com",
    email2: "relation.contact@advena.fr",
    socialMedia: "Social Media",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "Linkedin",
    youtube: "Youtube",
    goTop: "Go to Top",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    portfolio: "Portfolio",
    contact: "Contact",
    getintouch: "Contactez-nous",
    hireMe: "Engagez-moi",
    downloadCV: "Télécharger le CV",
    yearsOfExperience: "5+ années d'expérience",
    completedProjects: "30+ Projets terminés",
    happyClients: "11+ Clients satisfaits",
    aboutMe: "À propos de moi",
    needCreativeProduct: "Besoin d'un produit créatif? Je peux vous aider!",
    hiIm: "Salut! Je suis Ridwan AL MASRI, et je suis un développeur passionné par la création d'applications Web propres avec des fonctionnalités intuitives. J'aime le processus de concrétisation des idées en utilisant des solutions créatives. Je suis toujours curieux d'apprendre de nouvelles compétences, outils et concepts. En plus de travailler sur divers projets solo full stack, j'ai travaillé avec des équipes créatives, ce qui implique des réunions quotidiennes, des communications, un contrôle de source et une gestion de projet.",
    projects: "Mes travaux",
    skillss: "Mes compétences",
    skillsans:
      "Je développe des interfaces utilisateur simples, intuitives et réactives qui aident les utilisateurs à accomplir des tâches avec moins d'efforts et de temps grâce à ces technologies.",
    whatskills: " Quelles sont mes compétences en programmation ?",
    seeMyWorks: "Voir quelques-unes de mes œuvres qui vous épateront!",
    weDevelop:
      "Nous développons le meilleur site Web de qualité qui sert à long terme. Une interface bien documentée, propre, facile et élégante aide tout client non technique.",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    message: "Message",
    send: "Envoyer",
    address: "Adresse :",
    phoneNumber: "+33 6 95 53 52 93",
    email1: "almasri.ridwan@outlook.com",
    email2: "relation.contact@advena.fr",
    socialMedia: "Médias sociaux",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "Linkedin",
    youtube: "Youtube",
    goTop: "Haut de page",
  },
};

function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");

  elements.forEach((element) => {
    const key = element.dataset.translate;
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}

translatePage("en");

document.getElementById("lang").addEventListener("change", function (event) {
  const selectedLanguage = event.target.value;
  translatePage(selectedLanguage);
});
