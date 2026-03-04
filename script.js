document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger immediately on load

    // 2. Fixed CTA Bar visibility
    const fixedBar = document.querySelector('.fixed-bar');
    const heroSection = document.querySelector('.hero');

    const toggleFixedBar = () => {
        // Show bar after scrolling past 50% of the hero section
        if (window.scrollY > heroSection.offsetHeight * 0.5) {
            fixedBar.classList.add('visible');
        } else {
            fixedBar.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleFixedBar);

    // 3. Countdown Timer Logic
    const countdownDate = new Date("March 25, 2026 08:00:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            document.getElementById("timer-mini").innerHTML = "EVENTO INICIADO";
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("mins").innerHTML = "00";
            document.getElementById("secs").innerHTML = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update Mini Timer in Fixed Bar
        const formattedMini = `${days.toString().padStart(2, '0')}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
        document.getElementById("timer-mini").innerText = formattedMini;

        // Update Large Timer in Footer
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("secs").innerText = seconds.toString().padStart(2, '0');
    };

    setInterval(updateTimer, 1000);
    updateTimer(); // Initial call
});
