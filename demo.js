/* //console.dir(document);

console.log(document.title)

//document.title = 123

console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.all[18]);
console.log(document.forms); */

//GETELEMENTBYID
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
/* console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Morning';
headerTitle.innerText = 'Hello';
headerTitle.innerHTML = 'Heyy'; */

header.style.borderBottom = 'solid 3px #000';

//GETELEMENTBYCLASSNAME
var items = document.getElementsByClassName('title');
console.log(items);
console.log(items[0]);
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';