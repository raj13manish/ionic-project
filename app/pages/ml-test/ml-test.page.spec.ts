import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MlTestPage } from './ml-test.page';

describe('MlTestPage', () => {
  let component: MlTestPage;
  let fixture: ComponentFixture<MlTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MlTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
