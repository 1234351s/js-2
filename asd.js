 const slider = document.querySelector('.slider__input');
  const image = document.querySelector('.slider__image');

  const resizeImage = _.debounce((value) => {
    image.style.width = `${value * 3}px`;
    image.style.height = `${value * 3}px`;
  }, 100);

  slider.addEventListener('input', (e) => {
    resizeImage(e.target.value);
  });
   const box = document.getElementById('box');

  const moveBox = _.debounce((x, y) => {
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  }, 100);

  document.addEventListener('mousemove', (e) => {
    moveBox(e.clientX, e.clientY);
  });