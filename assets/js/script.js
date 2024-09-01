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

// const themeToggleBtn = document.querySelector("[data-theme-btn]");

// themeToggleBtn.addEventListener("click", function () {
//   elemToggleFunc(themeToggleBtn);

//   if (themeToggleBtn.classList.contains("active")) {
//     document.body.classList.remove("dark_theme");
//     document.body.classList.add("light_theme");

//     localStorage.setItem("theme", "light_theme");
//   } else {
//     document.body.classList.remove("light_theme");
//     document.body.classList.add("dark_theme");

//     localStorage.setItem("theme", "dark_theme");
//   }
// });

const themeToggleBtn = document.querySelector("[data-theme-btn]");
const logo = document.querySelector("[data-logo]");

themeToggleBtn.addEventListener("click", function () {
  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    // Changer le logo pour le thème clair
    logo.src = "/assets/images/logo-noir.png";

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");

    // Changer le logo pour le thème sombre
    logo.src = "/assets/images/logo-blanc.png";

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
    services : "Our Services",
    skills : "Skills",
    portfolio: "Portfolio",
    contact: "Contact",
    getintouch: "Get in touch",
    hireMe: "Hire us",
    downloadCV: "Our services",
    yearsOfExperience: "5+ Years of Experience",
    completedProjects: "30+ Completed Projects",
    happyClients: "11+ Happy Clients",
    aboutMe: "About us",
    needCreativeProduct: "Need a Creative Product? We Can Help You!",
    hiIm: "Hi! We’re BeeDigital, an agency passionate about creating impactful digital experiences. We specialize in web development, digital marketing, and social media management. Our team loves turning ideas into reality through innovative solutions. We are constantly exploring new skills, tools, and concepts. Whether it's developing full-stack projects or collaborating with creative teams, we ensure smooth communication, efficient project management, and excellent results.",
    projects: "Our Works",
    skillss: "Our skills",
    skillsans:
      "We develop simple, intuitive, and responsive user interfaces that help users accomplish tasks with ease, using these cutting-edge technologies.",
    whatskills: "What Our Programming Skills Include?",
    seeMyWorks: "See Some of Our Works That Will Amaze You!",
    weDevelop:
      "We develop high-quality websites designed for long-term success. Our well-documented, clean, and elegant interfaces are user-friendly, even for non-technical clients.",
    questproject: "Have a Project ? Please Drop a Message",
    fillout: "Get in touch and let us know how we can assist you. Fill out the form and we’ll be in touch as soon as possible.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send",
    address: "Address:",
    phoneNumber: "+33 6 95 53 52 93",
    email1: "contact@beedigital.com",
    email2: "support@beedigital.com",
    socialMedia: "Social Media",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    goTop: "Go to Top",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services : "Nos Services",
    skills : "Compétences",
    portfolio: "Portfolio",
    contact: "Contact",
    getintouch: "Prenez contact",
    hireMe: "Engagez-nous",
    downloadCV: "Nos services",
    yearsOfExperience: "5+ années d'expérience",
    completedProjects: "30+ projets réalisés",
    happyClients: "11+ clients satisfaits",
    aboutMe: "À propos de nous",
    needCreativeProduct: "Besoin d'un produit créatif ? Nous pouvons vous aider !",
    hiIm: "Bonjour ! Nous sommes BeeDigital, une agence passionnée par la création d'expériences numériques impactantes. Nous sommes spécialisés dans le développement web, le marketing digital et la gestion des réseaux sociaux. Notre équipe adore transformer les idées en réalité grâce à des solutions innovantes. Nous explorons constamment de nouvelles compétences, outils et concepts. Que ce soit pour développer des projets full-stack ou collaborer avec des équipes créatives, nous assurons une communication fluide, une gestion de projet efficace et des résultats excellents.",
    projects: "Nos réalisations",
    skillss: "Nos compétences",
    skillsans: "Nous développons des interfaces utilisateur simples, intuitives et réactives qui aident les utilisateurs à accomplir leurs tâches avec facilité, en utilisant ces technologies de pointe.",
    whatskills: "Que comprennent nos compétences en programmation ?",
    seeMyWorks: "Découvrez quelques-unes de nos réalisations qui vous étonneront !",
    weDevelop: "Nous développons des sites web de haute qualité conçus pour une réussite à long terme. Nos interfaces, bien documentées, propres et élégantes, sont conviviales, même pour les clients non techniques.",
    questproject: "Vous avez un projet ? Veuillez laisser un message",
    fillout: "Prenez contact avec nous et faites-nous savoir comment nous pouvons vous aider. Remplissez le formulaire et nous vous répondrons dès que possible.",
    name: "Nom",
    email: "Email",
    phone: "Téléphone",
    message: "Message",
    send: "Envoyer",
    address: "Adresse :",
    phoneNumber: "+33 6 95 53 52 93",
    email1: "contact@beedigital.com",
    email2: "support@beedigital.com",
    socialMedia: "Réseaux sociaux",
    facebook: "Facebook",
    twitter: "Twitter",
    linkedin: "LinkedIn",
    youtube: "YouTube",
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

translatePage("fr");

document.getElementById("lang").addEventListener("change", function (event) {
  const selectedLanguage = event.target.value;
  translatePage(selectedLanguage);
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(this);

      fetch("/", {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
      })
          .then(() => {
              // Réinitialiser le formulaire après l'envoi
              form.reset();
              alert("Votre message a été envoyé avec succès.");
          })
          .catch((error) => {
              console.error("Erreur lors de l'envoi du formulaire:", error);
              alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
          });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const navbar = document.querySelector('.navbar');
  const navToggleBtn = document.querySelector('.nav-toggle-btn');

  function toggleNavButton() {
    navToggleBtn.classList.toggle('active');
  }


  navbarLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          if (navbar.classList.contains('active')) {
              navbar.classList.remove('active');
              toggleNavButton();
          }
      });
  });
});
