import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfleMainPage } from './profle-main.page';

describe('ProfleMainPage', () => {
  let component: ProfleMainPage;
  let fixture: ComponentFixture<ProfleMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfleMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
