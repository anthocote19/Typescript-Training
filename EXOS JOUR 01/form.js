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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(longueur, largeur) {
        var _this = _super.call(this) || this;
        _this.longueur = longueur;
        _this.largeur = largeur;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.longueur * this.largeur;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.longueur + this.largeur);
    };
    Rectangle.prototype.isSquared = function () {
        return this.longueur === this.largeur;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(rayon) {
        var _this = _super.call(this) || this;
        _this.rayon = rayon;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.rayon * this.rayon;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.rayon;
    };
    return Circle;
}(Shape));
var rectangle = new Rectangle(10, 10);
console.log("Rectangle area:", rectangle.area());
console.log("Rectangle perimeter:", rectangle.perimeter());
console.log("Is square:", rectangle.isSquared());
var circle = new Circle(5);
console.log("Circle area:", circle.area());
console.log("Circle perimeter:", circle.perimeter());
