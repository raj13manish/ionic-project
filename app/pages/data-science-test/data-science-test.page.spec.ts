import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataScienceTestPage } from './data-science-test.page';

describe('DataScienceTestPage', () => {
  let component: DataScienceTestPage;
  let fixture: ComponentFixture<DataScienceTestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DataScienceTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
