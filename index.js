//RANDOM PAGE

const home = document.getElementById('home');
const vrai_ou_faux = document.getElementById('vrai_ou_faux');
const tout_le_monde = document.getElementById('tout_le_monde');
const defi_burger_quiz = document.getElementById('defi_burger_quiz');
const plus_ou_moins = document.getElementById('plus_ou_moins');
const back_home = document.getElementById('back_home');

const suivant = document.querySelectorAll('.suivant');

suivant[0].onclick = function(){
    home.style.display = 'none';
    getRandomPage();
    nameFunction();
    vrai_ou_fauxFun();
    tout_le_mondeFun();
    burger_quizFun()
}
suivant[1].onclick = function(){
    vrai_ou_faux.style.display = 'none';
    getRandomPage();
    plusNameFunction();
    vrai_ou_fauxFun();
}
suivant[2].onclick = function(){
    tout_le_monde.style.display = 'none';
    getRandomPage();
    plusNameFunction();
    tout_le_mondeFun();
}
suivant[3].onclick = function(){
    defi_burger_quiz.style.display = 'none';
    getRandomPage();
    plusNameFunction();
    burger_quizFun()
}
suivant[4].onclick = function(){
    plus_ou_moins.style.display = 'none';
    getRandomPage();
    plusNameFunction();
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const initialArr = [vrai_ou_faux, vrai_ou_faux, vrai_ou_faux, vrai_ou_faux, vrai_ou_faux, vrai_ou_faux, vrai_ou_faux, tout_le_monde, defi_burger_quiz, plus_ou_moins]
const randomPage = [];
randomPage.push(...initialArr);

function getRandomPage() {

    const result = getRandomItem(randomPage);
    result.style.display = 'flex';

    const suppr = randomPage.indexOf(result);
    randomPage.splice(suppr, 1);

    if (randomPage.length === 0) {
      randomPage.push(...initialArr);
    }

}

//NAME

var name_list = document.getElementById('name_list');
var remove_fields = document.getElementById('remove_fields');
var add_more_fields = document.getElementById('add_more_fields');


add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','name_text[]');
  newField.setAttribute('class','name_input');
  name_list.appendChild(newField);
}

remove_fields.onclick = function(){
  var input_tags = name_list.getElementsByTagName('input');
  if(input_tags.length > 1) {
    name_list.removeChild(input_tags[(input_tags.length) - 1]);
  }
}

var name_data = document.getElementsByName('name_text[]');
const name_output = document.querySelectorAll('.name_output');

let index_name = 0;

function nameFunction() {
    const index_name_data = name_data[index_name];
    name_output[0].innerText = index_name_data.value;
    name_output[1].innerText = index_name_data.value;
    name_output[2].innerText = index_name_data.value;
    name_output[3].innerText = index_name_data.value; 
}
  
function plusNameFunction() {
    index_name++;
    if (index_name < name_data.length) {
        nameFunction();
    } else {
      index_name = 0;
      nameFunction();
    }
}

//VRAI OU FAUX

const vrai_button = document.getElementById('vrai_button');
const faux_button = document.getElementById('faux_button');
const vrai_ou_faux_button = document.getElementById('vrai_ou_faux_button');
const questionEl = document.getElementById('question');
const reponseEl = document.getElementById('reponse');


vrai_button.addEventListener("click", () => {
  questionEl.style.display = 'none';
  reponseEl.style.display = 'flex';
  vfCheck("true")
});
faux_button.addEventListener("click", () => {
  questionEl.style.display = 'none';
  reponseEl.style.display = 'flex';
  vfCheck("false")

});
vrai_ou_faux_button.addEventListener("click", () => {
  questionEl.style.display = 'flex';
  reponseEl.style.display = 'none';
});

const vrai_ou_fauxInit = [
  {
    question: "La tour Eiffel a été construite en seulement 2 ans",
    correct: "true"
  },
  {
    question: "Stanley Kubrick est le réalisateur du film Shining sorti en 1980",
    correct: "true"
  },
  {
    question: "Minecraft est le jeux-vidéo le plus vendu au monde",
    correct: "true"
  },
  {
    question: "A Wimbledon, tous les joueurs doivent être habillés en blanc",
    correct: "true"
  },
  {
    question: "Le premier Call of Duty est sorti en 2003",
    correct: "true"
  },
  {
    question: "L'Espagne a remporté la coupe du monde de football en 2010",
    correct: "true"
  }, 
  {
    question: "La ville de Paris est divisée en 18 arrondissements",
    correct: "false"
  },
  {
    question: "Ronaldinho est le joueur qui apparaît le plus sur les couvertures des jeux Fifa",
    correct: "false"
  },
  {
    question: "James Cameron est le réalisateur du film Les Dents de la mer sorti en 1975",
    correct: "false"
  },
  {
    question: "Jennifer Aniston joue le rôle de Monica Geller dans la série Friends",
    correct: "false"
  },
  {
    question: "New York est la capitale des États-Unis",
    correct: "false"
  },
  {
    question: "Abraham Lincoln est le premier président des Etats-Unis",
    correct: "false"
  },
] 

const vrai_ou_fauxData = [];
vrai_ou_fauxData.push(...vrai_ou_fauxInit);

const questionText = document.getElementById('questionText');
const reponseText = document.getElementById('reponseText');


