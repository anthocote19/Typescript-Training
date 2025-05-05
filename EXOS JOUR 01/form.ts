abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;
}

class Rectangle extends Shape {
  longueur: number;
  largeur: number;

  constructor(longueur: number, largeur: number) {
    super();
    this.longueur = longueur;
    this.largeur = largeur;
  }

  area(): number {
    return this.longueur * this.largeur;
  }

  perimeter(): number {
    return 2 * (this.longueur + this.largeur);
  }

  isSquared(): boolean {
    return this.longueur === this.largeur;
  }
}

class Circle extends Shape {
  rayon: number;

  constructor(rayon: number) {
    super();
    this.rayon = rayon;
  }

  area(): number {
    return Math.PI * this.rayon * this.rayon;
  }

  perimeter(): number {
    return 2 * Math.PI * this.rayon;
  }
}


const rectangle = new Rectangle(10, 10);
console.log("Aire du rectangle :", rectangle.area());
console.log("Périmètre du rectangle :", rectangle.perimeter());
console.log("Est un carré :", rectangle.isSquared());

const circle = new Circle(5);
console.log("Aire du cercle :", circle.area());
console.log("Périmètre du cercle :", circle.perimeter());
