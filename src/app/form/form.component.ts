import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable} from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('formRef') form;
  username  = "John";
  locations = ["home", "away"];
  constructor() { }

  ngOnInit() {
  }

  public onSubmit(formValue){
    console.log(formValue);
  }

  ngAfterViewInit(){
    Observable.combineLatest(
      this.form.statusChanges,
      this.form.valueChanges,
      (status, value) => ({status, value})
    ).filter(({status}) => status === 'VALID')
      .subscribe(({value}) => console.table(value))
  }

}
