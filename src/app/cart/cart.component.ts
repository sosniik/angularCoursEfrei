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
  localStorage = localStorage
  @Input() product!: Product;

  subtotal():any{
   let test = this.getLocalSto()
    for(var x in test){
      console.log(test[x].specifications.price)
      // let ok = test[x].specifications.price
      //
      // let ll = test[x].specifications.price * test[x].quantity
      //
      // console.log(test[x].name,ll)

      //
    //return test[x].specifications.price * test[x].quantity.toString()
    }

  }


  getKey():any{
    let tab = []
    for (let i = 0; i < localStorage.length; i++) {
      let y = localStorage.key(i)
      tab.push(y)
    }
    return tab
  }

  getLocalSto(): any {
    let tab = this.getKey()
    let productTab = []
    for (let x in tab) {
      const product = localStorage.getItem(tab[x])
      if (product != null)
        productTab.push(JSON.parse(product))
    }
    return productTab
  }
}

