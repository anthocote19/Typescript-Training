var Developer = /** @class */ (function () {
    function Developer(nom, prenom, role, competences, salaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.role = role;
        this.competences = competences;
        this.salaire = salaire;
    }
    return Developer;
}());
var Team = /** @class */ (function () {
    function Team(nom, chef) {
        this.nom = nom;
        this.chef = chef;
        this.developpeurs = [];
    }
    Team.prototype.ajouterDeveloppeur = function (dev) {
        this.developpeurs.push(dev);
    };
    Team.prototype.getTachesAssignees = function () {
        return this.developpeurs.reduce(function (acc, d) {
            return acc.concat(d["taches"] || []);
        }, []);
    };
    return Team;
}());
var Task = /** @class */ (function () {
    function Task(nom, description, priorite, estimation, developpeur) {
        if (developpeur === void 0) { developpeur = null; }
        this.nom = nom;
        this.description = description;
        this.priorite = priorite;
        this.estimation = estimation;
        this.developpeur = developpeur;
        this.sousTaches = [];
        this.dependances = [];
        this._etat = "à faire";
        this.historiqueEtat = [];
        this.tachesAssocieesLivrable = [];
    }
    Object.defineProperty(Task.prototype, "etat", {
        get: function () {
            return this._etat;
        },
        set: function (nouvelEtat) {
            this._etat = nouvelEtat;
            this.historiqueEtat.push({ date: new Date(), etat: nouvelEtat });
            this.mettreAJourTacheParente();
        },
        enumerable: false,
        configurable: true
    });
    Task.prototype.ajouterSousTache = function (t) {
        this.sousTaches.push(t);
    };
    Task.prototype.ajouterDependance = function (t) {
        this.dependances.push(t);
    };
    Task.prototype.assignerDeveloppeur = function (dev) {
        this.developpeur = dev;
        if (!dev["taches"])
            dev["taches"] = [];
        dev["taches"].push(this);
    };
    Task.prototype.mettreAJourTacheParente = function () {
        if (this["parent"]) {
            var parent_1 = this["parent"];
            if (parent_1.sousTaches.every(function (t) { return t.etat === "terminée"; })) {
                parent_1.etat = "terminée";
            }
        }
    };
    return Task;
}());
var Deliverable = /** @class */ (function () {
    function Deliverable(nom, description, dateLivraisonPrevue, etat) {
        if (etat === void 0) { etat = "en cours"; }
        this.nom = nom;
        this.description = description;
        this.dateLivraisonPrevue = dateLivraisonPrevue;
        this.etat = etat;
        this.taches = [];
    }
    Deliverable.prototype.ajouterTache = function (t) {
        this.taches.push(t);
        t.tachesAssocieesLivrable.push(this);
    };
    return Deliverable;
}());
var Project = /** @class */ (function () {
    function Project(nom, description, dateDebut, dateFinPrevue, budget, client, methode) {
        this.nom = nom;
        this.description = description;
        this.dateDebut = dateDebut;
        this.dateFinPrevue = dateFinPrevue;
        this.budget = budget;
        this.client = client;
        this.methode = methode;
        this.taches = [];
        this.livrables = [];
    }
    Project.prototype.ajouterTache = function (t) {
        this.taches.push(t);
    };
    Project.prototype.ajouterSousTache = function (parent, sousTache) {
        parent.ajouterSousTache(sousTache);
        sousTache["parent"] = parent;
    };
    Project.prototype.ajouterLivrable = function (l) {
        this.livrables.push(l);
    };
    return Project;
}());
var dev1 = new Developer("Martin", "Lucas", "Frontend", ["React", "TypeScript"], 45000);
var dev2 = new Developer("Dupuis", "Anne", "Backend", ["Node.js", "SQL"], 47000);
var equipe = new Team("Équipe Alpha", dev1);
equipe.ajouterDeveloppeur(dev1);
equipe.ajouterDeveloppeur(dev2);
var projet = new Project("App Mobile", "Création d'une application", "2025-05-01", "2025-12-31", 100000, "ClientX", "Agile");
var t1 = new Task("Connexion", "Créer la page de login", "Haute", 3);
var t2 = new Task("Inscription", "Créer la page d'inscription", "Moyenne", 2);
var t3 = new Task("Validation email", "Envoyer email de validation", "Moyenne", 1);
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
var livrable1 = new Deliverable("Version 1.0", "Prototype fonctionnel", "2025-08-01");
livrable1.ajouterTache(t1);
livrable1.ajouterTache(t2);
projet.ajouterLivrable(livrable1);
var tachesEquipe = equipe.getTachesAssignees();
console.log(tachesEquipe.map(function (t) { return t.nom; }));
