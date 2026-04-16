document.addEventListener('DOMContentLoaded', () => {
    // Special Intersection Observer for index.html circular progress bar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const circleObserver = new IntersectionObserver((entries, observerHandle) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circleAnim = entry.target.querySelector('#circle-anim');
                if (circleAnim) {
                    setTimeout(() => {
                        // 276 is the total circumference, 74 is the target offset (73%)
                        circleAnim.style.strokeDashoffset = '74';
                    }, 400); // Wait for the element to reveal first
                }
                observerHandle.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Specifically observe the container of the circle
    const statCards = document.querySelectorAll('.hover-card');
    statCards.forEach(card => {
        if (card.querySelector('#circle-anim')) {
            circleObserver.observe(card);
        }
    });
});
