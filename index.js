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
    question: "La tour Eiffel a ??t?? construite en seulement 2 ans",
    correct: "true"
  },
  {
    question: "la distance entre la Terre et la station spatiale internationale est d'environ 400 kilom??tres",
    correct: "true"
  },
  {
    question: "Stanley Kubrick est le r??alisateur du film Shining sorti en 1980",
    correct: "true"
  },
  {
    question: "Le film Alien, le huiti??me passager est sorti en 1979",
    correct: "true"
  },
  {
    question: "Michael Jackson est d??c??d?? en 2009",
    correct: "true"
  },
  {
    question: "Reservoir Dogs est le premier film de Quentin Tarantino",
    correct: "true"
  },
  {
    question: "la loi concernant la s??paration des ??glises et de l'??tat a ??t?? adopt??e en 1905",
    correct: "true"
  },
  {
    question: "Guccio Gucci est le fondateur de la marque Gucci",
    correct: "true"
  },
  {
    question: "Minecraft est le jeux-vid??o le plus vendu au monde",
    correct: "true"
  },
  {
    question: "James Brown ??tait surnomm?? le parrain de la soul",
    correct: "true"
  },
  {
    question: "Tom Elvis Jedusor se faisait appeler Voldemort",
    correct: "true"
  },
  {
    question: "Paris est la capitale de la France",
    correct: "true"
  },
  {
    question: "A Wimbledon, tous les joueurs doivent ??tre habill??s en blanc",
    correct: "true"
  },
  {
    question: "Berlin est la capitale de l'Allemagne",
    correct: "true"
  },
  {
    question: "L'atmosph??re est principalement compos?? d'azote et d'oxyg??ne",
    correct: "true"
  },
  {
    question: "Le point Nemo est le point de l'oc??an le plus ??loign?? de toute terre ??merg??e",
    correct: "true"
  },
  {
    question: "Max Verstappen est le plus jeune pilote de F1 ?? avoir remport?? un grand prix",
    correct: "true"
  },
  {
    question: "Lima est la capitale du P??rou",
    correct: "true"
  },
  {
    question: "Emmanuel Macron est n?? en 1977",
    correct: "true"
  },
  {
    question: "Sort le cross vol?? est le tout premier single de Jul",
    correct: "true"
  },
  {
    question: "Depuis 1965 une femme est libre de travailler sans l'accord de son mari",
    correct: "true"
  },
  {
    question: "Le premier Call of Duty est sorti en 2003",
    correct: "true"
  },
  {
    question: "L'Espagne a remport?? la coupe du monde de football en 2010",
    correct: "true"
  }, 
  {
    question: "Le lancement de la TNT (T??l??vision Num??rique Terrestre) en France m??tropolitaine a eu lieu en 2005",
    correct: "true"
  }, 
  {
    question: "La ville de Paris est divis??e en 18 arrondissements",
    correct: "false"
  },
  {
    question: "La ville de Canc??n se trouve aux Etats-Unis",
    correct: "false"
  },
  {
    question: "Ronaldinho est le joueur qui appara??t le plus sur les couvertures des jeux Fifa",
    correct: "false"
  },
  {
    question: "James Cameron est le r??alisateur du film Les Dents de la mer sorti en 1975",
    correct: "false"
  },
  {
    question: "Jennifer Aniston joue le r??le de Monica Geller dans la s??rie Friends",
    correct: "false"
  },
  {
    question: "New York est la capitale des ??tats-Unis",
    correct: "false"
  },
  {
    question: "Le Titanic faisait 350 m??tres de long",
    correct: "false"
  },
  {
    question: "Le Royaume-Uni est constitu?? de 5 nations",
    correct: "false"
  },
  {
    question: "L??onard de Vinci a peint le plafond de la chapelle Sixtine ?? Rome",
    correct: "false"
  },
  {
    question: "Neil Armstrong pose le pied sur la Lune en 1983",
    correct: "false"
  },
  {
    question: "La chute du mur de Berlin a eu lieu en 1979",
    correct: "false"
  },
  {
    question: "le match de tennis le plus long de l'histoire a dur?? 19 heures et 32 minutes",
    correct: "false"
  },
  {
    question: "Dans un jeu d?????chec, il faut absolument prot??ger la reine",
    correct: "false"
  },
  {
    question: "Elon Musk est le fondateur de Tesla",
    correct: "false"
  },
  {
    question: "Il y a 78 millions d'habitants en France",
    correct: "false"
  },
  {
    question: "Un alexandrin est compos?? de 24 syllabes",
    correct: "false"
  },
  {
    question: "Bombay est la capitale de l'Inde",
    correct: "false"
  },
  {
    question: "Melbourne est la capitale de l'Australie",
    correct: "false"
  },
  {
    question: "Los Angeles est parfois surnomm??e la grande pomme",
    correct: "false"
  },
  {
    question: "Elon Musk est n?? aux Etats-Unis",
    correct: "false"
  },
  {
    question: "L'album Discovery est le premier album des Daft Punk",
    correct: "false"
  },
  {
    question: "Mykonos est la capitale de la Gr??ce",
    correct: "false"
  },
  {
    question: "Abraham Lincoln est le premier pr??sident des Etats-Unis",
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
    reponseText.innerText = 'Bonne r??ponse! Tu distribues 2 gorg??es';
  }
  else {
    reponseText.innerText = 'Mauvaise r??ponse! Tu bois 2 gorg??es';
  };
}

