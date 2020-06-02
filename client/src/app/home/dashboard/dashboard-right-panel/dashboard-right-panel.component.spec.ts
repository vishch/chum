import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRightPanelComponent } from './dashboard-right-panel.component';

describe('DashboardRightPanelComponent', () => {
  let component: DashboardRightPanelComponent;
  let fixture: ComponentFixture<DashboardRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
