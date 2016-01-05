function sizeSections() {
  var windowHeight = window.innerHeight;
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.minHeight = windowHeight + "px";
  }
}

sizeSections();

window.addEventListener('resize', function(){
    sizeSections();
}, true);

/*
This function saves the inner height of the  browser window property.
You can then use it to set the min-height of any HTML element.
*/
