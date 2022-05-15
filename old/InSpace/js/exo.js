// // Ex 1

// function concatenation(prenom, nom) {
//     console.log("Je m'apelle "+prenom+" <strong>"+nom+"</strong>");
// }

// concatenation('Antoine', 'Griezmann');

// // Ex 2


// function somme(a, b=5) {
//     console.log("La somme de "+a+" par "+b+" est : "+(a+b));
// }

// somme(6,6);

// // Ex 3

// function estIlMajeur(age) {
//     if (age<18) {
//         console.log(false);
//     } else {
//         console.log(true);
//     }
// }

// estIlMajeur(29);

// // Ex 5

// let petit_msg = "Le plus petit nombre est: ";

// function plusPetit(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c){
//         console.log(b);
//     } else if (c < a && c < b){
//         console.log(c);
//     } else {
//         console.log('err');
//     }
// }

// plusPetit(22, 44, 66);

// // Ex 5

// function plusPetit(a, b) {
//     if (a < b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

// plusPetit(22, 44);

// // Ex 6

// let sai = prompt("Entrez une saison.");
// let temp = Number(prompt("Entrez une température."));

// function meteo(saison, température) {
//     if (température <= 1 && température >= -1 && saison == "printemps") {
//         console.log("Nous sommes au "+saison+" et il fait "+température+" degré");
//     } else if (température > 1 || température < -1 && saison == "printemps") {
//         console.log("Nous sommes au "+saison+" et il fait "+température+" degrés");
//     } else if (température <= 1 && température >= -1 && saison != "printemps") {
//         console.log("Nous sommes en "+saison+" et il fait "+température+" degré");
//     } else {
//         console.log("Nous sommes en "+saison+" et il fait "+température+" degrés");
//     }
// }

// meteo(sai, temp);

// Ex 7

// let a = prompt('Ecrivez quelque chose');

// function typeDe(a) {
//     console.log(typeof(a));
// }

// typeDe(a);

// let prenoms = ['Pierre', 'Paul', 'Jacques'];
// let ages = [29, 27, 29, 30];
// let produits = ["livre", 20, "ordinateur", 5, ["magnets", 100]];

// // Affichez avec un document.write : je m'appelle jacques, j'ai 30 ans et j'ai un ordinateur et des magnets

// console.log(`Je m'appelle ${prenoms[2]}, j'ai ${ages[3]}ans, un ${produits[2]} et des ${produits[4][0]}`);

// let Pierre = {'Prénom':'Pierre','Âge':30,'Sport':'Football'};

// for (const propriete in Pierre) {
//     if (propriete == "Âge") {
//         console.log(`<span style="color: red;">Je suis la propriété ${propriete} qui correspond à la valeur ${Pierre[propriete]}</span>`);
//     } else {
//         console.log(`Je suis la propriété ${propriete} qui correspond à la valeur ${Pierre[propriete]}`);
//     }
// }

// let capitale = {"France":"Paris","Allemagne":"Berlin","Italie":"Rome"};

// for (const pays in capitale) {
//     if (pays == "France") {
//         console.log(`La capitale de la ${pays} est ${capitale[pays]}`);
//     } else {
//         console.log(`La capitale de l'${pays} est ${capitale[pays]}`);
//     }
// }

// let pays_population = {
//       'France':67595000,
//       'Suede':9998000,
//       'Suisse':8417000,
//       'Kosovo':1820631,
//       'Malte':434403,
//       'Mexique':122273500,
//       'Allemagne':82800000
// }

// for (const pays in pays_population) {
//     if (pays_population[pays] >= 20000000) {
//         console.log(pays);
//     } else {
//     }
// }

// let personne = {
//     Prenom: ["Jean","Paul","Martin"],
//     Nom: "Macron",
//     Age: "26",
//     Bonjour: function(){
//         for (const val of this.Prenom) {
//             console.log(`Bonjour, je m'appelle ${val} ${this.Nom} et j'ai ${this.Age}ans`);
//         }
//     }
// }

// personne.Bonjour();

// function Utilisateur(nom, age, mail){
//     this.nom = nom;
//     this.age = age;
//     this.mail = mail;
//     this.bonjour = function(){
//         for (const prenom in nom) {
//             console.log(`Bonjour, je m'appelle ${prenom} ${nom[prenom]}, j'ai ${this.age}ans.\nVoici mon email : ${this.mail}`);
//         }
//     }
// }

// let kevin = new Utilisateur({"Kevin":"Aliane"}, 25, "kevin_aliane@gmail.com");

// kevin.bonjour();

// class Personne {
//     constructor(n, p, a){
//         this.nom = n;
//         this.prenom = p;
//         this.age = a;
//     }
// }

// class Produit {
//     constructor(n, c, p){
//         this.nom = n;
//         this.couleur = c;
//         this.prix = p;
//     }
// }

// function achat(personne, produit) {
//     console.log(`${personne.nom} a acheté 3 ${produit.nom} de couleur ${produit.couleur} à ${produit.prix}€`);
// }

// let robert = new Personne("Robert", "Alaux", 34);
// let maxime = new Personne("Maxime", "Belfort", 22);
// let alain = new Personne("Alain", "Provost", 59);

// let pantalon = new Produit("pantalons", "bleue", 120);
// let chemise = new Produit("chemises", "rouge", 180);
// let chaussette = new Produit("chaussettes", "noire", 30);


// achat(robert, pantalon);
// achat(maxime, chemise);
// achat(alain, chaussette);

