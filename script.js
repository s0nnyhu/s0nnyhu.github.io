document.addEventListener('DOMContentLoaded', () => {
    // Fireflies Effect
    const canvas = document.getElementById('fireflies-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1; // Slow velocity
            this.vy = (Math.random() - 0.5) * 1;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(0, 0, 0, ${Math.random() * 0.4 + 0.4})`; // Darker black
        }

        update(mouseX, mouseY) {
            this.x += this.vx;
            this.y += this.vy;

            // Mouse interaction (repel)
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * 2; // Repel strength
                const directionY = forceDirectionY * force * 2;

                this.x -= directionX;
                this.y -= directionY;
            }

            // Wrap around screen
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(0,0,0,0.5)"; // Stronger dark glow
            ctx.fill();
            ctx.closePath();
            ctx.shadowBlur = 0; // Reset shadow for performance
        }
    }

    function initParticles() {
        particles = [];
        const numberOfParticles = Math.floor((width * height) / 15000); // Density
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle());
        }
    }

    initParticles();

    let mouseX = -1000;
    let mouseY = -1000;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update(mouseX, mouseY);
            p.draw();
        });
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
});
