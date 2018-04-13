import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-buttons',
  templateUrl: './add-buttons.component.html',
  styleUrls: ['./add-buttons.component.css']
})
export class AddButtonsComponent implements OnInit {
  @Output() add = new EventEmitter<object>();

  feedbackEnabled : boolean;
  processing : boolean;
  error = null;
  addToFirstNumber : number;
  addToSecondNumber : number;


  constructor() { }

  // --- The function sets the values of the propieties of the class
  ngOnInit() {
    this.feedbackEnabled = false;
    this.processing = false;
  }

  // --- The function checks if the form has been correctly completed (just first number required) and sends the data to the parent page component. 
  // --- Also changes de values of the propeties of the class (to allow the feedback comments appear and not allow more submitions)
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = {
        addToFirstNumber : this.addToFirstNumber,
        addToSecondNumber : this.addToSecondNumber
      };

      this.add.emit(data)
    }
  }
}
