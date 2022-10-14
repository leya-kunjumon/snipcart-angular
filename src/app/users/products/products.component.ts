import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  SearchText :any;
  currencyCode:any;
  message :any;
  p:number =1;
  products  = [
    
    {id:1, name: 'Black Forest', imag: 'https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9384-scaled.jpg',price:800 },
    { id:2,name: 'White Forest', imag: 'https://cookingfromheart.com/wp-content/uploads/2021/10/Eggless-White-Forest-Cake-3.jpg',price:1800 },
    {id:3, name: 'Kitkat Cake', imag: 'http://cdn.shopify.com/s/files/1/0516/2831/0688/products/0I4A1119_1200x1200.jpg?v=1643135357',price:300 },
    {id:4, name: 'Red Velvet', imag: 'https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake1.jpg?v=1632141306',price:800 },
    {id:5,name:'jelly Cake',imag:'https://bakealish.com/wp-content/uploads/2018/01/Tropical-Jelly-Fruit-Cake-1.jpg',price:1100},
    {id:6,name:'Ferrero Rocher',imag:'data:image/jpeg;base64,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',price:1200},
    {id:7, name: 'Chocolate Cake', imag: 'https://mynamepix.com/images/styles/itm_chocolate-layered-birthday-cake_name_pix_2014-08-18_21-18-41_1.jpg',price:800 },
    {id:8, name: 'Chocolate Coconut Cake', imag: 'data:image/jpeg;base64,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',price:1200 },
    {id:9,name:'Oreo Cake',imag:'https://simshomekitchen.com/wp-content/uploads/2022/07/cookies-and-cream-chocolate-cake.png',price:1100},
  ];
  
  constructor(public share:SharedService,private router:Router,private cartService : CartService,public product:ProductsService) { 
    
  }
  productList : any;
  ngOnInit(): void {
    this.productList = this.product.product;
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
  
  }
  profile(){
    
    this.router.navigate(['profile']);
  }

  addtocart(prod: any){
    this.cartService.addtoCart(prod);
  }

}
