/* Photo Slideshow */
const slides = [
    { src: "images_index/columbus1.jpg", alt: "A scenic view of Columbus, Ohio" },
    { src: "images_index/columbus2.jpg", alt: "Downtown Columbus skyline" },
    { src: "images_index/columbus3.jpg", alt: "The Scioto Mile in Columbus" },
    { src: "images_index/columbus4.jpg", alt: "Short North Arts District in Columbus" },
    { src: "images_index/columbus5.jpg", alt: "Ohio Statehouse in Columbus" },
    { src: "images_index/columbus6.jpg", alt: "Easton Town Center in Columbus" },
    { src: "images_index/columbus7.jpg", alt: "Polaris Fashion Place in Columbus" },
    { src: "images_index/columbus8.jpg", alt: "The Clitonville Neighborhood in Columbus" },
    { src: "images_index/columbus9.jpg", alt: "German Village in Columbus" },
    { src: "images_index/columbus10.jpg", alt: "John Glenn International Airport in Columbus" },
    { src: "images_index/columbus11.jpg", alt: "The Ohio State University in Columbus" },
    { src: "images_index/columbus12.jpg", alt: "The Nationwide Arena in Columbus" },
    { src: "images_index/columbus13.jpg", alt: "The Columbus Crew Stadium in Columbus" },
    { src: "images_index/columbus14.jpg", alt: "The Columbus Art Museum in Columbus" },
    { src: "images_index/columbus145.jpg", alt: "The Columbus Commons" },
];

let currentSlide = 0;
let autoRotate;

const slideshowImg = document.getElementById("slideshow-img");
const slideCounter = document.getElementById("slide-counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateSlide() {
    slideshowImg.src = slides[currentSlide].src;
    slideshowImg.alt = slides[currentSlide].alt;
    slideCounter.textContent = "Photo " + (currentSlide + 1) + " of " + slides.length;
}

function goNext() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
}

function goPrev() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
}

function resetAutoRotate() {
    clearInterval(autoRotate);
    autoRotate = setInterval(goNext, 4000);
}

nextBtn.addEventListener("click", function () {
    goNext();
    resetAutoRotate();
});

prevBtn.addEventListener("click", function () {
    goPrev();
    resetAutoRotate();
});

// Initialize slideshow
updateSlide();
autoRotate = setInterval(goNext, 4000);


// Form Validation
const form = document.getElementById("subscription-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formSuccess = document.getElementById("form-success");

function setError(input, hasError) {
    if (hasError) {
        input.style.borderColor = "var(--scarlet-light)";
        input.style.backgroundColor = "#2a1010";
    } else {
        input.style.borderColor = "#444";
        input.style.backgroundColor = "#222";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Validate name
    if (nameInput.value.trim() === "") {
        setError(nameInput, true);
        valid = false;
    } else {
        setError(nameInput, false);
    }

    // Validate email
    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        setError(emailInput, true);
        valid = false;
    } else {
        setError(emailInput, false);
    }

    // Validate frequency radio
    const frequencySelected = document.querySelector("input[name='frequency']:checked");
    const frequencyFieldset = document.querySelector("fieldset:nth-of-type(2)");
    if (!frequencySelected) {
        frequencyFieldset.style.borderColor = "var(--scarlet-light)";
        valid = false;
    } else {
        frequencyFieldset.style.borderColor = "#444";
    }

    // If all valid, show success message
    if (valid) {
        form.style.display = "none";
        formSuccess.style.display = "block";
    }
});

// Clear error highlight on input
nameInput.addEventListener("input", function () {
    setError(nameInput, false);
});

emailInput.addEventListener("input", function () {
    setError(emailInput, false);
});


// Scroll to top to bottom
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.id = "scroll-top-btn";
scrollBtn.setAttribute("aria-label", "Scroll to top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});