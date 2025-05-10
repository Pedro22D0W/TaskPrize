import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizesPage } from './prizes.page';

describe('PrizesPage', () => {
  let component: PrizesPage;
  let fixture: ComponentFixture<PrizesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
