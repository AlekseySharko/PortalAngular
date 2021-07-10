import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {AddMainCategoryDialogComponent} from "../../dialogs/add-main-category-dialog/add-main-category-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MainCategoryStandardProviderService} from "../../../../../../core/services/main/catalog/main-category-standard-provider.service";
import {UpdatedEventProviderService} from "../../../../../../core/services/main/catalog/updated-event-provider.service";
import {EditHelperService} from "../../../../../../core/services/main/catalog/products/edit-helper.service";

@Component({
  selector: 'app-edit-main-category',
  templateUrl: './edit-main-category.component.html'
})
export class EditMainCategoryComponent implements OnInit {
  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  constructor(private dialog: MatDialog,
              private editHelper: EditHelperService,
              private mainCategoryProvider: MainCategoryStandardProviderService,
              private updatedEvent: UpdatedEventProviderService ) {}

  ngOnInit(): void {
  }

  onAdd() {
    const dialogRef = this.dialog.open(AddMainCategoryDialogComponent, {
      width: '24rem',
      data: {edit: false, mainCategory: new CatalogMainCategory()}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onEdit() {
    const dialogRef = this.dialog.open(AddMainCategoryDialogComponent, {
      width: '24rem',
      data: {edit: true, mainCategory: this.selectedMainCategory}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onDelete() {
    if(!this.selectedMainCategory) return;

    let deleteFunc = this.mainCategoryProvider.deleteCategory.bind(
      this.mainCategoryProvider, this.selectedMainCategory?.catalogMainCategoryId ?? 0);
    let onEnd = this.onAfterChange.bind(this, true);
    this.editHelper.deleteAskingPermission(deleteFunc, this.selectedMainCategory.name, onEnd, onEnd);
  }

  canEditOrDelete() {
    return this.selectedMainCategory.catalogMainCategoryId > 0;
  }

  onAfterChange(result: boolean) {
    if(!result) return;
    this.updatedEvent.updatedProductRelatedDataSubject.next();
    this.selectedMainCategory = new CatalogMainCategory();
  }
}
