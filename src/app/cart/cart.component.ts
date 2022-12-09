import {Component, Injectable} from '@angular/core';
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
  sessionStorage = sessionStorage
  private product: any;


  subtotal(){
    let subtotal = 0
    let nbItem = sessionStorage.getItem(Product.name)


    // let coucou = this.product.specifications.price
    // console.log("efehfef",coucou)

  }
  // let quantity = localStorage.getItem()
  removeItem({$event, product}: { $event: MouseEvent, product: any}) {

    // localStorage.removeItem(product.name, String(quantity)){
    //
    // }
  }
}
