export const View = () => [
  h2('Privacy notice'),

  h3('No spying'),
  p('We promise to never analyze, track, or sell any data about you.'),
  p('We will also never save any data without asking explicitly.'),

  h3('Local data'),
  p([
    'All browser features that collect sensitive data',
    ' (device orientation, 3d-map of your surroundings, camera video streams, geolocation)',
    ' DO NOT and NEVER WILL transmit this data to our servers.',
  ]),

  h3('Session storage'),
  p([
    'We save some data in your browser (your last gps location, and the state of some popups).',
    'This information gets deleted as soon as you close the browser tab.',
  ]),
]