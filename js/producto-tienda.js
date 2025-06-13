    const thumbs = document.querySelectorAll('.imgs img');
    const mainImg = document.querySelector('.main-img');
    const originalSrc = mainImg.src;

    thumbs.forEach(img => {
        img.addEventListener('mouseover', () => {
            mainImg.src = img.src;
        });

        img.addEventListener('mouseout', () => {
            mainImg.src = originalSrc;
        });
    });