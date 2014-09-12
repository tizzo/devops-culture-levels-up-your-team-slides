var deck = bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: 'li, .bullet',
  scale: true,
  hash: true,
  //state: true,
  fx: false,
});

bespoke.from('article', {
  bullets: 'li, .bullet'
});

deck.on('activate', function(event) {
  $video = $('video', event.slide);
  if ($video[0]) {
    $video[0].play();
  }
});
deck.on('deactivate', function(event) {
  $video = $('video', event.slide);
  if ($video[0]) {
    $video[0].pause();
    $video[0].currentTime = 0;
  }
});

// $(this).bind("contextmenu", function(e) {
//     e.preventDefault();
//     deck.prev();
// });

$('body').mousedown(function(event) {
  console.log(event.which);
  switch (event.which) {
    case 1:
      deck.prev();
      break;
    case 2:
      deck.next();
      break;
  }
});


/*
bespoke.vertical.from('article', {
  fx: {
    direction: "vertical",
    transition: "cube",
    reverse: true,
  },
});
*/
