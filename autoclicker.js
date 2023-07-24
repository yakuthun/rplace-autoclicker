// ==UserScript==
// @name         rplace Auto Clicker
// @namespace    https://githun.com/yakuthun
// @version      1.0
// @description  Automatically clicks on selected area every 5 minutes
// @author       yakuthun
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @updateURL    https://github.com/yakuthun/rplace-autoclicker/raw/main/autoclicker.js
// @downloadURL  https://github.com/yakuthun/rplace-autoclicker/raw/main/autoclicker.js
// ==/UserScript==

if (window.top !== window.self) {
    const camera = document.querySelector("garlic-bread-embed").shadowRoot.querySelector("garlic-bread-camera");
    const canvas = camera.querySelector("garlic-bread-canvas");
    const container = canvas.shadowRoot.querySelector('.container')
    console.log("container", container);

    let chosenColor = 2;
    let buttonColor = "#FFD635";

    function chooseColor(color) {
    chosenColor = color;
    console.log("Chosen color: " + chosenColor);
    if (chosenColor == 2) {document.querySelector('button').style.backgroundColor = "#FF4500";}
    if (chosenColor == 3) {document.querySelector('button').style.backgroundColor = "#FFA800";}
    if (chosenColor == 4) {document.querySelector('button').style.backgroundColor = "#FFD635";}
    if (chosenColor == 6) {document.querySelector('button').style.backgroundColor = "#00A368";}
    if (chosenColor == 8) {document.querySelector('button').style.backgroundColor = "#7EED56";}
    if (chosenColor == 12) {document.querySelector('button').style.backgroundColor = "#2450A4";}
    if (chosenColor == 13) {document.querySelector('button').style.backgroundColor = "#3690EA";}
    if (chosenColor == 14) {document.querySelector('button').style.backgroundColor = "#51E9F4";}
    if (chosenColor == 18) {document.querySelector('button').style.backgroundColor = "#811E9F";}
    if (chosenColor == 19) {document.querySelector('button').style.backgroundColor = "#B44AC0";}
    if (chosenColor == 23) {document.querySelector('button').style.backgroundColor = "#FF99AA";}
    if (chosenColor == 25) {document.querySelector('button').style.backgroundColor = "#9C6926";}
    if (chosenColor == 27) {document.querySelector('button').style.backgroundColor = "#000000";}
    if (chosenColor == 29) {document.querySelector('button').style.backgroundColor = "#898D90";}
    if (chosenColor == 30) {document.querySelector('button').style.backgroundColor = "#D4D7D9";}
    if (chosenColor == 31) {document.querySelector('button').style.backgroundColor = "#E9EBED";}
}

function changeText(text) {
    document.getElementById("state").innerText = text;
}

function autoBot() {

    document.querySelector("garlic-bread-embed").shadowRoot.querySelector('garlic-bread-status-pill').shadowRoot.querySelector('button').click();
    console.log("%cPixel selected", 'color: white; font-style: bold;  font-size: 2em;');
    changeText("Pixel selected");

    setTimeout(function() {
      document.querySelector("garlic-bread-embed").shadowRoot.querySelector('garlic-bread-color-picker').shadowRoot.querySelector('.palette').querySelector(`[data-color="${chosenColor}"]`).click();
      console.log("%cColor selected from the palette", 'color: white; font-style: bold;  font-size: 2em;');
      changeText("Color selected from the palette");
    }, 2000);

    setTimeout(function() {
      document.querySelector("garlic-bread-embed").shadowRoot.querySelector('garlic-bread-color-picker').shadowRoot.querySelector('.container').querySelector('.actions').querySelector('.confirm').click();
      console.log("%cPixel assigned", 'color: white; font-style: bold;  font-size: 2em;');
      changeText("Pixel assigned");
    }, 4000);
    setTimeout(function() {
        console.log("%cWaiting for the countdown to finish", 'color: white; font-style: bold;  font-size: 2em;');
        changeText("Waiting for the countdown to finish");
      }, 6000);

    setTimeout(autoBot, 308000);
  }



var stickyDiv = document.createElement('div');
stickyDiv.style.position = 'fixed';
stickyDiv.style.top = '50px';
stickyDiv.style.right = '10px';
stickyDiv.style.width = '260px';
stickyDiv.style.height = '390px';
stickyDiv.style.background = 'white';
stickyDiv.style.zIndex = '9999';
stickyDiv.style.border= 'solid 3px black';


let boxStyle = `style=" max-width: 25%;max-height: 25%;  box-sizing: border-box; padding: 30px; cursor:pointer;`;

stickyDiv.innerHTML = `
<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
<p style="text-align:center;">r/place <a href="https://github.com/yakuthun" target="_blank">Auto Clicker</a></p>
<div style="display: flex; flex-wrap: wrap; margin: 0px 5px 5px 5px;">
<div ${boxStyle} background-color:#FF4500;border:1px solid #FF4500;" onclick="chooseColor('2')"></div>
<div ${boxStyle} background-color:#FFA800;border:1px solid #FFA800;" onclick="chooseColor('3')"></div>
<div ${boxStyle} background-color:#FFD635;border:1px solid #FFD635;" onclick="chooseColor('4')"></div>
<div ${boxStyle} background-color:#00A368;border:1px solid #00A368;" onclick="chooseColor('6')"></div>
<div ${boxStyle} background-color:#7EED56;border:1px solid #7EED56;" onclick="chooseColor('8')"></div>
<div ${boxStyle} background-color:#2450A4;border:1px solid #2450A4;" onclick="chooseColor('12')"></div>
<div ${boxStyle} background-color:#3690EA;border:1px solid #3690EA;" onclick="chooseColor('13')"></div>
<div ${boxStyle} background-color:#51E9F4;border:1px solid #51E9F4;" onclick="chooseColor('14')"></div>
<div ${boxStyle} background-color:#811E9F;border:1px solid #811E9F;" onclick="chooseColor('18')"></div>
<div ${boxStyle} background-color:#B44AC0;border:1px solid #B44AC0;" onclick="chooseColor('19')"></div>
<div ${boxStyle} background-color:#FF99AA;border:1px solid #FF99AA;" onclick="chooseColor('23')"></div>
<div ${boxStyle} background-color:#9C6926;border:1px solid #9C6926;" onclick="chooseColor('25')"></div>
<div ${boxStyle} background-color:#000000;border:1px solid #000000;" onclick="chooseColor('27')"></div>
<div ${boxStyle} background-color:#898D90;border:1px solid #898D90;" onclick="chooseColor('29')"></div>
<div ${boxStyle} background-color:#D4D7D9;border:1px solid #D4D7D9;" onclick="chooseColor('30')"></div>
<div ${boxStyle} background-color:#FFFFFF;border:1px solid #E9EBED;" onclick="chooseColor('31')"></div>
</div>
<button style="width: 240px; height: 46px; display: flex; flex-direction: column; justify-content: center; align-items: center; color: black; margin-top:10px; background-color: ${buttonColor}; font-size: 18px; position: relative; border-radius: 0px;" onclick="autoBot()">START</button>
<p style="color: red;margin:5px 0px 0px 0px;" id="state">Choose color</p>
</div>
`;


    const startButton = stickyDiv.querySelector('button');
    startButton.addEventListener('click', autoBot);


document.body.appendChild(stickyDiv);

    let colorBoxes = stickyDiv.querySelectorAll('[onclick^="chooseColor"]');
    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            eval(box.getAttribute('onclick'));
        });
    });

}


