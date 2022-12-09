import { Component, Input } from '@angular/core';
import {Product} from "../../model/Product";

// let quantity = 0
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() product!: Product;

  quantity = 0
  localStorage = localStorage
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

