// Run this in browser console to fix last slide
let d = JSON.parse(localStorage.getItem('soul2sole-deck-v2'));
if (d) {
  d[d.length-1] = {
    photo: 'photo2.png',
    blocks: [
      {type:'heading', text:'Hear It'},
      {type:'button', text:'▶ Play the Sampler', url:'https://materiaaurelia.github.io/james-sampler/'},
      {type:'contact', text:'<a href="tel:+17802576428">780-257-6428</a><br><a href="mailto:earthharmonysoundhealing@gmail.com">earthharmonysoundhealing@gmail.com</a>'}
    ]
  };
  localStorage.setItem('soul2sole-deck-v2', JSON.stringify(d));
  console.log('Fixed! Reload the page.');
} else {
  console.log('No saved data found — just reload and defaults will load.');
}
