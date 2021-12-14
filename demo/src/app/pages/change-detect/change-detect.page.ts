import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.page.html',
  styleUrls: ['./change-detect.page.css']
})
export class ChangeDetectPage implements OnInit {

  name = 'JP';

  ngOnInit() {
    setTimeout(() => {
      this.name += 'iets anders';
    }, 2000);
  }
}
