import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStoreComponent } from './payment-store.component';

describe('PaymentStoreComponent', () => {
  let component: PaymentStoreComponent;
  let fixture: ComponentFixture<PaymentStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentStoreComponent]
    });
    fixture = TestBed.createComponent(PaymentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
