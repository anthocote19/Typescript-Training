class Person {
    constructor(
      private nom: string,
      private prenom: string,
      private dateNaissance: string,
      private email: string
    ) {}
  
    afficherDetails(): void {
      console.log(`Nom: ${this.nom}`);
      console.log(`Prénom: ${this.prenom}`);
      console.log(`Date de naissance: ${this.dateNaissance}`);
      console.log(`Email: ${this.email}`);
    }
  }
  
  class Employee extends Person {
    constructor(
      nom: string,
      prenom: string,
      dateNaissance: string,
      email: string,
      private numeroEmploye: number,
      private poste: string
    ) {
      super(nom, prenom, dateNaissance, email);
    }
  
    afficherDetails(): void {
      super.afficherDetails();
      console.log(`Numéro employé: ${this.numeroEmploye}`);
      console.log(`Poste: ${this.poste}`);
    }
  }
  
  class Customer extends Person {
    constructor(
      nom: string,
      prenom: string,
      dateNaissance: string,
      email: string,
      private numeroClient: number
    ) {
      super(nom, prenom, dateNaissance, email);
    }
  
    afficherDetails(): void {
      super.afficherDetails();
      console.log(`Numéro client: ${this.numeroClient}`);
    }
  }
  
  class Order {
    constructor(
      private dateCommande: string,
      private montant: number,
      private articles: string[]
    ) {}
  
    afficherDetails(): void {
      console.log(`Date de commande: ${this.dateCommande}`);
      console.log(`Montant: ${this.montant}`);
      console.log(`Articles: ${this.articles.join(", ")}`);
    }
  }
  
  class CustomerOrder extends Order {
    constructor(
      dateCommande: string,
      montant: number,
      articles: string[],
      private numeroClient: number
    ) {
      super(dateCommande, montant, articles);
    }
  
    afficherDetails(): void {
      super.afficherDetails();
      console.log(`Numéro client: ${this.numeroClient}`);
    }
  }
  
  const personne = new Person("Dupont", "Marie", "1990-05-15", "marie.dupont@example.com");
  personne.afficherDetails();
  
  const employe = new Employee("Durand", "Paul", "1985-10-02", "paul.durand@example.com", 101, "Développeur");
  employe.afficherDetails();
  
  const client = new Customer("Martin", "Julie", "1992-03-22", "julie.martin@example.com", 202);
  client.afficherDetails();
  
  const commande = new Order("2025-05-01", 150.75, ["Article1", "Article2"]);
  commande.afficherDetails();
  
  const commandeClient = new CustomerOrder("2025-05-02", 220.5, ["ProduitA", "ProduitB", "ProduitC"], 202);
  commandeClient.afficherDetails();
  