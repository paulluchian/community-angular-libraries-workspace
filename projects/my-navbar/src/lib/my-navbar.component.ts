import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-navbar',
  template: `
    <p>
      my-navbar works!
    </p>
  `,
  styles: [
  ]
})
export class MyNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
