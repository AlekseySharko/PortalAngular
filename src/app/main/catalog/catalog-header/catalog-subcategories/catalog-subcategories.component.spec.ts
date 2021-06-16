import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSubcategoriesComponent } from './catalog-subcategories.component';

describe('CatalogSubcategoriesComponent', () => {
  let component: CatalogSubcategoriesComponent;
  let fixture: ComponentFixture<CatalogSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogSubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
