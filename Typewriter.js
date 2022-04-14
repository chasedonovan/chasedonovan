
var app = document.getElementById('app');

// var typewriter = new Typewriter(app, {
//   autoStart: true,
//   loop: true,
// });

const instance = new Typewriter('#app', {
  loop: true
});

instance
.typeString('<span style="color: white; font-size: 60px">@chasedonovan</span><br/>')
.pauseFor(500)
.typeString("Hello, World!")
.pauseFor(250)
.deleteChars(13)
.typeString("I am Chase.")
.pauseFor(500)
.deleteChars(1)
.typeString(", an aspiring <strong>fullstack</strong> web developer")
.pauseFor(300)
.typeString('<br /> Check out my pinned repositories!')
.pauseFor(5000)
.start();