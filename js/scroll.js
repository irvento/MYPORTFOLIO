function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function() {
            const cursorContainer = document.querySelector('.cursor-container');

            document.addEventListener('mousemove', function(e) {
                createCursor(e.clientX, e.clientY);
            });

            function createCursor(x, y) {
                const cursor = document.createElement('div');
                cursor.className = 'cursor';
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
                cursorContainer.innerHTML = '';
                cursorContainer.appendChild(cursor);

                createTrail(-2.4 + x, -2.4 + y);
            }

            function createTrail(x, y) {
                const trail = document.createElement('div');
                trail.className = 'trail';
                trail.style.left = x + 'px';
                trail.style.top = y + 'px';
                cursorContainer.appendChild(trail);
            }
            
        });