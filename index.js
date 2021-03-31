score = 0;
cross = true;
audio=new Audio("music.mp3");
alert("LETS START");

audioOver=new Audio("gameover.mp3");
setTimeout(()=>{
  audio.play()

},1000);



document.onkeydown = function keyb(e) {
  console.log("Key code is: ", e.keyCode)
  if (e.keyCode == 38) {
    hero = document.querySelector('.dino');
    hero.classList.add('animateHero');
    setTimeout(() => {
      hero.classList.remove('animateHero');
    }, 700);

  }
  else if (e.keyCode == 39) {
    hero = document.querySelector(".dino");
    heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hero.style.left = heroX + 112 + "px";
  }


  else if (e.keyCode == 37) {
    hero = document.querySelector(".dino");
    heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hero.style.left = heroX - 112 + "px";
  }
}


setInterval(() => {
  hero1 = document.querySelector(".dino");
  vilen1 = document.querySelector(".obstacle");
  gOver = document.querySelector(".gameOver");

  heroX = parseInt(window.getComputedStyle(hero1, null).getPropertyValue("left"));
  heroY = parseInt(window.getComputedStyle(hero1, null).getPropertyValue("top"));

  vilenX = parseInt(window.getComputedStyle(vilen1, null).getPropertyValue("left"));
  vilenY = parseInt(window.getComputedStyle(vilen1, null).getPropertyValue("top"));

  absX = Math.abs(heroX - vilenX);
  absY = Math.abs(heroY - vilenY);


  if (absX < 73 && absY < 52) {
    gOver.style.visibility = 'visible';
    vilen1.classList.remove("vilen2");
    audioOver.play()
    setTimeout(()=>{reGame = confirm("GAME OVER:Do You Want To Play Again?");
    if (reGame == true) {
      window.location.reload(true);
    }
    else {
      vilen1.classList.remove("vilen2");
    }},1000);
    
  }
  else if (absX < 143 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
       
    setTimeout(() => {
      cross = true;
      
    }, 1000);
  
    setTimeout(() => {
      aniDur = parseFloat(window.getComputedStyle(vilen1, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.1;
      vilen1.style.animationDuration = newDur + 's';
    }, 500)
  }
}, 10);


function updateScore(score) {
  scoreCont.innerHTML = "Your Score:" + score
}
