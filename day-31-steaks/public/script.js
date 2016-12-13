console.log('script file hooked up!');

(function() {

  var theList = document.querySelector('.steak-list');

  var promise = $.ajax({
    url: 'http://localhost:5008/api/steak'
  });

  promise.done(function(data){
    console.log('data back!', data);

    for (var i = 0; i < data.levels.length; i++) {
      var kinds = data.levels[i];
      var li = document.createElement('li');

      li.textContent = kinds.name;
      theList.appendChild(li);

      var describe = document.createElement('p');
      describe.textContent = kinds.description;
      li.appendChild(describe);
      theList.appendChild(li);

      var img = document.createElement('img');
      img.src = kinds.imageUrl;
      li.appendChild(img);
      theList.appendChild(li);
    }
  });
}());
