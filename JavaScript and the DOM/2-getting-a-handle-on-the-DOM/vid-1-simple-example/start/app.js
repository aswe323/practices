//creating a reference tto the headig element in the html file ()
const myHeading = document.getElementById('myHeading');


//adding and event listener, and making it do somthing with a function
myHeading.addEventListener('click', () => myHeading.style.color = 'red');
