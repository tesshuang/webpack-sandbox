import { hello } from "./hello";
import johnCena from "./assets/sunset.jpg";
import "./style.scss";

document.body.innerHTML = '<div id="myMemes"></div>';
document.getElementById("myMemes").innerHTML = `
  <h1>This is a beautiful sunset at Eastcoast of Canada...</h1>
  <img src="${johnCena}" width="300"/>
`;
hello("Hello Dev!");