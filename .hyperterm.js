module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"SF Mono", monospace',

    // terminal cursor background color (hex)
    cursorColor: '#AAAAAA',

    // color of the text
    foregroundColor: '#FFFFFF',

    // terminal background color
    backgroundColor: '#323232',

    // border color (window, tabs)
    borderColor: '#3F3F3F',

    // custom css to embed in the main window
    css: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    termCSS: 'x-screen { font-weight:600; }',

    // custom padding
    padding: '6px 13px',

    // login shell
    shell: '/bin/bash',

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: [
      '#000000', //black
      '#E12C4D', //red
      '#88DD50', //green
      '#FDD62D', //yellow
      '#1050AC', //blue
      '#9E60AD', //pink
      '#4197B3', //cyan
      '#FFFFFF', //light gray
      '#FFFFFF', //medium gray
      '#E12C4D', //red
      '#88DD50', //green
      '#FDD62D', //yellow
      '#1050AC', //blue
      '#9E60AD', //pink
      '#4197B3', //cyan
      '#FFFFFF'  //white
    ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hypersolar`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hypercwd", "hyperterm-one-light"
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
