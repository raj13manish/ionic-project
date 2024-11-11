import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebTestPage } from './web-test.page';

describe('WebTestPage', () => {
  let component: WebTestPage;
  let fixture: ComponentFixture<WebTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
