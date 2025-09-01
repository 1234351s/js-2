// Робимо IntersectionObserver
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;

      // + клас для анімації
      img.onload = () => {
        img.classList.add('loaded');
      };

      // - спостереження
      obs.unobserve(img);
    }
  });
}, {
  threshold: 0.1
});

// пишимо  всі зображення з data-src
const lazyImages = document.querySelectorAll('img.lazy');
lazyImages.forEach(img => observer.observe(img));

//  завантаження при натисканні кнопки
document.getElementById('loadImages').addEventListener('click', () => {
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.onload = () => img.classList.add('loaded');
    observer.unobserve(img);
  });
});

/*
  
  IntersectionObserver дозволяє відстежувати коли зображення потрапляє в область видимості
   'loaded' додається після завантаження, щоб плавно показати зображення
  Кнопка дозволяє вручну ініціювати завантаження всіх зображень

*/
