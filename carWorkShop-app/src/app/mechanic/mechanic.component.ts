import { Component, Input } from '@angular/core';
import { Mechanic } from '../shared/mechanic-model';
import {MechanicListComponent} from "../mechanic-list/mechanic-list.component";


@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent {
  @Input() isNew : Boolean = false;
  @Input() mechanic : Mechanic = new Mechanic();
  @Input() editMode : boolean = true;
  doEdit : boolean = false;

  constructor(public mechaniclist : MechanicListComponent) {}
  getYearsSinceHired() {
    var hireYear = this.mechanic.hireDate.getFullYear();
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
  changeMechanic(){
    this.doEdit = false;
    if(this.isNew){
      this.mechaniclist.addMechanic(this.mechanic);
      this.mechaniclist.isNewMech = false;
    }
  }
}
