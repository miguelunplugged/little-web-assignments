var clickMeButton = document.querySelector ('#click-me');

console.log(clickMeButton);

clickMeButton.addEventListener('click', function() {
  console.log( 'lol, an event listener');
});


clickMeButton.addEventListener('click');
