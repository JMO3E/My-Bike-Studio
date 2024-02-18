export class Bike {
  id: number | undefined;
  brand: string | undefined;
  description: string | undefined;
  image: string | undefined;

  Constructor(id: number, brand: string, description: string, image: string) {
    this.id = id;
    this.brand = brand;
    this.description = description;
    this.image = image;
  }
}
