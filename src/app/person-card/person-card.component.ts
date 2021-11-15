import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  imgSrc='https://image.tmdb.org/t/p/w500/';

  @Input() person:any;

  constructor() { }

  ngOnInit(): void {
  }

}
