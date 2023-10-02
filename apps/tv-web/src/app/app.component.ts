import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'tv-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'tv-web';
}
