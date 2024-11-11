import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CyberTestPage } from './cyber-test.page';

describe('CyberTestPage', () => {
  let component: CyberTestPage;
  let fixture: ComponentFixture<CyberTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
