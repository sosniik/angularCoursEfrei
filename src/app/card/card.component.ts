import { Component, Input } from '@angular/core';
import {Product} from "../../model/Product";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() product!: Product;
  localStorage = localStorage
  addItem({$event, product}: { $event: MouseEvent, product: any }) {
    let tab = []
    for (let i = 0; i < localStorage.length; i++) {
      let y = localStorage.key(i)
      tab.push(y)
    }
    const getData = localStorage.getItem(product.name)
    if(tab.length == 0){
      product.quantity += 1
      localStorage.setItem(product.name, JSON.stringify(product))
    }
    else{
      for (let x = 0; x < 5; x++){
        for (var p in tab){
          if(product.name != tab[p]){
            if(product.quantity == 0){
              product.quantity += 1
              localStorage.setItem(product.name, JSON.stringify(product))
            }
          }
        }
      }
    }
    if(getData != null){
      const toto2 = JSON.parse(getData)
      toto2.quantity += 1
      localStorage.setItem(product.name, JSON.stringify(toto2))
    }
  }

  removeItem({$event, product}: { $event: MouseEvent, product: any }) {
    const getData = localStorage.getItem(product.name)
    if(getData != null){
      const parseData = JSON.parse(getData)
      if(parseData.quantity >= 1){
        console.log(parseData.quantity)
        parseData.quantity -= 1
        localStorage.setItem(product.name, JSON.stringify(parseData))
      }
    }
  }
}
