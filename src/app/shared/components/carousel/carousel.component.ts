import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() informationCarousel: Array<any> = []

  mainMenu: {
    informationCarouse: Array<any>
  } = { informationCarouse: [] }

  constructor() { }


  ngOnInit(): void {
    this.mainMenu.informationCarouse = this.informationCarousel
  }

}


