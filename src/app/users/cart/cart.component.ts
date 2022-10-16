import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,public product:ProductsService) { }

  ngOnInit(): void {
    console.log('lll')
     this.products = this.cartService.getProducts()
    // .subscribe(res=>{
    //   console.log('koo')
    //   this.products = res;
    //   console.log(this.products)
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
   
  }
  removeItem(item: any){
      this.cartService.removeCartItem(item);
    }
  emptycart(){
      this.cartService.removeAllCart();
    }
  }


