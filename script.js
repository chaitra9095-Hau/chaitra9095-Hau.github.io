// ========================================
// CURSOR FOLLOWING GLOW
// ========================================

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(event) {

    cursorGlow.style.left = event.clientX + "px";

    cursorGlow.style.top = event.clientY + "px";

});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                const currentSection = entry.target.id;


                navLinks.forEach(function(link) {

                    link.classList.remove("active");


                    if (
                        link.getAttribute("href")
                        === "#" + currentSection
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        threshold: 0.35
    }

);


sections.forEach(function(section) {

    observer.observe(section);

});