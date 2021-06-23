import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  titleContentClass = "titleContent";
  productClass = "product";
  nameProductClass = "nameProduct";
  priceProductClass = "priceProduct";
  btnAddCartClass = "btn-add-cart";
  image = "image";
  img = ["assets/images/iphone-11-white-200-org.png"];
  img1 = ["assets/images/samsung-galaxy-s21-xam-200x200-org.png"];

  constructor() { }

  ngOnInit(): void {
  }
  message = "The product has been added to cart"
  onAddProductClick() {
    alert(this.message);
}

}
