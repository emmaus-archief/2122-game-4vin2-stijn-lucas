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
const START = 2;
const GAMEOVER = 3;

var spelStatus = START; // aan het spelen
var spelerX = 99; // x-positie van speler
var spelerY = 670; // y-positie van speler
var speler2X = 1210; // x-positie van vijand
var speler2Y = 670; // y-positie van vijand
var balX = 654.5; // x-positie van bal
var balY = 200; // y-positie van bal


var spelerSpringt = false; // speler springt niet
var springSnelheid = 0; // springsnelheid
var springSnelheidStart = 6.2; // snelheid van sprong bij de start
var spelerSpringt2 = false; // speler2 springt niet
var springSnelheid2 = 0; // springsnelheid speler 2
var springSnelheidStart2 = 6.2; // snelheid van sprong bij de start speler 2
var snelheid = 7.5; // snelheid 


var balSpringt = true; // bal springt 
var balSpringSnelheid = 0; // bal springsnelheid
var balSpringSnelheidStart = 4; // bal snelheid bij eerste sprong
var balSnelheidX = 1; // X snelheid van de bal
var balSnelheidY = 0; // Y snelheid van de bal

var scoreZwart = 0;
var scoreRood = 0;

var isAanHetResetten = false;
var Winnaar;



/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  
  if(!isAanHetResetten) {

    // speler lopen
    if (spelerX < 1261 && keyIsDown(68)){
      spelerX = spelerX + snelheid;
    }
    if (spelerX > 44 && keyIsDown(65)){
      spelerX = spelerX - snelheid;
    }
  
    //speler2 lopen
    if (speler2X < 1261 && keyIsDown(39)){
      speler2X = speler2X + snelheid;
    }
    if (speler2X > 44 && keyIsDown(37)){
      speler2X = speler2X - snelheid;
    }
  
    //springen
    if (spelerSpringt === false && keyIsDown(KEY_SPACE) || spelerSpringt === false && keyIsDown(87)){
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

    //springen speler 2
    if (spelerSpringt2 === false && keyIsDown(38)){
      spelerSpringt2 = true;
      springSnelheid2 = springSnelheidStart2
    }
    if (spelerSpringt2 === true) {
      speler2Y = speler2Y - springSnelheid2 ;
      springSnelheid2 = springSnelheid2 - 0.2;
    }
    if (speler2Y > 669) {
      spelerSpringt2 = false; 
    }
  
  }

  if (balSpringt === false) { // begin een stuiter
    balSpringt = true;
    balSpringSnelheid = balSpringSnelheidStart;
  }
  if (balSpringt === true) { // bezig met een stuiter
    balY = balY - balSpringSnelheid ;
    balSpringSnelheid = balSpringSnelheid - 0.2;
  }
  if (balY > 700 && balSpringt === true) { // einde stuiter
    balY = 700
    balSpringSnelheidStart = balSpringSnelheid * -0.8;
    balSpringt = false;
  }
  if (balSnelheidY > 10) {
   balSnelheidY = 10;
  }  
  if (balSnelheidX > 10) {
    balSnelheidX = 10;
  }
  balX += balSnelheidX * 2.5
};

var checkBalInGoal = function() {
  if(balX > 1174 &&
    balX < 1194 + 20 &&
    balY > 465 &&
    balY < 498 + 12 &&
    isAanHetResetten === false) {
      console.log("gescoort Rechts")
      scoreZwart++;

      isAanHetResetten = true;
      setTimeout(resetSpel, 2000)
    }
  if(balX > 60  &&
    balX < 72 + 20 &&
    balY > 465 &&
    balY < 498 + 12&&
    isAanHetResetten === false) {
      console.log("gescoort Links")
      scoreRood++;

      isAanHetResetten = true;
      setTimeout(resetSpel, 2000)
    }
}

var resetSpel = function() {
  spelerX = 99; 
  spelerY = 670; 
  speler2X = 1210; 
  speler2Y = 670; 
  balX = 654.5; 
  balY = 200;
  balSpringSnelheid = 4;
  balSnelheidX = 1;
  
  isAanHetResetten = false;
}

//72,498,20,12
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */

  // botsing kogel tegen vijand

 
  // update punten en health
