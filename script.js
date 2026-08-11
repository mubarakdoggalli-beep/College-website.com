```javascript
/* ========================================
   COLLEGE WEBSITE - MAIN JAVASCRIPT
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Current Year ---------- */

    const yearElements = document.querySelectorAll(".current-year");

    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });


    /* ---------- Active Navigation ---------- */

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        const linkPage = link
            .getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    /* ---------- Scroll To Top Button ---------- */

    const scrollButton = document.createElement("button");

    scrollButton.innerHTML = "↑";
    scrollButton.className = "scroll-top";
    scrollButton.title = "Go to top";

    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }

    });

    scrollButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ---------- Contact Form ---------- */

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Thank you for contacting us! " +
                "We will get back to you soon."
            );

            contactForm.reset();

        });

    }


    /* ---------- Admission Form ---------- */

    const admissionForm = document.querySelector("#admissionForm");

    if (admissionForm) {

        admissionForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert(
                "Your admission enquiry has been submitted successfully!"
            );

            admissionForm.reset();

        });

    }


    /* ---------- Newsletter Form ---------- */

    const newsletterForm =
        document.querySelector("#newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput =
                newsletterForm.querySelector("input[type='email']");

            if (emailInput.value.trim() === "") {

                alert("Please enter your email address.");

                return;
            }

            alert(
                "Thank you for subscribing to our updates!"
            );

            newsletterForm.reset();

        });

    }

});
```
