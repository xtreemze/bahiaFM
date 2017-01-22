// !minifyOnSave
// minifyOnSave: false
// !minOnSave
// minOnSave: false
module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  // "plugins": ["react"],
  "ecmaVersion": 5,
  "ecmaFeatures": {
    "jsx": false,
    "modules": false,
    "arrowFunctions": false,
    "classes": true,
    "spread": true,
  },
  "env": {
    "browser": true,
    "jquery": false,
		"worker": true,
		"serviceworker": false,
  },
  "rules": {
    // "indent": [ "error", "tab" ],
    // "linebreak-style": [ "error", "windows" ],
    // "quotes": [ "error", "single" ],
    // "semi": [ "error", "always" ]
    // "newline-per-chained-call": ["off"],
    "no-unused-vars": ["off"],
    "max-len": ["off", 100, 4],
    "no-useless-concat": ["off"],
    "no-var": ["off"],
    // "prefer-arrow-callback": ["off"],
    "no-undef": ["off"],
    "prefer-template": ["off"],
    "prefer-arrow-callback": ["off"]
  },
  "globals": {

  },
};
