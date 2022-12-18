// Catarina Barreiros 

let who = prompt("What's your name?")
let phrase = "did you know that Data predicted that Ireland would reunite in 2024?"

function sayHi(who, phrase) {
  alert( who + ', ' + phrase );
  alert("Scroll down to the end of the page to see the countdown!");
}


setTimeout(sayHi, 3000, who, phrase); 


//queria fazer o texto mudar com a posição do rato -quanto mais para a direita, maior o texto- mas não estava a conseguir

document.querySelector("#spoiler-button").addEventListener("click", (e) => {
    const spoilerContent = document.querySelector("#spoiler-content");
    spoilerContent.classList.contains("hidden")
      ? spoilerContent.classList.replace("hidden", "fadein")
      : spoilerContent.classList.replace("fadein", "hidden");
  });



  // COUNTDOWN PARA 2024
  // isto foi muito trial and error de contas até chegar aqui

  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 2,
        dayMonth = "01/01/",
        unification = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > unification) {
      unification = dayMonth + nextYear;
    }
    
    const countDown = new Date(unification).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)) + " days",
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) + " h",
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) + " min",
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second) + " s";
  
          //Quando se chegar a 2024
          //se a distância até à data for 0, aparece a mensagem
          if (distance < 0) {
            document.getElementById("countdown").innerText = "IT'S time!!!!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());

    
    //TRANSLATOR

    //estou a ter problemas a traduzir palavras com letra maiúscula, aquilo não reconhece

    let userText = document.querySelector('.user-text');
let btnTranslate = document.querySelector('.btn-translate');
let klingonText = document.querySelector('.klingon-text');

btnTranslate.addEventListener('click', translateText);

function translateText(e) {
    e.preventDefault();

    let text = userText.value;

    fetch(getTranslationURL(text))
    .then(res => {
        console.log(res);
        return res.json()
    })
    .then(json => {
        klingonText.innerText = json.contents.translated;
    })
    .catch(err => {
        console.log("Error occurred:", err)
        alert('Something unexpected happened. Please try after sometime!'); //Esta mensagem é vaga e comum o suficiente. Pelo menos eu acho que é melhor pôr isto
    });
}
 
// e finalmente o link 
function getTranslationURL(text) {
    return "https://api.funtranslations.com/translate/klingon.json" + "?text=" + text;
}