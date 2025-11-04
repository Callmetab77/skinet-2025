import { Component, input } from '@angular/core';
import { Product } from '../../../shared/models/products';
import { MatCardContent, MatCard, MatCardActions } from "@angular/material/card";
import { CurrencyPipe } from '@angular/common';
import { MatIcon } from "@angular/material/icon";
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-product-item',
  imports: [
    MatCard,
    MatCardContent,
    CurrencyPipe,
    MatCardActions,
    MatButton,
    MatIcon
],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  product = input<Product>();
}
