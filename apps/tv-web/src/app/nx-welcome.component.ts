import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tv-web-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `Nx Welcome Component works`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
