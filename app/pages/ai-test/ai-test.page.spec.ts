import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiTestPage } from './ai-test.page';

describe('AiTestPage', () => {
  let component: AiTestPage;
  let fixture: ComponentFixture<AiTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AiTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
