import { Component } from '@angular/core';
import { SharedService } from './share/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pleasuredomes_ai_fontend';

  constructor(
    public shareService: SharedService
  ) {

  }
}
