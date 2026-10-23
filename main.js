document.querySelectorAll('nav a, .button').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Exploring the world of Attack on Titan!');
  });
});

console.log('AOT website loaded successfully!');