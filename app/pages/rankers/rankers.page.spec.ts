import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RankersPage } from './rankers.page';

describe('RankersPage', () => {
  let component: RankersPage;
  let fixture: ComponentFixture<RankersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RankersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
