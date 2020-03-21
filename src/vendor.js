// Webpack starts here the bundling and the dependencies management. And also in vendor.js

import "bootstrap"; //This imports also the javascript from bootstrap. This will trigger an error if we dont have jquery and popper.js so we need to install those dependencies with npm install