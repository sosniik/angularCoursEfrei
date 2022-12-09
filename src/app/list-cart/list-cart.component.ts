import {Component, Injectable, Input} from '@angular/core';
import {Product, Specification} from "../../model/Product";

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent {
  @Input() product!: Product;
  sessionStorage = localStorage
  quantity = 0

  subtotal(){
    let subtotal = 0
    let nbItem = localStorage.getItem(Product.name)


    // let coucou = this.product.specifications.price
    // console.log("efehfef",coucou)

  }
  // let quantity = localStorage.getItem()
  addItem({$event, product}: { $event: MouseEvent, product: any }) {
    console.log("leo")
    console.log(localStorage.getItem(this.quantity.toString()))

    // Number(localStorage.getItem(product.name)) +=1
    this.quantity += 1
    localStorage.setItem(product.name, String(this.quantity))
  }

  removeItem({$event, product}: { $event: MouseEvent, product: any }) {
    if(this.quantity <=0){
      localStorage.setItem(product.name, String(0))
    }else {
      this.quantity -= 1
      localStorage.setItem(product.name, String(this.quantity))
    }
  }


}