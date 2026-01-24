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
        description: 'Bridges the gap between fans and celebrities, offering unique video and voice call experiences. Connect directly with your favorite stars, enjoy personalized interactions, and create memorable moments through our easy-to-use platform.',
        role: 'Full Stack Developer',
        technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Socket.io', 'JWT Authentication', 'Payment Gateway'],
        features: [
            'User-friendly admin panel connecting fans with celebrities',
            'Personalized interaction features',
            'Video and voice call scheduling system',
            'User management and analytics dashboard',
            'Secure payment processing',
            'Real-time notification system'
        ],
        responsibilities: [
            'Created the complete admin panel in React.js',
            'Implemented personalized interaction features',
            'Managed user experience effectively',
            'Integrated real-time communication',
            'Developed secure authentication system',
            'Optimized performance and scalability'
        ]
    },
    'heaven-celebrations': {
        title: 'Heaven Celebrations Admin Panel',
        description: 'Lets you book customized theater spaces by the hour for any occasion. Tailor your event experience with personalized setups and amenities, ensuring a unique and memorable celebration.',
        role: 'React.js Developer',
        technologies: ['React.js', 'REST API', 'Booking System', 'Calendar Integration', 'Payment Processing'],
        features: [
            'Theater space booking by the hour',
            'Customizable event setups',
            'Amenity management system',
            'Booking calendar and scheduling',
            'Payment integration',
            'Admin dashboard for venue management'
        ],
        responsibilities: [
            'Designed and developed admin panel using React.js',
            'Integrated booking management features',
            'Implemented setup customization options',
            'Added event amenity handling',
            'Created responsive admin interface',
            'Ensured smooth user experience'
        ]
    },
    'foarchs-admin': {
        title: 'FoArchs Admin Panel',
        description: 'A versatile social platform designed to connect professionals, foster growth, and create opportunities. Whether you\'re seeking jobs, generating leads, or sharing posts, foArchs provides a dynamic space for networking and career advancement.',
        role: 'Full Stack Developer',
        technologies: ['React.js', 'MongoDB', 'Express.js', 'Socket.io', 'Real-time Updates', 'Scalable Architecture'],
        features: [
            'Professional networking platform',
            'Job searching and posting system',
            'Lead generation features',
            'Post sharing and content management',
            'Real-time notifications',
            'User profile and connection management'
        ],
        responsibilities: [
            'Built versatile social platform in React.js',
            'Implemented job searching and lead generation',
            'Added post sharing functionality',
            'Optimized for performance and scalability',
            'Created real-time features',
            'Ensured platform security'
        ]
    },
    'androbim-courses': {
        title: 'Androbim Courses Website',
        description: 'Developed an educational platform using React.js, offering courses in various technologies. The platform includes course management, user registration, and interactive learning features.',
        role: 'Frontend Developer',
        technologies: ['React.js', 'Learning Management', 'User Registration', 'Course System', 'Interactive Features'],
        features: [
            'Educational platform for technology courses',
            'Course management system',
            'User registration and authentication',
            'Interactive learning modules',
            'Progress tracking',
            'Certificate generation'
        ],
        responsibilities: [
            'Developed educational platform using React.js',
            'Implemented course management features',
            'Added user registration system',
            'Created interactive learning features',
            'Designed responsive course interfaces',
            'Integrated progress tracking'
        ]
    },
    'jungly-matka-admin': {
        title: 'Jungly Matka Admin Panel',
        description: 'Designed and developed the admin panel for Jungly Matka, a betting app, allowing administrators to efficiently manage users, monitor betting activities, and oversee app operations.',
        role: 'React.js Developer',
        technologies: ['React.js', 'Admin Dashboard', 'User Management', 'Transaction Monitoring', 'Security', 'Real-time Updates'],
        features: [
            'Betting app administration',
            'User management system',
            'Betting activity monitoring',
            'Transaction tracking',
            'App operation oversight',
            'Real-time dashboard updates'
        ],
        responsibilities: [
            'Designed and developed admin panel',
            'Created user management features',
            'Implemented betting activity monitoring',
            'Added transaction oversight system',
            'Ensured intuitive navigation',
            'Built robust functionality for seamless management'
        ]
    },
    'quiz-app': {
        title: 'Quiz App Admin Panel',
        description: 'Developed an admin panel in React.js for managing quizzes, with features for creating, updating, and analyzing quiz results.',
        role: 'React.js Developer',
        technologies: ['React.js', 'Quiz Management', 'Analytics', 'Question Bank', 'Result Analysis'],
        features: [
            'Quiz creation and management',
            'Question bank system',
            'Result analysis dashboard',
            'Performance analytics',
            'User response tracking',
            'Quiz scheduling'
        ],
        responsibilities: [
            'Developed admin panel in React.js',
            'Implemented quiz creation features',
            'Added quiz updating capabilities',
            'Created result analysis system',
            'Built analytics dashboard',
            'Ensured smooth quiz management'
        ]
    },
    'news-app': {
        title: 'News App Admin Panel',
        description: 'Built an admin panel using React.js for managing news articles, including real-time updates, category management, and user interactions.',
        role: 'React.js Developer',
        technologies: ['React.js', 'News Management', 'Real-time Updates', 'Category System', 'Content Management'],
        features: [
            'News article management',
            'Real-time updates system',
            'Category and tag management',
            'User interaction tracking',
            'Content scheduling',
            'Analytics dashboard'
        ],
        responsibilities: [
            'Built admin panel using React.js',
            'Implemented news article management',
            'Added real-time update features',
            'Created category management system',
            'Integrated user interaction features',
            'Developed content scheduling'
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
                <p><strong>My Role:</strong> ${project.role}</p>
                
                <h4>Technologies Used:</h4>
                <div class="project-tech" style="margin: 1rem 0 2rem;">
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

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});