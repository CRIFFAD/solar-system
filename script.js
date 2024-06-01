// Get all planet elements
const planets = document.querySelectorAll('.planet');

// Start the animation for each planet
planets.forEach(planet => {
  planet.style.animationPlayState = 'running';
});