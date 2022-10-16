import { Component, OnInit } from '@angular/core';
import { ProductsViewService } from 'src/app/services/products-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less']
})
export class ProductViewComponent implements OnInit {

  constructor(public view:ProductsViewService) { }

  ngOnInit(): void {
  }

}
