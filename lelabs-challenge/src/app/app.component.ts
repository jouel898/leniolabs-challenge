import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lelabs-challenge';
  public smallScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([ `(max-width: 720px)`])
      .subscribe((state: BreakpointState) => {
        this.smallScreen = state.matches;
      });

      this.router.events.subscribe(() => {
        if (this.smallScreen) {
          this.sidenav.close();
        }
      })
  }

}
