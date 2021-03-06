import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../../environments/environment';
import { ThemeSubMenuComponent } from './theme-sub-menu.component';
import { RouterModule } from '@angular/router';
import { BASE_PATH } from '../../variables';


describe('ThemeSubMenuComponent', () => {
  let component: ThemeSubMenuComponent;
  let fixture: ComponentFixture<ThemeSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterModule
      ],
      declarations: [
        ThemeSubMenuComponent
      ],
      providers: [
        { provide: BASE_PATH, useValue: environment.apiUrl },
        { provide: 'BASE_NEWS_API_URL', useValue: environment.newsApiUrl }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
