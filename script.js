new TypeIt("#typeit", {
    speed: 75,
  })
    .type("I create btter", {delay: 300})
    .move(-4)
    .type('e')
    .move('END')
    .type(' experiences for users')
    .pause(300)
    .delete(-5)
    .type('people.')
    .go();

// new TypeIt("#typeitAbout", {
//     strings: "A little bit about me...",
//     speed: 50,
//     waitUntilVisible: true
//     }).go();
