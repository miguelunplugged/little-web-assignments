























































var section = document.querySelector('#put-stuff-here');


vae str = '<p>Boom! Subparagraph</p><ul>';

var people = ['Bob', 'Sue', 'Joan', 'Bucephalus'];

for (var i = 0; i < people.length, i++ {
  str +='<li>' + people[i] + '</li>';
}

str += '</ul>';

section.innerHTML = str;
console.log(section);


  //Add some new DOM element tothe page
  //Add stuff to it with innerHTML
