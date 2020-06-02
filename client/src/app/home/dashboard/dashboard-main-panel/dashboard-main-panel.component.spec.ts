import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainPanelComponent } from './dashboard-main-panel.component';

describe('DashboardMainPanelComponent', () => {
  let component: DashboardMainPanelComponent;
  let fixture: ComponentFixture<DashboardMainPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
