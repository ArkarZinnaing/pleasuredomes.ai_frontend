import { Component } from '@angular/core';
import { SharedService } from '../../share/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private shareService: SharedService) {
    this.lazyLoad()
  }

  lazyLoad() {
    this.shareService.loading = true
    setTimeout(() => {
      this.shareService.loading = false;
    }, 1500);

  }
}
