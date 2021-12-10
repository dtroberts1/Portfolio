import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var GitHubCalendar;
@Component({
  selector: 'app-github-calendar',
  templateUrl: './github-calendar.component.html',
  styleUrls: ['./github-calendar.component.scss']
})
export class GithubCalendarComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    
    GitHubCalendar(".calendar", "dtroberts1", {
      responsive: true,
      tooltips: true,
    });
  }

}
