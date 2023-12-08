import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Compound,CompoundResponse } from '../../types/compound';

@Component({
  selector: 'app-edit-compound',
  templateUrl: './edit-compound.component.html',
  styleUrls: ['./edit-compound.component.css']
})
export class EditCompoundComponent {
  
  @Input() name:string;
  @Input() image:string;
  @Input() description:string;
  @Output() editCompound:EventEmitter<any>=new EventEmitter();

  onSubmit(){
    if(this.name==='' || this.image==='' || this.description===''){
      alert('Please fill all fields');
      return ;
    }
    const obj:Compound={
      name:this.name,
      image:this.image,
      description:this.description
    }
    this.editCompound.emit(obj);
  }






}
