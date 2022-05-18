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

var spelerX = 660; // x-positie van speler
var spelerY = 670; // y-positie van speler
var vijandX = 660
var vijandY = 50
var spelerSpringt
var snelheid

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler lopen
  if (keyIsDown(68)){
    spelerX = spelerX + 1;
  }
  if (keyIsDown(65)){
    spelerX = spelerX - 1;
  }
  //springen
  if (spelerSpringt === true && keyIsDown(32)){
    spelerY = spelerY - snelheid;
    snelheid = snelheid - 0,1;
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
if (spelerX - vijandX < 57 &&
  spelerX - vijandX > -57 &&
  spelerY - vijandY < 57 &&
  spelerY - vijandY > -57) {
  spelStatus = GAMEOVER; 
}
if (vijandX - spelerX < 57 &&
  vijandX - spelerX > -57 &&
  vijandY - spelerY < 57 &&
  vijandY - spelerY > -57) {
  spelStatus=GAMEOVER
  }
  // botsing kogel tegen vijand

 
  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill(0,204, 0);
rect(0,0,1280,720)
fill("white")
rect(520,0,280,20)
fill("white")
rect(520,700,280,20)
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
  

  // punten en health (voetbal)
  fill("white")
  ellipse(665,360,30,30)
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
