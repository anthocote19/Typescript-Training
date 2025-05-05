class Person {
  nom: string;
  prenom: string;
  dateNaissance: string;
  email: string;

  constructor(nom: string, prenom: string, dateNaissance: string, email: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.email = email;
  }

  afficherDetails() {
    console.log("Nom: " + this.nom);
    console.log("Prénom: " + this.prenom);
    console.log("Date de naissance: " + this.dateNaissance);
    console.log("Email: " + this.email);
  }
}

class Employee extends Person {
  numeroEmploye: number;
  poste: string;

  constructor(nom: string, prenom: string, dateNaissance: string, email: string, numeroEmploye: number, poste: string) {
    super(nom, prenom, dateNaissance, email);
    this.numeroEmploye = numeroEmploye;
    this.poste = poste;
  }

  afficherDetails() {
    super.afficherDetails();
    console.log("Numéro employé: " + this.numeroEmploye);
    console.log("Poste: " + this.poste);
  }
}

class Customer extends Person {
  numeroClient: number;

  constructor(nom: string, prenom: string, dateNaissance: string, email: string, numeroClient: number) {
    super(nom, prenom, dateNaissance, email);
    this.numeroClient = numeroClient;
  }

  afficherDetails() {
    super.afficherDetails();
    console.log("Numéro client: " + this.numeroClient);
  }
}

class Order {
  dateCommande: string;
  montant: number;
  articles: string[];

  constructor(dateCommande: string, montant: number, articles: string[]) {
    this.dateCommande = dateCommande;
    this.montant = montant;
    this.articles = articles;
  }

  afficherDetails() {
    console.log("Date de commande: " + this.dateCommande);
    console.log("Montant: " + this.montant);
    console.log("Articles: " + this.articles.join(", "));
  }
}

class CustomerOrder extends Order {
  numeroClient: number;

  constructor(dateCommande: string, montant: number, articles: string[], numeroClient: number) {
    super(dateCommande, montant, articles);
    this.numeroClient = numeroClient;
  }

  afficherDetails() {
    super.afficherDetails();
    console.log("Numéro client: " + this.numeroClient);
  }
}


let personne = new Person("Dupont", "Marie", "1990-05-15", "marie.dupont@example.com");
personne.afficherDetails();

let employe = new Employee("Durand", "Paul", "1985-10-02", "paul.durand@example.com", 101, "Développeur");
employe.afficherDetails();

let client = new Customer("Martin", "Julie", "1992-03-22", "julie.martin@example.com", 202);
client.afficherDetails();

let commande = new Order("2025-05-01", 150.75, ["Article1", "Article2"]);
commande.afficherDetails();

let commandeClient = new CustomerOrder("2025-05-02", 220.5, ["ProduitA", "ProduitB", "ProduitC"], 202);
commandeClient.afficherDetails();
