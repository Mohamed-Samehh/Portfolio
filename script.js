document.addEventListener("DOMContentLoaded", () => {
    // Projects JSON
    const projects = [
        {
            "id": 5,
            "title": "Financial-Advisor",
            "subtitle": "AI-Powered Financial Advisor",
            "description": "Work still in progress...",
            "technologies": ["Angular", "Bootstrap", "Laravel", "Flask", "MySQL"],
            "github": "https://github.com/Mohamed-Samehh/Financial-Advisor",
            "icon": "fa-line-chart"
        },
        {
            "id": 4,
            "title": "Spec Recommender",
            "subtitle": "BUE Specialization Recommender",
            "description": "Spec Recommender is a full-stack web application designed to help users choose their career paths with ease and confidence. Built with a React Vite frontend and an Express.js backend, the platform offers a seamless user experience with responsive and intuitive design. Users can receive personalized career recommendations based on academic performance and preferences, explore specialized career options, and access a knowledge hub with courses sourced from Coursera's API. The app integrates MongoDB Atlas for efficient data management and supports user interactions like creating reviews and updating profiles.",
            "technologies": ["React Vite", "Node.js", "Express", "MongoDB"],
            "github": "https://github.com/Mohamed-Samehh/BUE-Spec-Path",
            "icon": "fa-university"
        },
        {
            "id": 3,
            "title": "Blog",
            "subtitle": "Backend for Blog Website",
            "description": "This is a blog application built with Laravel, featuring core functionalities like user authentication, blog post management, nested comments, and a like system. It also includes media management for image uploads using Spatie Media Library, and efficient pagination for posts and comments. This project demonstrates my ability to develop robust backend systems for modern web applications using Laravel.",
            "technologies": ["Laravel", "MySQL"],
            "github": "https://github.com/Mohamed-Samehh/Blog",
            "icon": "fa-pencil-alt"
        },
        {
            "id": 2,
            "title": "Recipe Finder",
            "subtitle": "Cooking Recipes Website",
            "description": "Recipe Finder is an Angular-based web application that lets users explore and discover recipes from various sources. Featuring an interactive recipe search function and detailed recipe views, the application offers seamless navigation through a Bootstrap-styled responsive design. Users can suggest new recipes via a form, browse meals by categories and geographical areas, and view detailed information such as ingredients and instructions for each dish. The app dynamically fetches data from external recipe APIs, ensuring an engaging and easy-to-use experience for all users.",
            "technologies": ["Angular", "Bootstrap"],
            "github": "https://github.com/Mohamed-Samehh/Recipe-Finder",
            "live_demo": "https://mohamed-samehh.github.io/Recipe-Finder/",
            "icon": "fa-utensils"
        },
        {
            "id": 1,
            "title": "PeerLink",
            "subtitle": "Social Media Platform",
            "description": "PeerLink is a dynamic social media platform designed for connecting users through posts, likes, and follows. It offers secure login and registration, post creation with text and image sharing, and robust profile management. Users can interact via likes, follows, and profile customization. Using HTML, CSS, JavaScript, jQuery, AJAX, PHP, and MySQL, PeerLink ensures a responsive interface and seamless user experience for engaging in social interactions and content discovery.",
            "technologies": ["HTML", "CSS", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
            "github": "https://github.com/Mohamed-Samehh/PeerLink",
            "icon": "fa-users"
        }
    ];

    // Dynamically load projects
    const projectsContainer = document.getElementById("projects-container");

    projects.forEach((project) => {
        const projectHTML = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card border-0 shadow-sm mb-4">
                    <i class="fa ${project.icon} fa-5x text-primary mt-4"></i>
                    <div class="card-body">
                        <h5 class="card-title">${project.title}<br>(${project.subtitle})</h5>
                        <p class="card-text">Built with ${project.technologies.join(", ")}.</p>
                        <a href="${project.github}" target="_blank" class="btn btn-outline-primary">View Project</a>
                        ${project.live_demo ? `<a href="${project.live_demo}" target="_blank" class="btn btn-outline-primary">Live Demo</a>` : ""}
                        <button type="button" class="btn position-absolute top-0 end-0 p-0 m-3" style="border: none; height: 0;" data-bs-toggle="modal" data-bs-target="#projectModal${project.id}">
                            <i class="fas fa-info-circle" style="font-size: 24px;"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Modal for Project ${project.id} -->
            <div class="modal fade" id="projectModal${project.id}" tabindex="-1" aria-labelledby="projectModalLabel${project.id}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="projectModalLabel${project.id}">${project.title} (${project.subtitle})</h5>
                        </div>
                        <div class="modal-body">
                            <p>${project.description}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        projectsContainer.innerHTML += projectHTML;
    });

    // Experience JSON
    const experiences = [
        {
            "id": 1,
            "position": "Angular Developer Intern",
            "company": "Digis Squared",
            "logo": "./assets/Digis.svg",
            "duration": "May 2024 - September 2024",
            "description": "Contributed to the front-end development of 'KATANA', an advanced network performance management platform, using Angular for building responsive and dynamic user interfaces.",
            "certificate": "./assets/Certificates/Internships/Digis.pdf"
        },
        {
            "id": 2,
            "position": "Laravel Developer Intern",
            "company": "Nafis Technologies",
            "logo": "./assets/Nafis.png",
            "duration": "July 2024 - September 2024",
            "description": "Engaged in hands-on training and development of projects using the Laravel backend framework, gaining comprehensive experience in building robust and scalable web applications.",
            "certificate": "./assets/Certificates/Internships/Nafis.pdf"
        }
    ];

    // Dynamically load experience section
    const experienceContainer = document.getElementById("experience-container");
    const experienceModals = document.getElementById("experience-modals");

    experiences.forEach(experience => {
        const experienceHTML = `
            <div class="col-md-5 d-flex align-items-stretch">
                <div class="experience-card text-center">
                    <img src="${experience.logo}" class="company-logo mx-auto d-block" alt="${experience.company} Logo">
                    <h4><strong>${experience.position}</strong> <br> <span>(${experience.company})</span></h4>
                    <h5>${experience.duration}</h5>
                    <p>${experience.description}</p>
                    <button class="btn btn-outline-primary view-certificate" data-bs-toggle="modal" data-bs-target="#pdfModal_${experience.id}">
                        View Certificate
                    </button>
                </div>
            </div>
        `;
    
        const modalHTML = `
            <div class="modal fade" id="pdfModal_${experience.id}" tabindex="-1" aria-labelledby="pdfModalLabel_${experience.id}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="pdfModalLabel_${experience.id}">${experience.company}</h5>
                            <a href="${experience.certificate}" class="btn btn-outline-secondary ms-auto" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                        <div class="modal-body">
                            <object data="${experience.certificate}" type="application/pdf">
                                <p class="modal-link">Your browser does not support PDFs. <a href="${experience.certificate}">Download the PDF</a></p>
                            </object>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        experienceContainer.innerHTML += experienceHTML;
        experienceModals.innerHTML += modalHTML;
    });

    // Navbar Toggler
    const toggler = document.getElementById("navbar-toggler");
    const sidebarNav = document.getElementById("sidebarNav");
    const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");

    if (!toggler || !sidebarNav) {
        console.error("Navbar elements not found. Check your HTML structure.");
        return;
    }

    toggler.addEventListener("click", function () {
        sidebarNav.classList.toggle("active"); // Open/Close Sidebar
    });

    // Close sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebarNav.contains(event.target) && !toggler.contains(event.target)) {
            sidebarNav.classList.remove("active");
        }
    });

    // Ensure navLinks exist before looping over them
    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                sidebarNav.classList.remove("active");
            });
        });
    } else {
        console.warn("No sidebar navigation links found. Check your HTML structure.");
    }
    
    // Function to highlight the navbar item based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        const lastLink = navLinks[navLinks.length - 2]; // Gets the second last section (Contact)
        const firstLink = sections[0];

        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        const offset = 75; // Adjust when the section highlights
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        let atBottom = Math.ceil(scrollPosition + windowHeight) >= documentHeight;

        if (atBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            lastLink.classList.add('active');
        } else {
            if (scrollPosition < firstLink.offsetTop) {
                navLinks.forEach(link => link.classList.remove('active'));
            }

            sections.forEach((section, index) => {
                if (section.offsetTop - offset <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[index].classList.add('active');
                }
            });
        }
    });

    // Night Mode
    var mode = document.getElementById("mode");
    var isNightMode = localStorage.getItem("isNightMode") === "true";

    if (isNightMode) {
        document.body.classList.add("night-mode");
        mode.innerHTML = "Light Mode&nbsp;";
        document.getElementById("theme-toggler").querySelector("i").classList.add("fa-sun");
        document.getElementById("theme-toggler").querySelector("i").classList.remove("fa-moon");
    } else {
        mode.innerHTML = "Dark Mode&nbsp;";
        document.getElementById("theme-toggler").querySelector("i").classList.add("fa-moon");
        document.getElementById("theme-toggler").querySelector("i").classList.remove("fa-sun");
    }

    document.getElementById("theme-toggler").addEventListener("click", function () {
        document.body.classList.toggle("night-mode");

        const icon = this.querySelector("i");
        if (document.body.classList.contains("night-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
            mode.innerHTML = "Light Mode&nbsp;";
            localStorage.setItem("isNightMode", true);
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
            mode.innerHTML = "Dark Mode&nbsp;";
            localStorage.setItem("isNightMode", false);
        }
    });
});
