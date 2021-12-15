import { Component, OnInit } from '@angular/core';
import { MagicService } from 'src/app/services/magic.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.css'],
})
export class TestPage implements OnInit {
  currentMagicNumber?: number;

  constructor(private magicService: MagicService) {}

  ngOnInit(): void {
    this.magicService.getMagicNumber().subscribe((number) => {
      this.currentMagicNumber = number;
    });
  }
}
