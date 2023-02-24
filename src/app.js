/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let list = [];

  function generateString() {
    pronoun.forEach(elementOfPronoun => {
      adj.forEach(elementOfAdj => {
        noun.forEach(elementOfNoun => {
          ext.forEach(elementOfExt => {
            list.push(
              elementOfPronoun + elementOfAdj + elementOfNoun + elementOfExt
            );
          });
        });
      });
    });

    // for (let i = 0; i < pronoun.length; i++) {
    //   for (let a = 0; a < adj.length; a++) {
    //     for (let n = 0; n < noun.length; n++) {
    //       for (let e = 0; e < ext.length; e++) {
    //         list.push(pronoun[i] + adj[a] + noun[n] + ext[e]);
    //       }
    //     }
    //   }
    // }
  }

  generateString();

  list.forEach(elementOfList => {
    let li = document.createElement("li");
    let text = document.createTextNode(elementOfList);
    li.appendChild(text);
    document.getElementById("listado").appendChild(li);
  });
};