var magRaken1 = true
var magRaken2 = true
var resetMagRaken1 = function() {
  magRaken1 = true;
}
var resetMagRaken2 = function() {
  magRaken2 = true;
}

var verwerkBotsing = function () {
// botsing speler tegen bal
    if (spelerY - balY < 47 && spelerY - balY > -56 && spelerX - balX < 19 && spelerX - balX > -45.5
        && magRaken1 === true
      ) 
    {
      console.log("geraakt")
      magRaken1 = false
      setTimeout(resetMagRaken1, 200)

      balSpringSnelheid *= -1.1;
      balSnelheidX += 1.5;
      balSnelheidY += 0.2;
    } 
  if (balY > 690) {
    balSnelheidY += 3;
  }

// botsing speler2 tegen bal
  if (speler2Y - balY < 47 && speler2Y - balY > -56 && speler2X - balX < 19 && speler2X - balX > -45.5
    && magRaken2 === true) 
  {
    magRaken2 = false
    setTimeout(resetMagRaken2, 200)
  
    console.log("geraakt")
    balSpringSnelheid *= -1.1;
    balSnelheidX += 1.5;
    balSnelheidY += 0.2;
  } 
  
  if (balY > 690) {
    balSnelheidY += 3;
  }
  
  // botsing bal tegen muur en plafond
  if (balX > 1270) {
    balSnelheidX *= -1;
  }
  if (balX < 30) {
    balSnelheidX *= -1;
  }
  if (balY < 0) {
    balY = 20;
  balSnelheidY *= -1;
  }
}

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


  // speler2
  fill("red")
  rect(speler2X - 25, speler2Y - 40, 25, 70);
  // kogel

  // speler
  fill("black");
  rect(spelerX - 25, spelerY - 40, 25, 70);
  

  //basketbal
  fill("orange")
  ellipse(balX - 25,balY - 10,30,30)

  //Score
  rectMode(CENTER)
  textAlign(CENTER)
  fill("black")
  textSize(50)
  text(`${scoreZwart} | ${scoreRood}`, 640, 150, 180, 180)

  if(isAanHetResetten) {
    text("Gescoord!", 640, 320, 180, 180)
  }
  textAlign(LEFT)
  rectMode(CORNER)
};

var tekenBeginScherm = function() {
  fill('skyblue');
  rect(-10,-10,1300,750)

  rectMode(CENTER)
  textAlign(CENTER)
  fill("black")
  textSize(50)

  text(`1v1-Basketbal`, 640, 150, 180, 180)

  fill("White")
  rect(640, 475, 300, 150)
  fill("Black")
  
  if(mouseX > 440 &&
    mouseX < 880 &&
    mouseY > 400 &&
    mouseY < 600) {
    fill("White")

    if(mouseIsPressed === true){
      spelStatus = SPELEN

      scoreRood = 0;
      scoreZwart = 0;
    }
  }
  text(`Spelen`, 640, 500, 200, 100)

  fill("Black")

  textAlign(LEFT)
  rectMode(CORNER)
}

var tekenGameoverScherm = function() {
  fill('skyblue');
  rect(-10,-10,1300,750)

  rectMode(CENTER)
  textAlign(CENTER)
  fill("black")
  textSize(50)

  text(`${Winnaar} heeft gewonnen!`, 640, 150, 800, 180)

  fill("White")
  rect(640, 475, 400, 150)
  fill("Black")
  
  if(mouseX > 440 &&
    mouseX < 880 &&
    mouseY > 400 &&
    mouseY < 600) {
    fill("White")

    if(mouseIsPressed === true){
      spelStatus = START;

      scoreRood = 0;
      scoreZwart = 0;
    }
  }
  text(`Speel`, 640, 500, 200, 100)

  fill("Black")

  textAlign(LEFT)
  rectMode(CORNER)
}

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function() {
  if(scoreRood == 5) {
    Winnaar = "Rood";
    spelStatus = GAMEOVER;
  }
  if(scoreZwart == 5) {
    Winnaar = "Zwart";
    spelStatus = GAMEOVER;
  }
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/*
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
    checkBalInGoal();
    checkGameOver();
  }
  if (spelStatus === START) {
    // teken game-over scherm
    tekenBeginScherm()
  }
  if (spelStatus === GAMEOVER) {
    tekenGameoverScherm()
  }
}