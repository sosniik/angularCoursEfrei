export class Product {
  id!: number;
  name! : string;
  specifications! : Specification;
  picture!: string;
  quantity!: number;

}

export class Specification {
  color!: string;
  weight!: string;
  storage!: string;
  price!: string;

}
