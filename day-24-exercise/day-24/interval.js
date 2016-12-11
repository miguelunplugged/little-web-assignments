



/*var intervalStopped = document.querySelector('.interval-stopped');
var toggleMeDiv = document.querySelector('#toggle-me');

setInterval(function() {
  toggleMeDiv.classList.toggle('hide');
}, 400);*/
var monster = document.querySelector('.monster');

var position = 1;
var


setInterval(function() {

  switch (position) {
    case 1:
      console.log('position 1';
      monster.classList.remove('position 2');
      monster.classList.add('position 1');
          break;
    case 2:
        console.log('position 2';
        monster.classList.remove('position 1');
        monster.classList.remove('position 3');
        monster.classList.add('position 2');
          break;
    case 3:
        console.log('position 3';
        monster.classList.remove('position 2');
        monster.classList.add('position 3');
          break;

  }
  if (direction ==='rigth') {
    position += 1;
  }
  else {
    
  }





}, 3000);
