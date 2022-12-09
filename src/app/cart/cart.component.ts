import {Component, Injectable, Input} from '@angular/core';
import {Product, Specification} from "../../model/Product";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() product!: Product;
  sessionStorage = localStorage
  quantity = 0
  products!: Product[];

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: "iPhone 12",
        specifications: {
          color: "black",
          weight: "250g",
          storage: "256GB",
          price: 1000,
        },
        picture: "assets/img/iphone12.png"
      },
      {
        id: 2,
        name: "Airpods",
        specifications: {
          color: "white",
          weight: "50g",
          storage: "N/A",
          price: 200
        },
        picture: "assets/img/airpodsPro.png"
      },
      {
        id: 3,
        name: "Samsung S22",
        specifications: {
          color: "black",
          weight: "250g",
          storage: "512GB",
          price: 900
        },
        picture: "assets/img/samsungS22.png"
      },
      {
        id: 4,
        name: "Samsung Note10",
        specifications: {
          color: "black",
          weight: "250g",
          storage: "256GB",
          price: 950
        },
        picture: "assets/img/samsungNote10.png"
      },
      {
        id: 5,
        name: "Phone 14",
        specifications: {
          color: "white",
          weight: "250g",
          storage: "256GB",
          price: 1300
        },
        picture: "assets/img/iphone14.png"
      }
    ]
  }
}
