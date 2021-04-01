new TypeIt("#typeit", {
    speed: 75,
    waitUntilVisible: true
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