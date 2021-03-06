import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemeSubMenuComponent } from '../../core/theme-sub-menu/theme-sub-menu.component'
import { ThemeListComponent } from './theme-list.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { BASE_PATH } from '../../variables';

describe('ThemeListComponent', () => {
  let component: ThemeListComponent;
  let fixture: ComponentFixture<ThemeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        RouterTestingModule,
        HttpClientModule,
       ],
      declarations: [ 
        ThemeListComponent,
        ThemeSubMenuComponent,
      ],
      providers: [
        { provide: BASE_PATH, useValue: environment.apiUrl },
        { provide: 'BASE_NEWS_API_URL', useValue: environment.newsApiUrl }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
