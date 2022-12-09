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

  subtotal(price: number, quantity: number):number{
    return price * quantity
  }


  // getLocalSto():any{
  //   let tab = this.getKey()
  //   let productTab = []
  //   for (let x in tab){
  //     const product = localStorage.getItem(tab[x])
  //     if(product != null)
  //       productTab.push(JSON.parse(product))
  //   }
  //   return productTab
  // }
  //
  // getKey():any{
  //   let tab = []
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let y = localStorage.key(i)
  //     tab.push(y)
  //   }
  //   return tab
  // }

  // let quantity = localStorage.getItem()
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
      const parseData = JSON.parse(getData)
      parseData.quantity += 1
      localStorage.setItem(product.name, JSON.stringify(parseData))
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
