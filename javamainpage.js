      

        /* ----------------------------------------------------
           2. Background Hypno Spiral FX Toggle
           ---------------------------------------------------- */
		   
        let hypnoActive = true;
        function toggleHypnoSwirl() {
            hypnoActive = !hypnoActive;
            const bg = document.getElementById('hypnoBg');
            bg.style.opacity = hypnoActive ? '0.16' : '0';
            document.getElementById('hypnoStatus').innerText = hypnoActive ? 'ON' : 'OFF';
            document.getElementById('hypnoStatus').style.color = hypnoActive ? 'var(--mint-green)' : '#ff0055';
            playBeep(400, 'triangle', 0.1);
        }

        /* ----------------------------------------------------
           3. Interactive Pet Card Handlers & Floating Hearts
           ---------------------------------------------------- */
		   
        function spawnPopHeart(e, text = '💖') {
            const heart = document.createElement('div');
            heart.className = 'pop-heart';
            heart.innerText = text;
            heart.style.left = ((e.clientX || window.innerWidth / 2) - 10) + 'px';
            heart.style.top = ((e.clientY || window.innerHeight / 2) - 20) + 'px';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }

        function patBilbo(e) {
            playBarkSFX();
            spawnPopHeart(e, '🐶💖');
        }

        function playLaserPointer(e) {
            playMeowSFX();
            spawnPopHeart(e, '🔴✨');
        }

        function giveTuna(e) {
            playMeowSFX();
            spawnPopHeart(e, '🐟🖤');
        }

        function lightCandle(e) {
            playBeep(880, 'sine', 0.25);
            spawnPopHeart(e, '🕯️✨');
            const icon = document.getElementById('candleIcon');
            icon.classList.toggle('flame-active');
        }

        function triggerBatBurst(e) {
            playArpeggioSFX();
            spawnPopHeart(e, '🦇');
        }

        function triggerStartMenu(e) {
            playArpeggioSFX();
            spawnPopHeart(e, '🩸');
        }


        /* ----------------------------------------------------
           5. Taskbar Live Digital Clock
           ---------------------------------------------------- */
        function updateClock() {
            const now = new Date();
            document.getElementById('clockDisplay').innerText = now.toLocaleTimeString();
        }
        setInterval(updateClock, 1000);
        updateClock(); 
