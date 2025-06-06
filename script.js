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
        const scrollThreshold = 20;
        
        if (window.scrollY > scrollThreshold) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, 10);
      
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    const projects = [
      {
        id: 5,
        title: "Financial Advisor",
        subtitle: "AI-Powered Financial Advisor",
        description: "Financial Advisor is an intelligent personal finance platform that helps users manage their money through AI-powered expense analysis and Egyptian market investment tools. The platform automatically categorizes expenses, predicts future spending with high accuracy, and provides personalized budget recommendations and goal tracking. Users can explore investment opportunities in Egyptian bank certificates and EGX stocks, compare returns across multiple options, and receive tailored financial advice through an AI chatbot that understands local market conditions. Available as both web and mobile applications, the platform serves as a comprehensive financial management solution specifically designed for the Egyptian market.",
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
        title: "PeerLink-Mobile",
        subtitle: "Social Media Mobile Application",
        description: "PeerLink is a dynamic social media platform designed for connecting users through posts, likes, and follows. It offers secure login and registration, post creation with text and image sharing, and robust profile management. Users can interact via likes, follows, and profile customization. Built using Flutter for a cross-platform mobile interface, Laravel for a robust backend, and MySQL for efficient data management, PeerLink ensures a responsive interface and seamless user experience for engaging in social interactions and content discovery.",
        technologies: ["Flutter", "Laravel", "MySQL"],
        github: "https://github.com/Mohamed-Samehh/PeerLink-Mobile",
        icon: "fa-users"
      },
      {
        id: 2,
        title: "Blog",
        subtitle: "Backend for Blog Website",
        description: "This is a blog application built with Laravel, featuring core functionalities like user authentication, blog post management, nested comments, and a like system. It also includes media management for image uploads using Spatie Media Library, and efficient pagination for posts and comments. This project demonstrates my ability to develop robust backend systems for modern web applications using Laravel.",
        technologies: ["Laravel", "MySQL"],
        github: "https://github.com/Mohamed-Samehh/Blog",
        icon: "fa-blog"
      },
      {
        id: 1,
        title: "Recipe Finder",
        subtitle: "Cooking Recipes Website",
        description: "Recipe Finder is an Angular-based web application that lets users explore and discover recipes from various sources. Featuring an interactive recipe search function and detailed recipe views, the application offers seamless navigation through a Bootstrap-styled responsive design. Users can suggest new recipes via a form, browse meals by categories and geographical areas, and view detailed information such as ingredients and instructions for each dish. The app dynamically fetches data from external recipe APIs, ensuring an engaging and easy-to-use experience for all users.",
        technologies: ["Angular", "Bootstrap"],
        github: "https://github.com/Mohamed-Samehh/Recipe-Finder",
        live_demo: "https://mohamed-samehh.github.io/Recipe-Finder/",
        icon: "fa-utensils"
      }
    ];

    const experiences = [
      {
        id: 4,
        position: "Software Engineer",
        company: "Mercor",
        logo: "./assets/Mercor.png",
        duration: "May 2025 - Present",
        location: "San Francisco, USA",
        description: "Recently started a remote part-time role as a Software Engineer with Mercor, collaborating directly with the Amazon team on a pilot project.",
      },
      {
        id: 3,
        position: "Web Developer",
        company: "Outlier",
        logo: "./assets/Outlier.png",
        duration: "February 2025 - Present",
        location: "Freelance",
        description: "Evaluated and rewrote AI-generated code to create production-quality frontend web applications while providing feedback for model enhancement.",
      },
      {
        id: 2,
        position: "Angular Developer Intern",
        company: "Digis Squared",
        logo: "./assets/Digis.svg",
        duration: "May 2024 - September 2024",
        location: "Cairo, Egypt",
        description: "Contributed to the front-end development of 'KATANA', an advanced network performance management platform, using Angular for building responsive and dynamic user interfaces.",
        certificate: "./assets/Certificates/Digis.pdf"
      },
      {
        id: 1,
        position: "Laravel Developer Intern",
        company: "Nafis Technologies",
        logo: "./assets/Nafis.png",
        duration: "July 2024 - September 2024",
        location: "Cairo, Egypt",
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
                  <p class="experience-company-name">
                    ${experience.company}
                    ${experience.location ? ` • ${experience.location}` : ''}
                  </p>
                </div>
              </div>
              <span class="experience-duration">${experience.duration}</span>
            </div>
            <p class="experience-description">${experience.description}</p>
            ${experience.certificate ? `
              <button class="btn btn-outline" data-bs-toggle="modal" data-bs-target="#expModal${experience.id}">
                <i class="fas fa-certificate"></i>&nbsp; View Certificate
              </button>
            ` : ''}
          </div>
        `;
        
        experiencesFragment.appendChild(experienceItem);
        
        if (experience.certificate) {
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
        }
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

    function updateNavigation(targetId) {
      if (targetId === '#hero') {
        navLinks.forEach(link => link.classList.remove('active'));
        mobileNavLinks.forEach(link => link.classList.remove('active'));
        return;
      }
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
      
      mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          isClickScrolling = true;
          
          if (document.body.classList.contains('menu-open')) {
            document.body.classList.remove('menu-open');
          }
          
          if (this.classList.contains('logo') || targetId === '#hero') {
            updateNavigation('#hero');
          } else {
            updateNavigation(targetId);
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
    
    if (sections.length) {
      function checkSectionInView() {
        if (isClickScrolling) return;
        
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        
        let currentSectionId = 'hero';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
          }
        });
        
        if (currentSectionId === 'hero') {
          updateNavigation('#hero');
        } else {
          updateNavigation('#' + currentSectionId);
        }
      }
      
      window.addEventListener('scroll', checkSectionInView);
      window.addEventListener('resize', checkSectionInView);
      
      checkSectionInView();
    }
    
    if (window.location.hash) {
      const targetId = window.location.hash;
      
      if (targetId !== '#hero') {
        updateNavigation(targetId);
      }
      
      setTimeout(() => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView();
        }
      }, 500);
    } else {
      if (window.pageYOffset <= 50) {
        updateNavigation('#hero');
      }
    }

    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .mobile-nav-link.active {
        color: var(--color-primary) !important;
      }
    `;
    document.head.appendChild(styleElement);

    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.className = savedTheme + '-mode';

    updateThemeIcons();

    function toggleTheme() {
      const isDarkMode = html.classList.contains('dark-mode');
      
      if (isDarkMode) {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      }
      
      themeToggle.classList.add('theme-toggle-animation');
      mobileThemeToggle.classList.add('theme-toggle-animation');
      
      setTimeout(() => {
        themeToggle.classList.remove('theme-toggle-animation');
        mobileThemeToggle.classList.remove('theme-toggle-animation');
      }, 500);
      
      updateThemeIcons();
    }

    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.classList.add('pulse-animation');
      
      scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          isClickScrolling = true;
          aboutSection.scrollIntoView({ behavior: 'smooth' });

          setTimeout(() => {
            isClickScrolling = false;
          }, 1000);
        }
      });
    }

    function updateThemeIcons() {
      const isDarkMode = html.classList.contains('dark-mode');
      const allThemeToggles = [themeToggle, mobileThemeToggle];
      
      allThemeToggles.forEach(toggle => {
        if (!toggle) return;
        
        const moonIcon = toggle.querySelector('.fa-moon');
        const sunIcon = toggle.querySelector('.fa-sun');
        
        if (isDarkMode) {
          if (moonIcon) moonIcon.style.display = 'none';
          if (sunIcon) sunIcon.style.display = 'block';
        } else {
          if (moonIcon) moonIcon.style.display = 'block';
          if (sunIcon) sunIcon.style.display = 'none';
        }
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener('click', toggleTheme);
    }
  });