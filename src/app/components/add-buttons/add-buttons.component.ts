import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-buttons',
  templateUrl: './add-buttons.component.html',
  styleUrls: ['./add-buttons.component.css']
})
export class AddButtonsComponent implements OnInit {
  @Output() add = new EventEmitter<object>();

  addToFirstNumber : number;
  addToSecondNumber : number;


  constructor() { }

  ngOnInit() {
  }

}
