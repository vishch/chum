import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeftPanelComponent } from './dashboard-left-panel.component';

describe('DashboardLeftPanelComponent', () => {
  let component: DashboardLeftPanelComponent;
  let fixture: ComponentFixture<DashboardLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
