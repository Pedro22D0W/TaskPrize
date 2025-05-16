import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizeEditPage } from './prize-edit.page';

describe('PrizeEditPage', () => {
  let component: PrizeEditPage;
  let fixture: ComponentFixture<PrizeEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