//TOUT LE MONDE

const tout_le_mondeInit = [
  'D??signez tous en m??me temps le ou la plus moche, cette personne boiras 2 gorg??es',
  'D??signez tous en m??me temps le ou la plus m??chant/m??chante, cette personne boiras 2 gorg??es',
  'D??signez tous en m??me temps le ou la plus hypocrite, cette personne boiras 2 gorg??es',
  'D??signez tous en m??me temps le ou la plus b??te, cette personne boiras 3 gorg??es',
  'D??signez tous en m??me temps le ou la plus gentil/gentille, cette personne distribueras 4 gorg??es',
  'D??signez tous en m??me temps le ou la fils/fille ?? papa, cette personne boiras 3 gorg??es',
  'D??signez tous en m??me temps le ou la personne qui devra illico presto finir son verre ! Sant?? ?? lui/elle',
  "Le/la plus ??g??/e du groupe choisi un th??me, il/elle commence. Le premier joueur qui r??p??te ou n'a plus d'id??e boit 5 gorg??es",
  "Le/la plus jeune du groupe choisi un th??me, il/elle commence. Le premier joueur qui r??p??te ou n'a plus d'id??e boit 5 gorg??es",
  "Faites un pierre-papier-ciseaux contre la personne qu'il y a ?? votre gauche, le/la perdant/e boit 3 gorg??es. Le/la plus jeune du groupe commence",
  'D??signez tous en m??me temps celui ou celle qui se masturbe beaucoup trop, cette personne boiras 4 gorg??es',
  '5 gorg??es pour tout le monde',
  '2 gorg??es pour tout le monde',
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
    one: "Quel ??ge as-tu ?",
    two: "Quel est le nom de ton animal de compagnie ?",
    three: "Et?? ou hiver ?",
    four: "Mars ou Snickers ?",
    five: "Epelle le mot caca",
  },
  {
    one: "Qui ??tait Marie Curie ?",
    two: "En quelle ann??e est n?? J??sus ?",
    three: "Danse vite fais",
    four: "Quelle est la couleur de tes chaussures ?",
    five: "R??p??te apr??s moi: les chaussettes de l'archiduchesse sont-elles s??ches? Archi-s??ches ?",
  },
  {
    one: "Comment tu t'appelles ?",
    two: "Quelle ann??e vient apr??s l'an 1 avant J-C ?",
    three: "Fais un signe de gang",
    four: "Il a plu aujourd'hui ?",
    five: "Burger ou Pizza ",
  },
  {
    one: "L'ananas dans une pizza c'est ok ou c'est mort ?",
    two: "Sur quel continent se situe la Jama??que ?",
    three: "Dis moi un secret sur toi que personne ne sait",
    four: "Coca ou Pepsi ?",
    five: "Combien de pattes un mille-pattes poss??de-t-il ?",
  },
  {
    one: "Quel est le pr??nom de ta m??re ?",
    two: "Tu fais quoi de la vie ?",
    three: "T'as d??j?? p??t?? en classe ?",
    four: "Chaud ou froid ?",
    five: "Kebab ou tacos ?",
  },
  {
    one: "Messi ou Ronaldo ?",
    two: "Samsung ou Apple ?",
    three: "Qui a tu?? John Fitzgerald Kennedy ?",
    four: "Quel est ton plat pr??f??r?? ?",
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
    timerEl.innerText = "T??rmin?? !";
  }
}
setInterval(diminuerTemps, 1000);



