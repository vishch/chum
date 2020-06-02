import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardLeftPanelComponent } from './dashboard/dashboard-left-panel/dashboard-left-panel.component';
import { DashboardRightPanelComponent } from './dashboard/dashboard-right-panel/dashboard-right-panel.component';
import { DashboardMainPanelComponent } from './dashboard/dashboard-main-panel/dashboard-main-panel.component';
import { PostComponent } from './dashboard/post/post.component';
import { FeedComponent } from './dashboard/feed/feed.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardLeftPanelComponent,
    DashboardRightPanelComponent,
    DashboardMainPanelComponent,
    PostComponent,
    FeedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
