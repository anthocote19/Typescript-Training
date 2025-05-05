class Developer {
    constructor(
      public nom: string,
      public prenom: string,
      public role: string,
      public competences: string[],
      public salaire: number
    ) {}
  }
  
  class Team {
    public developpeurs: Developer[] = [];
  
    constructor(public nom: string, public chef: Developer) {}
  
    ajouterDeveloppeur(dev: Developer): void {
      this.developpeurs.push(dev);
    }
  
    getTachesAssignees(): Task[] {
        return this.developpeurs.reduce((acc: Task[], d) => {
          return acc.concat(d["taches"] || []);
        }, []);
      }
      
  }
  
  class Task {
    public sousTaches: Task[] = [];
    public dependances: Task[] = [];
    private _etat: string = "à faire";
    public historiqueEtat: { date: Date; etat: string }[] = [];
    public tachesAssocieesLivrable: Deliverable[] = [];
  
    constructor(
      public nom: string,
      public description: string,
      public priorite: string,
      public estimation: number,
      public developpeur: Developer | null = null
    ) {}
  
    get etat(): string {
      return this._etat;
    }
  
    set etat(nouvelEtat: string) {
      this._etat = nouvelEtat;
      this.historiqueEtat.push({ date: new Date(), etat: nouvelEtat });
      this.mettreAJourTacheParente();
    }
  
    ajouterSousTache(t: Task): void {
      this.sousTaches.push(t);
    }
  
    ajouterDependance(t: Task): void {
      this.dependances.push(t);
    }
  
    assignerDeveloppeur(dev: Developer): void {
      this.developpeur = dev;
      if (!dev["taches"]) dev["taches"] = [];
      dev["taches"].push(this);
    }
  
    mettreAJourTacheParente(): void {
      if (this["parent"]) {
        const parent = this["parent"] as Task;
        if (parent.sousTaches.every(t => t.etat === "terminée")) {
          parent.etat = "terminée";
        }
      }
    }
  }
  
  class Deliverable {
    public taches: Task[] = [];
  
    constructor(
      public nom: string,
      public description: string,
      public dateLivraisonPrevue: string,
      public etat: string = "en cours"
    ) {}
  
    ajouterTache(t: Task): void {
      this.taches.push(t);
      t.tachesAssocieesLivrable.push(this);
    }
  }
  
  class Project {
    public taches: Task[] = [];
    public livrables: Deliverable[] = [];
  
    constructor(
      public nom: string,
      public description: string,
      public dateDebut: string,
      public dateFinPrevue: string,
      public budget: number,
      public client: string,
      public methode: string
    ) {}
  
    ajouterTache(t: Task): void {
      this.taches.push(t);
    }
  
    ajouterSousTache(parent: Task, sousTache: Task): void {
      parent.ajouterSousTache(sousTache);
      sousTache["parent"] = parent;
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
  