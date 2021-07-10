import {Component, Input, OnInit} from '@angular/core';
import {CatalogMainCategory} from "../../../../../../core/classes/main/catalog/catalog-header/catalog-main-category";
import {MatDialog} from "@angular/material/dialog";
import {AddSubCategoryDialogComponent} from "../../dialogs/add-sub-category-dialog/add-sub-category-dialog.component";
import {UpdatedEventProviderService} from "../../../../../../core/services/main/catalog/updated-event-provider.service";
import {CatalogSubCategory} from "../../../../../../core/classes/main/catalog/catalog-header/catalog-subcategory";
import {SubCategoryStandardProviderService} from "../../../../../../core/services/main/catalog/sub-category-standard-provider.service";
import {EditHelperService} from "../../../../../../core/services/main/catalog/products/edit-helper.service";

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html'
})
export class EditSubCategoryComponent implements OnInit {

  @Input() mainCategories: CatalogMainCategory[] = [];
  selectedMainCategory: CatalogMainCategory = new CatalogMainCategory();
  selectedSubCategory: CatalogSubCategory = new CatalogSubCategory();

  constructor(private dialog: MatDialog,
              private updatedEvent: UpdatedEventProviderService,
              private editHelper: EditHelperService,
              private subCategoryProvider: SubCategoryStandardProviderService) {}

  ngOnInit(): void {
  }

  onAdd() {
    let subCategoryToAdd = new CatalogSubCategory();
    subCategoryToAdd.parentMainCategory = this.selectedMainCategory;
    const dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
      width: '24rem',
      data: {edit: false, subCategory: subCategoryToAdd}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onEdit() {
    this.selectedSubCategory.parentMainCategory = this.selectedMainCategory;
    const dialogRef = this.dialog.open(AddSubCategoryDialogComponent, {
      width: '24rem',
      data: {edit: true, subCategory: this.selectedSubCategory}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onAfterChange(result);
    });
  }

  onDelete() {
    if (!this.selectedSubCategory) return;

    let deleteFunc = this.subCategoryProvider.deleteSubCategory.bind(
      this.subCategoryProvider, this.selectedSubCategory?.catalogSubCategoryId ?? 0);
    let onEnd = this.onAfterChange.bind(this, true);
    this.editHelper.deleteAskingPermission(deleteFunc, this.selectedSubCategory.name, onEnd, onEnd);
  }

  resetSelectedSubCategory() {
    this.selectedSubCategory = new CatalogSubCategory();
  }

  onAfterChange(result: boolean) {
    if(!result) return;
    this.updatedEvent.updatedProductRelatedDataSubject.next();
    this.selectedMainCategory = new CatalogMainCategory();
    this.selectedSubCategory = new CatalogSubCategory();
  }
}
