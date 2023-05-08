import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {
  @Input() editMode : boolean = false;
  doEdit : boolean = false;
  
  lastName: string = "Doe";
  firstName : string = "John";
  hireDate : Date = new Date('2020-01-01');
  

  getYearsSinceHired() {
    var hireYear = this.hireDate.getFullYear();
    var nowYear = new Date().getFullYear();
    return nowYear - hireYear;
  }

  parseDate(eventData: Event): Date  {
    const dateString = (eventData.target as HTMLInputElement).value;
    if (dateString) {
        return new Date(dateString);
    }
    return new Date();
}
}
