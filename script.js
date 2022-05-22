/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const KEY_SPACE = 32; //spatiebalk code
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 660; // x-positie van speler
var spelerY = 670; // y-positie van speler
var vijandX = 660;
var vijandY = 50;
var spelerSpringt = false; 
var springSnelheid = 0;
var springSnelheidStart = 5.5;
var snelheid;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler lopen
var snelheid = 6
  if (keyIsDown(68)){
    spelerX = spelerX + 6;
  }
  if (keyIsDown(65)){
    spelerX = spelerX - 6;
    
  }
  //springen
  if (spelerSpringt === false && keyIsDown(KEY_SPACE)){
    spelerSpringt = true;
    springSnelheid = springSnelheidStart
  }
  if (spelerSpringt === true) {
    spelerY = spelerY - springSnelheid ;
    springSnelheid = springSnelheid - 0.2;
  }
  if (spelerY > 669) {
    spelerSpringt = false;
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
fill('skyblue');
rect(-10,-10,1300,750)
//grond
noStroke()
fill('lightgray')
rect(-1,700,1290,50)

//goal post links
fill("black")
rect(-1,550,20,150)
quad(-10,552,17, 552, 69, 505, 69, 485)
//goal bord links
fill('white')
rect(69,465,6,50)
//net links
stroke('190,190,190')
noFill()
rect(72,498,20,12)
//net houder links
noStroke()
fill('orange')
rect(75,495,20,4)
//goal post rechts
fill("black")
rect(1261,550,20,150)
quad(1290,552,1263,552,1211,505,1211,485)
//goal bord rechts
fill('white')
rect(1211,465,6,50)
//net rechts
stroke('190,190,190')
noFill()
rect(1194,498,20,12)
//nethouder rechts
noStroke()
fill('orange')
rect(1191,495,20,4)


  // vijand
fill("red")
rect(vijandX - 25, vijandY - 25, 50, 50);
fill("yellow")
ellipse(vijandX, vijandY, 40, 10);
  // kogel

  // speler
  fill("black");
  rect(spelerX - 25, spelerY - 40, 25, 70);
  

  //basketbal
  fill("orange")
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
