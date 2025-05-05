class Voiture {
    marque: string;
    modele: string;
    anneeFabrication: number;
    kilometrage: number;
  
    constructor(marque: string, modele: string, anneeFabrication: number, kilometrage: number) {
      this.marque = marque;
      this.modele = modele;
      this.anneeFabrication = anneeFabrication;
      this.kilometrage = kilometrage;
    }
  
    afficherDetails(): void {
      console.log(`Marque: ${this.marque}`);
      console.log(`Modèle: ${this.modele}`);
      console.log(`Année de fabrication: ${this.anneeFabrication}`);
      console.log(`Kilométrage: ${this.kilometrage} km`);
      console.log('------------------------');
    }
   
    
    ajouterKilometres(km: number): void {
      if (km > 0) {
        this.kilometrage += km;
      } else {
        console.log("Le nombre de kilomètres ajouté doit être positif.");
      }
    }
  }
  
  
  const voiture1 = new Voiture("BMW", "M3 CS", 2024, 1200);
  const voiture2 = new Voiture("Audi", "RS3", 2025, 1000);
  
  voiture1.afficherDetails();
  voiture2.afficherDetails();
  
  voiture1.ajouterKilometres(100);
  voiture2.ajouterKilometres(50);
  
  voiture1.afficherDetails();
  voiture2.afficherDetails();
  