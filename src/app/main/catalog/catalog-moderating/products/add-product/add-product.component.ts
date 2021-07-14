import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../../../../core/classes/main/catalog/products/product";
import {ProductStandardProviderService} from "../../../../../core/services/main/catalog/product-standard-provider.service";
import {Subscription} from "rxjs";
import {DialogMessageHandlerService} from "../../../../../shared/dialogs/dialog-message-handler.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {
  productPostSubscription: Subscription = new Subscription();
  constructor(private productProvider: ProductStandardProviderService,
              private errorHandler: DialogMessageHandlerService) { }

  ngOnInit(): void {
  }

  onProductSave(product: Product) {
    let productCategoryId: number = product.productCategory?.productCategoryId ?? 0;
    product.productCategory = null;
    this.productPostSubscription = this.productProvider.postProduct(product, productCategoryId).subscribe(
      () => {},
      error => {
        this.errorHandler.onHttpError(error);
      },
      () => {
        this.errorHandler.onHttpSuccess("Product has been added");
      }
    );
  }

  ngOnDestroy(): void {
    this.productPostSubscription.unsubscribe();
  }
}
