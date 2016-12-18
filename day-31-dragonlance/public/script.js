console.log('write code here!');


(function() {
  var theList = document.querySelector('.dragon-list');

  var promise = $.ajax({
    url: 'http://localhost:5003/api/dragonlance'
  })

  promise.done(function(data){
    console.log('data back!', data);

    for (var i = 0; i < data.characters.length; i++) {
      var people = data.characters[i];
      var li = document.createElement('li');

      li.textContent = people.name;
      theList.appendChild(li);

      var breed = document.createElement('p');
      breed.textContent = people.race;
      li.appendChild(breed);
      theList.appendChild(li);

      var describe = document.createElement('p');
      describe.textContent = people.description;
      li.appendChild(describe);
      theList.appendChild(li);
    }
  });
}());
