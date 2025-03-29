document.addEventListener("DOMContentLoaded", () => {
    // Certificates JSON
    const certificates = [
        {
            "id": 10,
            "title": "Flutter Essential Training",
            "hours": 8,
            "institute": "LinkedIn",
            "date": "March 2025",
            "image": "./assets/Certificates/LinkedIn/Flutter Essential Training.jpg",
            "pdf": "./assets/Certificates/LinkedIn/Flutter Essential Training.pdf",
            "verification": "https://www.linkedin.com/learning/certificates/66bc09271dac391da101552f40cc495012fd903cbc86bf9defe985546fd4e354?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2%2FcYT4GCR1GJooGZoRf24w%3D%3D"
        },
        {
            "id": 9,
            "title": "Front-End Development using React JS",
            "hours": 120,
            "institute": "ITI",
            "date": "September 2024",
            "image": "./assets/Certificates/ITI/React JS.JPG",
            "pdf": "./assets/Certificates/ITI/React JS.pdf",
            "verification": null
          },
          {
            "id": 8,
            "title": "ASPNET & Angular from Scratch",
            "hours": 67,
            "institute": "Udemy",
            "date": "July 2024",
            "image": "./assets/Certificates/Udemy/ASPNET & Angular.jpg",
            "pdf": "./assets/Certificates/Udemy/ASPNET & Angular.pdf",
            "verification": "https://www.udemy.com/certificate/UC-0c75f5f3-8b5b-4035-886f-20bb64537621/"
          },
          {
            "id": 7,
            "title": "Node.js Back-end Development",
            "hours": 50,
            "institute": "AITB",
            "date": "September 2023",
            "image": "./assets/Certificates/AITB/Node.js.jpg",
            "pdf": "./assets/Certificates/AITB/Node.js.pdf",
            "verification": "https://aitbeg.com/verify-certification?cn=SE-WD-N-230722073928"
          },
          {
            "id": 6,
            "title": "Mern Stack Developer",
            "hours": 26,
            "institute": "MaharaTech",
            "date": "October 2024",
            "image": "./assets/Certificates/MaharaTech/Mern Stack Developer.jpg",
            "pdf": "./assets/Certificates/MaharaTech/Mern Stack Developer.pdf",
            "verification": "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=469694&code=DDtCBDqaWU&qrcode=1"
          },
          {
            "id": 5,
            "title": "ReactJS Developer",
            "hours": 35,
            "institute": "MaharaTech",
            "date": "October 2024",
            "image": "./assets/Certificates/MaharaTech/ReactJS Developer.jpg",
            "pdf": "./assets/Certificates/MaharaTech/ReactJS Developer.pdf",
            "verification": "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259535&code=hc0pJeBXdp&qrcode=1"
          },
          {
            "id": 4,
            "title": "Back-End Developer",
            "hours": 21,
            "institute": "MaharaTech",
            "date": "October 2024",
            "image": "./assets/Certificates/MaharaTech/Back-End Developer.jpg",
            "pdf": "./assets/Certificates/MaharaTech/Back-End Developer.pdf",
            "verification": "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259540&code=qGJNwBGXzw&qrcode=1"
          },
          {
            "id": 3,
            "title": "Front-End Developer",
            "hours": 31,
            "institute": "MaharaTech",
            "date": "October 2024",
            "image": "./assets/Certificates/MaharaTech/Front-End Developer.jpg",
            "pdf": "./assets/Certificates/MaharaTech/Front-End Developer.pdf",
            "verification": "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259520&code=B79ybMIz6u&qrcode=1"
          },
          {
            "id": 2,
            "title": "JavaScript Developer",
            "hours": 28,
            "institute": "MaharaTech",
            "date": "October 2024",
            "image": "./assets/Certificates/MaharaTech/JavaScript Developer.jpg",
            "pdf": "./assets/Certificates/MaharaTech/JavaScript Developer.pdf",
            "verification": "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?contextid=259530&code=rtGhpFyhcu&qrcode=1"
          },
          {
            "id": 1,
            "title": "Bootstrap & React Bootcamp",
            "hours": 13,
            "institute": "Udemy",
            "date": "September 2024",
            "image": "./assets/Certificates/Udemy/Bootstrap & React.jpg",
            "pdf": "./assets/Certificates/Udemy/Bootstrap & React.pdf",
            "verification": "https://www.udemy.com/certificate/UC-dd3cb09d-a755-400a-a701-22af6ffa5c1a/"
          }
    ];

    // Dynamically load certificates
    const container = document.getElementById("certificates-container");
    const modalsContainer = document.getElementById("modals-container");

    certificates.forEach(cert => {
        const certHTML = `
            <div class="col-md-6 col-lg-4 mb-4 certificate-card" 
                 data-date="${cert.date}" data-title="${cert.title}" data-institute="${cert.institute}">
                <div class="card border-0 shadow-sm">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#pdfModal${cert.id}" class="embed-responsive">
                        <img src="${cert.image}" class="card-img-top">
                    </a>
                    <div class="card-body text-center">
                        <h5 class="card-title">${cert.title} (${cert.hours}hrs)</h5>
                        <p class="card-text">${cert.institute}<br>${cert.date}</p>
                        ${cert.verification ? `<a href="${cert.verification}" target="_blank" class="btn btn-primary">Verify Certificate</a>` : '<p style="color: #6c757d; margin-top: 10px">This certificate has no verification link</p>'}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += certHTML;

        const modalHTML = `
            <div class="modal fade" id="pdfModal${cert.id}" tabindex="-1" aria-labelledby="pdfModalLabel${cert.id}" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="pdfModalLabel${cert.id}">${cert.title}</h5>
                            <a href="${cert.pdf}" class="btn btn-outline-secondary ms-auto" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                        </div>
                        <div class="modal-body">
                            <object data="${cert.pdf}" type="application/pdf">
                                <p>Your browser does not support PDFs. <a href="${cert.pdf}">Download the PDF</a></p>
                            </object>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        modalsContainer.innerHTML += modalHTML;
    });

    // Portfolio button scroll animation
    const backButton = document.querySelector('.back-button .btn');

    window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
            backButton.innerHTML = '<i class="fa-solid fa-user"></i>&nbsp; Portfolio';
        } else {
            backButton.innerHTML = '<i class="fa-solid fa-user"></i>';
        }
    });

    // Sorting functionality
    let originalOrder = Array.from(container.getElementsByClassName('certificate-card'));
    let currentSortingType = null;

    window.toggleSort = function(button) {
        const certificates = Array.from(container.getElementsByClassName('certificate-card'));
        const type = button.getAttribute('data-type');

        if (currentSortingType) {
            resetSorting();
            document.querySelector(`button[data-type="${currentSortingType}"]`).classList.remove('active');
        }

        if (currentSortingType !== type) {
            certificates.sort((a, b) => {
                if (type === 'date') {
                    const dateA = new Date(a.getAttribute('data-date').split('-').reverse().join('-'));
                    const dateB = new Date(b.getAttribute('data-date').split('-').reverse().join('-'));
                    return dateB - dateA;
                } else if (type === 'alphabetical') {
                    return a.getAttribute('data-title').localeCompare(b.getAttribute('data-title'));
                }
            });

            certificates.forEach(cert => container.appendChild(cert));
            button.classList.add('active');
            currentSortingType = type;
        } else {
            currentSortingType = null;
        }
    };

    function resetSorting() {
        originalOrder.forEach(cert => container.appendChild(cert));
    }

    // Search functionality
    document.querySelector('.search-input').addEventListener('keyup', function() {
        var searchType = document.querySelector('.search-category').value;
        var searchValue = this.value.toLowerCase();
        var certificates = document.querySelectorAll('.certificate-card');
        var noResultsMessage = document.getElementById('no-results');
        var searchQueryElement = document.getElementById('search-query');

        var resultsFound = false;

        certificates.forEach(function(card) {
            var text = card.dataset[searchType].toLowerCase();
            if (text.includes(searchValue)) {
                card.style.display = "block";
                resultsFound = true;
            } else {
                card.style.display = "none";
            }
        });

        if (resultsFound) {
            noResultsMessage.style.display = "none";
        } else {
            searchQueryElement.textContent = searchValue;
            noResultsMessage.style.display = "block";
        }
    });

    // Check for night mode on page load
    var isNightMode = localStorage.getItem("isNightMode") === "true";

    if (isNightMode) {
        document.body.classList.add("night-mode");
    }
});
