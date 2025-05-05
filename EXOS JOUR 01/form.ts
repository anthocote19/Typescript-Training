abstract class Shape {
    abstract area(): number;
    abstract perimeter(): number;
  }
  
  class Rectangle extends Shape {
    constructor(private longueur: number, private largeur: number) {
      super();
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
    constructor(private rayon: number) {
      super();
    }
  
    area(): number {
      return Math.PI * this.rayon * this.rayon;
    }
  
    perimeter(): number {
      return 2 * Math.PI * this.rayon;
    }
  }
  
  const rectangle = new Rectangle(10, 10);
  console.log("Rectangle area:", rectangle.area());
  console.log("Rectangle perimeter:", rectangle.perimeter());
  console.log("Is square:", rectangle.isSquared());
  
  const circle = new Circle(5);
  console.log("Circle area:", circle.area());
  console.log("Circle perimeter:", circle.perimeter());
  