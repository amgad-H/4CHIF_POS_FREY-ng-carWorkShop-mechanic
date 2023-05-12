import { Component, Input , Output , EventEmitter } from '@angular/core';
import { MechanicComponent } from '../mechanic/mechanic.component';
import { Mechanic } from '../shared/mechanic-model';

@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.css']
})
export class MechanicListComponent {
  isNewMech : Boolean = false;

  mechanics : Mechanic[] = [
    {"lastName":"Hammash",
     "firstName":"Amgad",
     "hireDate": new Date ('2020-01-01')}
  ]
  addMechanic(m : Mechanic){
    this.mechanics.push(m)
  }
  deleteMechanic(idx : number){
    this.mechanics.splice(idx, 1);
  }
  selectedMechanic : Mechanic|null = null;
  selectedMechanicId : number = -1;
}
