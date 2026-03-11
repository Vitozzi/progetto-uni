import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerDashPage } from './manager-dash.page';

describe('ManagerDashPage', () => {
  let component: ManagerDashPage;
  let fixture: ComponentFixture<ManagerDashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
