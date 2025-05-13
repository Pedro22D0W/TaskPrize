import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizeAddPage } from './prize-add.page';

describe('PrizeAddPage', () => {
  let component: PrizeAddPage;
  let fixture: ComponentFixture<PrizeAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
