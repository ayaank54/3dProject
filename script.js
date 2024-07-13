document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    const cars = document.querySelectorAll('.car');
    const buildings = document.querySelectorAll('.building');

    // Parallax effect
    scene.addEventListener('mousemove', (e) => {
        const depth = 5;
        const moveX = (e.clientX - window.innerWidth / 2) / depth;
        const moveY = (e.clientY - window.innerHeight / 2) / depth;
        
        scene.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // Random car movement
    cars.forEach(car => {
        setInterval(() => {
            const randomLane = Math.floor(Math.random() * 3) + 1;
            car.style.left = `${randomLane * 25}%`;
        }, 8000);
    });

    // Building lights
    buildings.forEach(building => {
        setInterval(() => {
            const windows = building.querySelectorAll('.window');
            windows.forEach(window => {
                window.style.backgroundColor = Math.random() > 0.5 ? '#ffff99' : '#333';
            });
        }, 1000);
    });

    // Add new cars periodically
    setInterval(() => {
        const newCar = document.createElement('div');
        newCar.className = 'car';
        newCar.style.backgroundColor = getRandomColor();
        newCar.style.left = `${Math.random() * 80 + 10}%`;
        scene.appendChild(newCar);

        // Remove car after animation
        setTimeout(() => {
            newCar.remove();
        }, 8000);
    }, 4000);

    function getRandomColor() {
        return `hsl(${Math.random() * 360}, 80%, 60%)`;
    }

    // Create windows for buildings
    buildings.forEach(building => {
        const windowCount = Math.floor(Math.random() * 20) + 10;
        for (let i = 0; i < windowCount; i++) {
            const window = document.createElement('div');
            window.className = 'window';
            window.style.width = '10%';
            window.style.height = '5%';
            window.style.position = 'absolute';
            window.style.backgroundColor = Math.random() > 0.5 ? '#ffff99' : '#333';
            window.style.left = `${Math.random() * 80 + 10}%`;
            window.style.top = `${Math.random() * 90 + 5}%`;
            building.appendChild(window);
        }
    });
});