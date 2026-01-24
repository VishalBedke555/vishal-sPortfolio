// Theme switching functionality
document.addEventListener('DOMContentLoaded', function () {
    const colorDots = document.querySelectorAll('.color-dot');
    const html = document.documentElement;

    colorDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            html.setAttribute('data-theme', theme);

            // Update active dot
            colorDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // Update localStorage
            localStorage.setItem('portfolio-theme', theme);
        });
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'green';
    html.setAttribute('data-theme', savedTheme);

    // Set active dot based on saved theme
    const activeDot = document.querySelector(`.color-dot[data-theme="${savedTheme}"]`);
    if (activeDot) {
        colorDots.forEach(d => d.classList.remove('active'));
        activeDot.classList.add('active');
    }

    // Visit counter
    if (!localStorage.getItem('visits')) {
        localStorage.setItem('visits', 1);
    } else {
        let count = parseInt(localStorage.getItem('visits'));
        count += 1;
        localStorage.setItem('visits', count);
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation on scroll
    window.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Theme toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function () {
        const themes = ['green', 'blue', 'purple', 'orange'];
        const currentTheme = html.getAttribute('data-theme');
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];

        html.setAttribute('data-theme', nextTheme);
        localStorage.setItem('portfolio-theme', nextTheme);

        // Update active dot
        colorDots.forEach(d => d.classList.remove('active'));
        const nextDot = document.querySelector(`.color-dot[data-theme="${nextTheme}"]`);
        if (nextDot) nextDot.classList.add('active');
    });
});

function handleNavigate() {
    window.location.href = "./public/Projects.html";
}

// Project details data
const projectDetails = {
    'vlog-call': {
        title: 'Vlog Call Admin Panel',
        description: 'A comprehensive admin panel designed to bridge the gap between fans and celebrities through unique video and voice call experiences.',
        role: 'Full Stack Developer',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT Authentication'],
        features: [
            'Real-time video/voice call scheduling',
            'Celebrity and fan user management',
            'Payment integration for call bookings',
            'Admin dashboard with analytics',
            'Secure authentication system',
            'Responsive admin interface'
        ],
        responsibilities: [
            'Designed and developed the complete admin panel architecture',
            'Implemented real-time communication features',
            'Integrated payment gateway for transactions',
            'Created user management and analytics dashboard',
            'Ensured security and scalability of the platform'
        ]
    }
};

function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    title.textContent = project.title;

    body.innerHTML = `
            <div class="modal-project-details">
                <p><strong>Description:</strong> ${project.description}</p>
                <p><strong>Role:</strong> ${project.role}</p>
                
                <h4>Technologies Used:</h4>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                
                <h4>Key Features:</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <h4>My Responsibilities:</h4>
                <ul>
                    ${project.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
            </div>
        `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('projectModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});