// Add confetti effect when the button is clicked
const confettiButton = document.getElementById('confettiButton');

confettiButton.addEventListener('click', () => {
  // Use a confetti library (e.g., https://www.kirilv.com/canvas-confetti/)
  var end = Date.now() + (15 * 1000);

  // go Buckeyes!
  var colors = ['#bb0000', '#ffffff'];
  
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
  
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
});