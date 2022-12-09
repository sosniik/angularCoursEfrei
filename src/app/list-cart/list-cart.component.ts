import {Component, Input} from '@angular/core';
import {Product} from "../../model/Product";

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent {
  @Input() product!: Product;
  sessionStorage = localStorage


  subtotal(name: string): any {
    const getData = localStorage.getItem(name)
    if (getData != null) {
      const product = JSON.parse(getData)
      let tmp = 0
      if (product != null) {
        return tmp + Number(product.specifications.price) * product.quantity
      }
    }
  }


  addItem({$event, product}: { $event: MouseEvent, product: any }) {
    let tab = []
    for (let i = 0; i < localStorage.length; i++) {
      let y = localStorage.key(i)
      tab.push(y)
    }
    const getData = localStorage.getItem(product.name)
    if (tab.length == 0) {
      product.quantity += 1
      localStorage.setItem(product.name, JSON.stringify(product))
    } else {
      for (let x = 0; x < 5; x++) {
        for (var p in tab) {
          if (product.name != tab[p]) {
            if (product.quantity == 0) {
              product.quantity += 1
              localStorage.setItem(product.name, JSON.stringify(product))
            }
          }
        }
      }
    }
    if (getData != null) {
      const parseData = JSON.parse(getData)
      parseData.quantity += 1
      localStorage.setItem(product.name, JSON.stringify(parseData))
    }
  }

  removeItem({$event, product}: { $event: MouseEvent, product: any }) {
    const getData = localStorage.getItem(product.name)
    if (getData != null) {
      const parseData = JSON.parse(getData)
      if (parseData.quantity >= 1) {
        parseData.quantity -= 1
        localStorage.setItem(product.name, JSON.stringify(parseData))
      }
    }
  }


}
