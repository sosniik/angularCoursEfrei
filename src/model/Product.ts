export class Product {
  id!: number;
  name! : string;
  specifications! : Specification;
  picture!: string;

}

export class Specification {
  color!: string;
  weight!: string;
  storage!: string;
  price!: number;

}
