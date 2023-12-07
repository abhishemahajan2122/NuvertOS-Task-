import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Compound,CompoundResponse } from '../../types/compound';

@Component({
  selector: 'app-compound-item',
  templateUrl: './compound-item.component.html',
  styleUrls: ['./compound-item.component.css']
})
export class CompoundItemComponent {
  @Input() compound:Compound;
  @Output() deleteClick:EventEmitter<any>=new EventEmitter();

  deleteCompound(){
    console.log(this.compound.id,'d')
    this.deleteClick.emit(this.compound.id);
  }

}
