class Developer {
  nom: string;
  prenom: string;
  role: string;
  competences: string[];
  salaire: number;
  taches: Task[] = [];

  constructor(nom: string, prenom: string, role: string, competences: string[], salaire: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.role = role;
    this.competences = competences;
    this.salaire = salaire;
  }
}

class Team {
  nom: string;
  chef: Developer;
  developpeurs: Developer[] = [];

  constructor(nom: string, chef: Developer) {
    this.nom = nom;
    this.chef = chef;
  }

  ajouterDeveloppeur(dev: Developer): void {
    this.developpeurs.push(dev);
  }

  getTachesAssignees(): Task[] {
    let toutesLesTaches: Task[] = [];
    for (let dev of this.developpeurs) {
      toutesLesTaches = toutesLesTaches.concat(dev.taches);
    }
    return toutesLesTaches;
  }
}

class Task {
  nom: string;
  description: string;
  priorite: string;
  estimation: number;
  developpeur: Developer | null;
  sousTaches: Task[] = [];
  dependances: Task[] = [];
  parent: Task | null = null;
  _etat: string = "à faire";
  historiqueEtat: { date: Date; etat: string }[] = [];
  tachesAssocieesLivrable: Deliverable[] = [];

  constructor(nom: string, description: string, priorite: string, estimation: number, developpeur: Developer | null = null) {
    this.nom = nom;
    this.description = description;
    this.priorite = priorite;
    this.estimation = estimation;
    this.developpeur = developpeur;
  }

  get etat(): string {
    return this._etat;
  }

  set etat(nouvelEtat: string) {
    this._etat = nouvelEtat;
    this.historiqueEtat.push({ date: new Date(), etat: nouvelEtat });
    if (this.parent) {
      const toutesTerminees = this.parent.sousTaches.every(t => t.etat === "terminée");
      if (toutesTerminees) {
        this.parent.etat = "terminée";
      }
    }
  }

  ajouterSousTache(t: Task): void {
    this.sousTaches.push(t);
    t.parent = this;
  }

  ajouterDependance(t: Task): void {
    this.dependances.push(t);
  }

  assignerDeveloppeur(dev: Developer): void {
    this.developpeur = dev;
    dev.taches.push(this);
  }
}

class Deliverable {
  nom: string;
  description: string;
  dateLivraisonPrevue: string;
  etat: string;
  taches: Task[] = [];

  constructor(nom: string, description: string, dateLivraisonPrevue: string, etat: string = "en cours") {
    this.nom = nom;
    this.description = description;
    this.dateLivraisonPrevue = dateLivraisonPrevue;
    this.etat = etat;
  }

  ajouterTache(t: Task): void {
    this.taches.push(t);
    t.tachesAssocieesLivrable.push(this);
  }
}

class Project {
  nom: string;
  description: string;
  dateDebut: string;
  dateFinPrevue: string;
  budget: number;
  client: string;
  methode: string;
  taches: Task[] = [];
  livrables: Deliverable[] = [];

  constructor(nom: string, description: string, dateDebut: string, dateFinPrevue: string, budget: number, client: string, methode: string) {
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFinPrevue = dateFinPrevue;
    this.budget = budget;
    this.client = client;
    this.methode = methode;
  }

  ajouterTache(t: Task): void {
    this.taches.push(t);
  }

  ajouterSousTache(parent: Task, sousTache: Task): void {
    parent.ajouterSousTache(sousTache);
  }

  ajouterLivrable(l: Deliverable): void {
    this.livrables.push(l);
  }
}


const dev1 = new Developer("Martin", "Lucas", "Frontend", ["React", "TypeScript"], 45000);
const dev2 = new Developer("Dupuis", "Anne", "Backend", ["Node.js", "SQL"], 47000);

const equipe = new Team("Équipe Alpha", dev1);
equipe.ajouterDeveloppeur(dev1);
equipe.ajouterDeveloppeur(dev2);

const projet = new Project("App Mobile", "Création d'une application", "2025-05-01", "2025-12-31", 100000, "ClientX", "Agile");

const t1 = new Task("Connexion", "Créer la page de login", "Haute", 3);
const t2 = new Task("Inscription", "Créer la page d'inscription", "Moyenne", 2);
const t3 = new Task("Validation email", "Envoyer email de validation", "Moyenne", 1);

projet.ajouterTache(t1);
projet.ajouterTache(t2);
projet.ajouterSousTache(t1, t3);

t3.assignerDeveloppeur(dev2);
t2.assignerDeveloppeur(dev1);
t1.assignerDeveloppeur(dev1);

t3.etat = "terminée";
t1.etat = "en cours";
t2.etat = "en cours";

t1.etat = "terminée";

const livrable1 = new Deliverable("Version 1.0", "Prototype fonctionnel", "2025-08-01");
livrable1.ajouterTache(t1);
livrable1.ajouterTache(t2);
projet.ajouterLivrable(livrable1);

const tachesEquipe = equipe.getTachesAssignees();
console.log(tachesEquipe.map(t => t.nom));
