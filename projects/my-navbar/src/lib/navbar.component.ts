import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { INavItem } from './models/navbar.model';
@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  @Input() logo = '';

  @Input() items: INavItem[] = [];

  currentPath = '';

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({
        next: (event) => {
          this.currentPath = (event as any).url.split('?')[0];
        }
      });
   }

  navigateTo(url: string | undefined): void {
    if (!url) { return; }
    this.router.navigateByUrl(url);
  }

}