function vrai_ou_fauxFun() {
  const vrai_ou_fauxResult = getRandomItem(vrai_ou_fauxData);
  questionText.innerText = vrai_ou_fauxResult.question;
  reponseText.innerText = vrai_ou_fauxResult.correct;

  const vfSuppr = vrai_ou_fauxData.indexOf(vrai_ou_fauxResult);
  vrai_ou_fauxData.splice(vfSuppr, 1);
  if (vrai_ou_fauxData.length === 0) {
    vrai_ou_fauxData.push(...vrai_ou_fauxInit);
  }
}
function vfCheck(answer) {
  if (reponseText.innerText === answer) {
    reponseText.innerText = 'Bonne réponse! Tu distribues 2 gorgées';
  }
  else {
    reponseText.innerText = 'Mauvaise réponse! Tu bois 2 gorgées';
  };
}

//TOUT LE MONDE

const tout_le_mondeInit = [
  'Désignez tous en même temps le ou la plus moche, cette personne boiras 2 gorgées',
  'Désignez tous en même temps le ou la fils/fille à papa, cette personne boiras 3 gorgées',
  'Désignez tous en même temps celui ou celle qui se masturbe beaucoup trop, cette personne boiras 4 gorgées',
  '5 gorgées pour tout le monde'
];
const tout_le_mondeData = [];
tout_le_mondeData.push(...tout_le_mondeInit);

const tout_le_mondeText = document.getElementById('tout_le_mondeText');

function tout_le_mondeFun() {
  const tout_le_mondeResult = getRandomItem(tout_le_mondeData);
  tout_le_mondeText.innerText = tout_le_mondeResult;

  const tlmSuppr = tout_le_mondeData.indexOf(tout_le_mondeResult);
  tout_le_mondeData.splice(tlmSuppr, 1);
  if (tout_le_mondeData.length === 0) {
    tout_le_mondeData.push(...tout_le_mondeInit);
  }
}

//DEFI BURGER QUIZ

const regles_defi_burger_quiz = document.getElementById('regles_defi_burger_quiz');
const jeu_defi_burger_quiz = document.getElementById('jeu_defi_burger_quiz');
const regles_defi_burger_quiz_button = document.getElementById('regles_defi_burger_quiz_button');
const jeu_defi_burger_quiz_button = document.getElementById('jeu_defi_burger_quiz_button');

regles_defi_burger_quiz_button.addEventListener("click", () => {
  regles_defi_burger_quiz.style.display = 'none';
  jeu_defi_burger_quiz.style.display = 'flex';
});

jeu_defi_burger_quiz_button.addEventListener("click", () => {
  regles_defi_burger_quiz.style.display = 'flex';
  jeu_defi_burger_quiz.style.display = 'none';
});

const burger_quizInit = [
  {
    one: "Quel âge as-tu ?",
    two: "Quel est le nom de ton animal de compagnie ?",
    three: "Eté ou hiver ?",
    four: "Mars ou Snickers ?",
    five: "Epelle le mot caca"
  },
  {
    one: "Qui était Marie Curie ?",
    two: "En quelle année est né Jésus ?",
    three: "Danse vite fais",
    four: "Quelle est la couleur de tes chaussures ?",
    five: "Répète après moi: les chaussettes de l'archiduchesse sont-elles sèches? Archi-sèches ?",
  },
  {
    one: "Messi ou Ronaldo ?",
    two: "Samsung ou Apple ?",
    three: "Qui a tué John Fitzgerald Kennedy ?",
    four: "Quel est ton plat préféré ?",
    five: "Chante-moi un peu de Jul !",
  }
]
const burger_quizData = [];
burger_quizData.push(...burger_quizInit);

function burger_quizFun() {
  const burger_quizResult = getRandomItem(burger_quizData);
  document.getElementById('one').innerHTML = burger_quizResult.one;
  document.getElementById('two').innerHTML = burger_quizResult.two;
  document.getElementById('three').innerHTML = burger_quizResult.three;
  document.getElementById('four').innerHTML = burger_quizResult.four;
  document.getElementById('five').innerHTML = burger_quizResult.five;

  const bqSuppr = burger_quizData.indexOf(burger_quizResult);
  burger_quizData.splice(bqSuppr, 1);
  if (burger_quizData.length === 0) {
    burger_quizData.push(...burger_quizInit);
  }
}

//PLUS OU MOINS

const regles_plus_ou_moins = document.getElementById('regles_plus_ou_moins');
const jeu_plus_ou_moins = document.getElementById('jeu_plus_ou_moins');
const regles_plus_ou_moins_button = document.getElementById('regles_plus_ou_moins_button');
const jeu_plus_ou_moins_button = document.getElementById('jeu_plus_ou_moins_button');

regles_plus_ou_moins_button.addEventListener("click", () => {
  regles_plus_ou_moins.style.display = 'none';
  jeu_plus_ou_moins.style.display = 'flex';
  getRandomNombre();
  temps = 60;
  diminuerTemps()
});

jeu_plus_ou_moins_button.addEventListener("click", () => {
  regles_plus_ou_moins.style.display = 'flex';
  jeu_plus_ou_moins.style.display = 'none';
});

const jeu_nombre = document.getElementById('jeu_nombre');

function getRandomNombre() { 
  var min = 0; 
  var max = 100000; 
  var random = Math.floor(Math.random() * (max - min)) + min;
  jeu_nombre.innerHTML = random;
  console.log(random); 
}

const timerEl = document.getElementById('minuteur');

let temps = 60;

function diminuerTemps() {
  timerEl.innerText = temps;
  if (temps > 0) {
    temps--
  }
  else {
    timerEl.innerText = "Términé !";
  }
}
setInterval(diminuerTemps, 1000);



