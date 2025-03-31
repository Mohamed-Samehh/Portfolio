  document.addEventListener('DOMContentLoaded', () => {
    const certificates = [
      {"title": "Front-End Development using React JS", "hours": 120, "institute": "ITI", "date": "Sept 2024"},
      {"title": "ASPNET & Angular from Scratch", "hours": 67, "institute": "Udemy", "date": "Jul 2024"},
      {"title": "Node.js Back-end Development", "hours": 50, "institute": "AITB", "date": "Sept 2023"},
      {"title": "Mern Stack Developer", "hours": 26, "institute": "MaharaTech", "date": "Oct 2024"},
      {"title": "ReactJS Developer", "hours": 35, "institute": "MaharaTech", "date": "Oct 2024"},
      {"title": "Back-End Developer", "hours": 21, "institute": "MaharaTech", "date": "Oct 2024"},
      {"title": "Front-End Developer", "hours": 31, "institute": "MaharaTech", "date": "Oct 2024"},
      {"title": "JavaScript Developer", "hours": 28, "institute": "MaharaTech", "date": "Oct 2024"},
      {"title": "Bootstrap & React Bootcamp", "hours": 13, "institute": "Udemy", "date": "Sept 2024"}
    ];
    
    const loader = document.querySelector('.loader');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
          loader.style.display = 'none';
          const heroElements = document.querySelectorAll('.hero-title, .hero-description, .hero-cta');
          heroElements.forEach((el, index) => {
            setTimeout(() => {
              el.style.opacity = 1;
              el.style.transform = 'translateY(0)';
            }, index * 100);
          });
        }, 500);
      }, 1000);
    }

    const certificatesList = document.getElementById('certificates-list');
    if (certificatesList) {
      certificatesList.innerHTML = '';
      
      const certsFragment = document.createDocumentFragment();
      
      certificates.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'certificate-item';
        
        certItem.innerHTML = `
          <div class="certificate-title">${cert.title}</div>
          <div class="certificate-details">
            <span class="certificate-institute">${cert.institute}</span>
            <span class="certificate-hours">${cert.hours} hours</span>
            ${cert.date ? `<span class="certificate-date">${cert.date}</span>` : ''}
          </div>
        `;
        
        certsFragment.appendChild(certItem);
      });
      
      certificatesList.appendChild(certsFragment);
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
      });
    }
    
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
      });
    });

    function debounce(func, wait = 10, immediate = true) {
      let timeout;
      return function() {
        const context = this, args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    
    const header = document.querySelector('.site-header');
    
    if (header) {
      const handleScroll = debounce(() => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, 20);
      
      window.addEventListener('scroll', handleScroll);
    }

    const projects = [
      {
        id: 5,
        title: "Financial-Advisor",
        subtitle: "AI-Powered Financial Advisor",
        description: "An intelligent financial advisor platform that provides personalized financial recommendations using artificial intelligence and machine learning algorithms. The application analyzes user financial data to offer insights on investments, savings, and financial planning.",
        technologies: ["Angular", "Bootstrap", "Flutter", "Laravel", "Flask", "AI/ML", "MySQL"],
        github: "https://github.com/Mohamed-Samehh/Financial-Advisor",
        icon: "fa-chart-line"
      },
      {
        id: 4,
        title: "Spec Recommender",
        subtitle: "BUE Specialization Recommender",
        description: "Spec Recommender is a full-stack web application designed to help users choose their career paths with ease and confidence. Built with a React Vite frontend and an Express.js backend, the platform offers a seamless user experience with responsive and intuitive design. Users can receive personalized career recommendations based on academic performance and preferences, explore specialized career options, and access a knowledge hub with courses sourced from Coursera's API. The app integrates MongoDB Atlas for efficient data management and supports user interactions like creating reviews and updating profiles.",
        technologies: ["React Vite", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Mohamed-Samehh/BUE-Spec-Path",
        icon: "fa-university"
      },
      {
        id: 3,
        title: "Blog",
        subtitle: "Backend for Blog Website",
        description: "This is a blog application built with Laravel, featuring core functionalities like user authentication, blog post management, nested comments, and a like system. It also includes media management for image uploads using Spatie Media Library, and efficient pagination for posts and comments. This project demonstrates my ability to develop robust backend systems for modern web applications using Laravel.",
        technologies: ["Laravel", "MySQL"],
        github: "https://github.com/Mohamed-Samehh/Blog",
        icon: "fa-blog"
      },
      {
        id: 2,
        title: "Recipe Finder",
        subtitle: "Cooking Recipes Website",
        description: "Recipe Finder is an Angular-based web application that lets users explore and discover recipes from various sources. Featuring an interactive recipe search function and detailed recipe views, the application offers seamless navigation through a Bootstrap-styled responsive design. Users can suggest new recipes via a form, browse meals by categories and geographical areas, and view detailed information such as ingredients and instructions for each dish. The app dynamically fetches data from external recipe APIs, ensuring an engaging and easy-to-use experience for all users.",
        technologies: ["Angular", "Bootstrap"],
        github: "https://github.com/Mohamed-Samehh/Recipe-Finder",
        live_demo: "https://mohamed-samehh.github.io/Recipe-Finder/",
        icon: "fa-utensils"
      },
      {
        id: 1,
        title: "PeerLink",
        subtitle: "Social Media Platform",
        description: "PeerLink is a dynamic social media platform designed for connecting users through posts, likes, and follows. It offers secure login and registration, post creation with text and image sharing, and robust profile management. Users can interact via likes, follows, and profile customization. Using HTML, CSS, JavaScript, jQuery, AJAX, PHP, and MySQL, PeerLink ensures a responsive interface and seamless user experience for engaging in social interactions and content discovery.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
        github: "https://github.com/Mohamed-Samehh/PeerLink",
        icon: "fa-users"
      }
    ];

    const experiences = [
      {
        id: 1,
        position: "Angular Developer Intern",
        company: "Digis Squared",
        logo: "./assets/Digis.svg",
        duration: "May 2024 - September 2024",
        description: "Contributed to the front-end development of 'KATANA', an advanced network performance management platform, using Angular for building responsive and dynamic user interfaces.",
        certificate: "./assets/Certificates/Digis.pdf"
      },
      {
        id: 2,
        position: "Laravel Developer Intern",
        company: "Nafis Technologies",
        logo: "./assets/Nafis.png",
        duration: "July 2024 - September 2024",
        description: "Engaged in hands-on training and development of projects using the Laravel backend framework, gaining comprehensive experience in building robust and scalable web applications.",
        certificate: "./assets/Certificates/Nafis.pdf"
      }
    ];

    const projectsContainer = document.getElementById('projects-container');
    const projectModals = document.getElementById('project-modals');

    if (projectsContainer) {
      const projectsFragment = document.createDocumentFragment();
      const modalsFragment = document.createDocumentFragment();
      
      projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
          <div class="project-image">
            <i class="fas ${project.icon}"></i>
          </div>
          <div class="project-content">
            <h3 class="project-title">
              ${project.title}
              <span data-bs-toggle="modal" data-bs-target="#projectModal${project.id}" style="cursor: pointer">
                <i class="fas fa-info-circle"></i>
              </span>
            </h3>
            <p class="project-subtitle">${project.subtitle}</p>
            <div class="project-techs">
              ${project.technologies.slice(0, 3).map(tech => `<span class="project-tech">${tech}</span>`).join('')}
              ${project.technologies.length > 3 ? `<span class="project-tech">+${project.technologies.length - 3}</span>` : ''}
            </div>
            <div class="project-links">
              <a href="${project.github}" target="_blank" class="project-link">
                <i class="fab fa-github"></i> View Code
              </a>
              ${project.live_demo ? `
                <a href="${project.live_demo}" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
              ` : ''}
            </div>
          </div>
        `;
        
        projectsFragment.appendChild(projectCard);
        
        const modal = document.createElement('div');
        modal.className = 'modal fade project-modal';
        modal.id = `projectModal${project.id}`;
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-labelledby', `projectModalLabel${project.id}`);
        modal.setAttribute('aria-hidden', 'true');
        
        modal.innerHTML = `
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <div>
                  <h5 class="modal-title" id="projectModalLabel${project.id}">${project.title}</h5>
                  <p class="modal-subtitle">${project.subtitle}</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p class="modal-description">${project.description}</p>
                <h6>Technologies Used:</h6>
                <div class="modal-techs">
                  ${project.technologies.map(tech => `<span class="modal-tech">${tech}</span>`).join('')}
                </div>
              </div>
              <div class="modal-footer">
                <a href="${project.github}" target="_blank" class="btn btn-primary">
                  <i class="fab fa-github"></i>&nbsp;View Code
                </a>
                ${project.live_demo ? `
                  <a href="${project.live_demo}" target="_blank" class="btn btn-secondary">
                    <i class="fas fa-external-link-alt"></i>&nbsp;Live Demo
                  </a>
                ` : ''}
                <button type="button" class="btn btn-outline" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        `;
        
        modalsFragment.appendChild(modal);
      });
      
      projectsContainer.appendChild(projectsFragment);
      if (projectModals) {
        projectModals.appendChild(modalsFragment);
      }
    }

    const experienceContainer = document.getElementById('experience-container');
    const experienceModals = document.getElementById('experience-modals');

    if (experienceContainer) {
      const experiencesFragment = document.createDocumentFragment();
      const expModalsFragment = document.createDocumentFragment();
      
      experiences.forEach(experience => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        
        experienceItem.innerHTML = `
          <div class="experience-card">
            <div class="experience-top">
              <div class="experience-company">
                <img src="${experience.logo}" alt="${experience.company}" class="experience-logo">
                <div class="experience-details">
                  <h3>${experience.position}</h3>
                  <p class="experience-company-name">${experience.company}</p>
                </div>
              </div>
              <span class="experience-duration">${experience.duration}</span>
            </div>
            <p class="experience-description">${experience.description}</p>
            <button class="btn btn-outline" data-bs-toggle="modal" data-bs-target="#expModal${experience.id}">
              <i class="fas fa-certificate"></i>&nbsp; View Certificate
            </button>
          </div>
        `;
        
        experiencesFragment.appendChild(experienceItem);
        
        const modal = document.createElement('div');
        modal.className = 'modal fade';
        modal.id = `expModal${experience.id}`;
        modal.setAttribute('tabindex', '-1');
        modal.setAttribute('aria-labelledby', `expModalLabel${experience.id}`);
        modal.setAttribute('aria-hidden', 'true');
        
        modal.innerHTML = `
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="expModalLabel${experience.id}">${experience.company} Certificate</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <object data="${experience.certificate}" type="application/pdf" width="100%" height="500px">
                  <p class="text-center">Your browser does not support PDFs. <a href="${experience.certificate}" target="_blank">Download the PDF</a></p>
                </object>
              </div>
              <div class="modal-footer">
                <a href="${experience.certificate}" target="_blank" class="btn btn-primary">
                  <i class="fas fa-download"></i>&nbsp;Download
                </a>
                <button type="button" class="btn btn-outline" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        `;
        
        expModalsFragment.appendChild(modal);
      });
      
      experienceContainer.appendChild(experiencesFragment);
      if (experienceModals) {
        experienceModals.appendChild(expModalsFragment);
      }
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu-link');
    const logo = document.querySelector('.logo');

    let isClickScrolling = false;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          isClickScrolling = true;

          if (this.classList.contains('logo') || targetId === '#hero') {
            navLinks.forEach(link => {
              link.classList.remove('active');
            });
          } else if (this.classList.contains('menu-link')) {
            navLinks.forEach(link => {
              link.classList.remove('active');
            });
            this.classList.add('active');
          } else {
            const menuLink = document.querySelector(`.menu-link[href="${targetId}"]`);
            if (menuLink) {
              navLinks.forEach(link => {
                link.classList.remove('active');
              });
              menuLink.classList.add('active');
            }
          }
          
          targetElement.scrollIntoView({ 
            behavior: 'smooth'
          });
          
          history.pushState(null, null, targetId);
          
          setTimeout(() => {
            isClickScrolling = false;
          }, 1000);
        }
      });
    });
    
    if (sections.length && navLinks.length) {
      const highlightNav = debounce(() => {
        if (isClickScrolling) return;
        
        let current = '';
        const offset = 150;

        sections.forEach(section => {
          const sectionTop = section.offsetTop - offset;
          const sectionHeight = section.offsetHeight;
          
          if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        if (current === 'hero') {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          return;
        }

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
          }
        });
      }, 100);

      window.addEventListener('scroll', highlightNav);
    }
    
    if (window.location.hash) {
      const targetId = window.location.hash;
      if (targetId !== '#hero') {
        const targetLink = document.querySelector(`.menu-link[href="${targetId}"]`);
        if (targetLink) {
          navLinks.forEach(link => {
            link.classList.remove('active');
          });
          targetLink.classList.add('active');
        }
      }
      
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView();
        }
      }, 500);
    } else {
      if (window.pageYOffset <= 50) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
      }
    }
  });