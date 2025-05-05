var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(nom, prenom, dateNaissance, email) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.email = email;
    }
    Person.prototype.afficherDetails = function () {
        console.log("Nom: ".concat(this.nom));
        console.log("Pr\u00E9nom: ".concat(this.prenom));
        console.log("Date de naissance: ".concat(this.dateNaissance));
        console.log("Email: ".concat(this.email));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(nom, prenom, dateNaissance, email, numeroEmploye, poste) {
        var _this = _super.call(this, nom, prenom, dateNaissance, email) || this;
        _this.numeroEmploye = numeroEmploye;
        _this.poste = poste;
        return _this;
    }
    Employee.prototype.afficherDetails = function () {
        _super.prototype.afficherDetails.call(this);
        console.log("Num\u00E9ro employ\u00E9: ".concat(this.numeroEmploye));
        console.log("Poste: ".concat(this.poste));
    };
    return Employee;
}(Person));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(nom, prenom, dateNaissance, email, numeroClient) {
        var _this = _super.call(this, nom, prenom, dateNaissance, email) || this;
        _this.numeroClient = numeroClient;
        return _this;
    }
    Customer.prototype.afficherDetails = function () {
        _super.prototype.afficherDetails.call(this);
        console.log("Num\u00E9ro client: ".concat(this.numeroClient));
    };
    return Customer;
}(Person));
var Order = /** @class */ (function () {
    function Order(dateCommande, montant, articles) {
        this.dateCommande = dateCommande;
        this.montant = montant;
        this.articles = articles;
    }
    Order.prototype.afficherDetails = function () {
        console.log("Date de commande: ".concat(this.dateCommande));
        console.log("Montant: ".concat(this.montant));
        console.log("Articles: ".concat(this.articles.join(", ")));
    };
    return Order;
}());
var CustomerOrder = /** @class */ (function (_super) {
    __extends(CustomerOrder, _super);
    function CustomerOrder(dateCommande, montant, articles, numeroClient) {
        var _this = _super.call(this, dateCommande, montant, articles) || this;
        _this.numeroClient = numeroClient;
        return _this;
    }
    CustomerOrder.prototype.afficherDetails = function () {
        _super.prototype.afficherDetails.call(this);
        console.log("Num\u00E9ro client: ".concat(this.numeroClient));
    };
    return CustomerOrder;
}(Order));
var personne = new Person("Dupont", "Marie", "1990-05-15", "marie.dupont@example.com");
personne.afficherDetails();
var employe = new Employee("Durand", "Paul", "1985-10-02", "paul.durand@example.com", 101, "Développeur");
employe.afficherDetails();
var client = new Customer("Martin", "Julie", "1992-03-22", "julie.martin@example.com", 202);
client.afficherDetails();
var commande = new Order("2025-05-01", 150.75, ["Article1", "Article2"]);
commande.afficherDetails();
var commandeClient = new CustomerOrder("2025-05-02", 220.5, ["ProduitA", "ProduitB", "ProduitC"], 202);
commandeClient.afficherDetails();
