// Появление частей сайта
const allSections = document.querySelectorAll('.section__hidden');
const appearanceSection = function (entries, observer) {
    const entry = entries[0];
    // console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section__hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
    root: null,
    threshold: 0.2,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section__hidden');
});


const lazyImages = document.querySelectorAll('img[data-src]');
const loadImages = function (entries, observer) {
    const entry = entries[0];
    console.log(entry);
    if (!entry.isIntersecting) return;

    // Меняем изображение на изображение с высоким разрешением
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
};
const lazyImagesObserver = new IntersectionObserver(loadImages, {
    root: null,
    threshold: 0.2,
    // rootMargin: '10px',
});
lazyImages.forEach(image => lazyImagesObserver.observe(image));

