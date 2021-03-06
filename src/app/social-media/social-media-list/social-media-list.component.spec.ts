import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialMediaListComponent } from './social-media-list.component';
import { HqDashboardSubMenuComponent } from '../../core/hq-dashboard-sub-menu/hq-dashboard-sub-menu.component';
import { environment } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BASE_PATH } from '../../variables';

describe('SocialMediaListComponent', () => {
  let component: SocialMediaListComponent;
  let fixture: ComponentFixture<SocialMediaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        HttpClientModule
       ],
      declarations: [ 
        SocialMediaListComponent,
        HqDashboardSubMenuComponent
      ],
      providers: [
        { provide: BASE_PATH, useValue: environment.apiUrl },
        { provide: 'BASE_NEWS_API_URL', useValue: environment.newsApiUrl }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
