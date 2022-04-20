/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 300
var vijandY = 300

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
var speed = 10
if (keyIsDown(68))   {
  spelerX=spelerX+speed;
}
if (keyIsDown(65)){
  spelerX=spelerX-speed;
}
if (keyIsDown(87)){
  spelerY=spelerY-speed;
}
if (keyIsDown(83)){
  spelerY=spelerY+speed
}
  // vijand
if (keyIsDown(RIGHT_ARROW)) {
 vijandX=vijandX+speed;
}
if (keyIsDown(LEFT_ARROW)) {
  vijandX=vijandX-speed;
 }
 if (keyIsDown(UP_ARROW)) {
  vijandY=vijandY-speed;
 }
 if (keyIsDown(DOWN_ARROW)) {
  vijandY=vijandY+speed;
 }
  // kogel
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if (spelerX === vijandX && spelerY === vijandY) {
  spelStatus = GAMEOVER; 
}
  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill("black");
rect(0,0,1280,720)
  // vijand
fill("red")
rect(vijandX - 25, vijandY - 25, 50, 50);
fill("yellow")
ellipse(vijandX, vijandY, 40, 10);
  // kogel

  // speler
  fill("blue");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("yellow");
  ellipse(spelerX, spelerY, 40, 10);
  

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('black');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
