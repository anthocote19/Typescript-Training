var Voiture = /** @class */ (function () {
    function Voiture(marque, modele, anneeFabrication, kilometrage) {
        this.marque = marque;
        this.modele = modele;
        this.anneeFabrication = anneeFabrication;
        this.kilometrage = kilometrage;
    }
    Voiture.prototype.afficherDetails = function () {
        console.log("Marque: ".concat(this.marque));
        console.log("Mod\u00E8le: ".concat(this.modele));
        console.log("Ann\u00E9e de fabrication: ".concat(this.anneeFabrication));
        console.log("Kilom\u00E9trage: ".concat(this.kilometrage, " km"));
        console.log('------------------------');
    };
    Voiture.prototype.ajouterKilometres = function (km) {
        if (km > 0) {
            this.kilometrage += km;
        }
        else {
            console.log("Le nombre de kilomètres ajouté doit être positif.");
        }
    };
    return Voiture;
}());
var voiture1 = new Voiture("BMW", "M3 CS", 2024, 1200);
var voiture2 = new Voiture("Audi", "RS3", 2025, 1000);
voiture1.afficherDetails();
voiture2.afficherDetails();
voiture1.ajouterKilometres(100);
voiture2.ajouterKilometres(50);
voiture1.afficherDetails();
voiture2.afficherDetails();
