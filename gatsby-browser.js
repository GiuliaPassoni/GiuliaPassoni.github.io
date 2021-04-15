/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/data/globalStyles.css"

// document.oncontextmenu = new Function("return false");
document.getElementsByTagName('img').ondragstart = function() { return false; };