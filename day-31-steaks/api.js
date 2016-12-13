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



(function() {

  var theSteak = document.querySelector('.levels');

  var promise = $.ajax({
    url:'http://localhost:5008/api/steak'
  })

  promise.done(function(data) {
    console.log('data back', data);

    for (var i = 0; i < levels.name.description.imageURL.length; i++) {
      var levels = name.description.imageUrl[i];
      console.log('levels', steak);

      var li = document.createElement('li');

      var anchor = document.createElement('a');
      anchor.textContent = name.description.imageURL;
      anchor.href = name.steak_url;
      li.appendChild(anchor);
      //li.textContent = user.login;

      var img = document.createElement('img');
      img.src = name.steak_url;
      li.appendChild(img);

      thesteak.appendChild(li);
    }
