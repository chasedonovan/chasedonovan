
var app = document.getElementById('typewriter');

// var typewriter = new Typewriter(app, {
//   autoStart: true,
//   loop: true,
// });

const instance = new Typewriter('#typewriter', {
  loop: true,
  delay: 100,
  deleteSpeed: 10
});

instance
.typeString('<span style="color: white; font-size: 60px">@chasedonovan</span><br/>')
.pauseFor(500)
.typeString("Hello, World!")
.pauseFor(250)
.deleteChars(13)
.typeString("I'm Chase!")
.pauseFor(500)
.deleteChars(1)
.typeString(", an aspiring fullstack web developer")
.pauseFor(300)
.changeDeleteSpeed(10)
.deleteChars(46)
.typeString('Check out my pinned repos!')
.pauseFor(5000)
.start();