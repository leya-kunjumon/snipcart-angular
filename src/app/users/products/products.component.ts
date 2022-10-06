import { Component, OnInit } from '@angular/core';
// interface Products{
//   name :string;
//   imag :string;
//   price :number;
// }
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  // public prod :Products = {
  //   name:'Ferrero',
  //   imag :'https://eviltwin.kitchen/wp-content/uploads/2018/02/Nutella-Ferrero-Rocher-Chocolate-Cake-27.jpg',
  //   price:1000,
    


  // } 
  products  = [
    
    { name: 'Black Forest', imag: 'https://bakewithshivesh.com/wp-content/uploads/2021/05/IMG_9384-scaled.jpg',price:800 },
    { name: 'White Forest', imag: 'https://cookingfromheart.com/wp-content/uploads/2021/10/Eggless-White-Forest-Cake-3.jpg',price:800 },
    {name:'jelly Cake',imag:'https://bakealish.com/wp-content/uploads/2018/01/Tropical-Jelly-Fruit-Cake-1.jpg',price:1100},
    {name:'Ferrero Rocher',imag:'data:image/jpeg;base64,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',price:1200}
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}