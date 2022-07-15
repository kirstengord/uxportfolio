new TypeIt("#typeit", {
    speed: 80,
  })
    .type("I create btter", {delay: 500})
    .move(-4)
    .type('e')
    .move('END')
    .type(' experiences for users')
    .pause(400)
    .delete(-5)
    .type('people.')
    .go();

 

// new TypeIt("#typeitAbout", {
//     strings: "A little bit about me...",
//     speed: 50,
//     waitUntilVisible: true
//     }).go();

var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})