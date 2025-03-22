document.addEventListener("DOMContentLoaded", () => {
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in website design and development.',
            technology: ['HTML', 'CSS'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects.',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];

    const filterContainer = document.querySelector(".course-list");
    const allLink = document.querySelector("#all");
    const cseLink = document.querySelector("#cse");
    const wddLink = document.querySelector("#wdd");

    // Ensure buttons exist before adding event listeners
    if (allLink) {
        allLink.addEventListener("click", () => showCourseCard(courses));
    }

    if (cseLink) {
        cseLink.addEventListener("click", () => showCourseCard(courses.filter(course => course.subject === 'CSE')));
    }

    if (wddLink) {
        wddLink.addEventListener("click", () => showCourseCard(courses.filter(course => course.subject === 'WDD')));
    }

    function showCourseCard(filteredCourses) {
        if (!filterContainer) return; // Ensure the container exists

        filterContainer.innerHTML = ""; // Clear previous results

        filteredCourses.forEach(course => {
            let card = document.createElement("section");
            let subject = document.createElement("p");
            let number = document.createElement("p");
            let title = document.createElement("p");
            let credits = document.createElement("p");
            let certificate = document.createElement("p");
            let description = document.createElement("p");
            let technology = document.createElement("p");

            subject.textContent = `${course.subject} ${course.number}`;
            //number.innerHTML = `<span class="label">Number: </span> ${course.number}`;
            //title.innerHTML = `<span class="label">Title: </span> ${course.title}`;
            //credits.innerHTML = `<span class="label">Credits: </span> ${course.credits}`;
            //certificate.innerHTML = `<span class="label">Certificate: </span> ${course.certificate}`;
            //description.innerHTML = `<span class="label">Description: </span> ${course.description}`;
            //technology.innerHTML = `<span class="label">Technology: </span> ${course.technology.join(', ')}`;

            card.appendChild(subject);
            //card.appendChild(number);
            //card.appendChild(title);
            //card.appendChild(credits);
            //card.appendChild(certificate);
            //card.appendChild(description);
            //card.appendChild(technology);

            filterContainer.appendChild(card);
        });
    }

    // Show all courses on initial page load
    showCourseCard(courses);
});
