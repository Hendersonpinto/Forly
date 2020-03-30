// Webpack starts here the bundling and the dependencies management. And also in vendor.js
// Here I should include all the js files that I am going to use on the websites
import { scrollTo } from './app/scrollTo';
import './stylesheets/index.scss'; // This is how I include the css to the webpack so it then can include it to the HTML
import { changeContent } from './app/changeContent';

scrollTo();
changeContent();