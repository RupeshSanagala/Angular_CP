import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemserviceComponent } from './itemservice.component';

describe('ItemserviceComponent', () => {
  let component: ItemserviceComponent;
  let fixture: ComponentFixture<ItemserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
