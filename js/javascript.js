//Variables//

var a = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12] // tableau contenant les 12 paires de cartes
    .map(p=>[p,Math.random()])//renvoit un nombre aléatoire compris entre 0 et 1
    .sort((a,b)=>a[1]-b[1])//tri les éléments dans le désordre
    .map(p=>p[0]) //arrondir

console.log(a)

var music = document.getElementById("myAudio"); 
var pictures = document.getElementsByTagName('img');//récupère tous les éléments de type <img>
var eltScore = document.getElementById('score');
var score = 0;
var step = 1;
var p1, p2;
var timer = null;


for(let i =0; i < pictures.length; i++){ // boucle qui permet de récupérer toutes mes images répondant au nom 'img-alt().png'
    pictures[i].src2 = '../pictures/img-alt' + a[i] + '.png';
}

document.addEventListener('click',function(e){
    switch(step){
        case 1 : //premier click
            if (e.target.tagName=='IMG'){
                e.target.src = e.target.src2;
                p1 = e.target;
                step = 2;
            }
            break;
        case 2 ://deuxième click
            if (e.target.tagName=='IMG'){
                e.target.src = e.target.src2;
                p2 = e.target;
                step = 3;
            }
            timer = setTimeout(check, 1700);
            break;
        case 3 : //click suivant, n'importe où
            clearTimeout(timer);
            check();
            break;
     }
});

function check(){
    if (p1.src2==p2.src2){//bonne paire
        p1.replaceWith(document.createElement('span'))//la carte disparaît
        p2.replaceWith(document.createElement('span'))
        score += 50;//gain de 50 pts
    }
    else{
        p2.src = p1.src = '../pictures/img-alt0.png'; //mauvaise paire, on laisse le dos des cartes
        score = Math.max(0, score-30);//perte de 30 pts lorsqu'il s'agit d'une mauvaise paire//
    }
    step = 1;
    eltScore.textContent = score ;
    if (document.getElementsByTagName('img').length==0){//lorsque toutes les images du tableau ont été prises, alors c'est gagné
        eltScore.textContent += " You win !";//message de victoire
        location.reload()//relance le jeu
    }
}

//pour lancer la musique pendant la partie
function playAudio() {
    music.play(); 
  } 
  
function pauseAudio() { 
    music.pause(); 
  } 

