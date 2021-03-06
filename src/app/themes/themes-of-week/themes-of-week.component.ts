import { Component, OnInit } from '@angular/core';
import { Message } from '../../view-models/message';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-themes-of-week',
  templateUrl: './themes-of-week.component.html',
  styleUrls: ['./themes-of-week.component.scss']
})
export class ThemesOfWeekComponent implements OnInit {

  themes: Message[];
  highlightedTheme: Message;

  constructor(private router: Router, private  apiService:  ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.themes = data['themes'].filter((theme) => !theme.isHighlighted && theme.isPublished);
      this.highlightedTheme = data['themes'].find((theme) => theme.isHighlighted && theme.isPublished);
    });
  }
}
