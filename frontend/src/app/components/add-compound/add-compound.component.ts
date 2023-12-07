import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Compound,CompoundResponse } from '../../types/compound';

@Component({
  selector: 'app-add-compound',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css']
})
export class AddCompoundComponent {
  name:string='';
  image:string='';
  description:string='';
  @Output() addCompound:EventEmitter<any>=new EventEmitter();

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
    this.addCompound.emit(obj);
    this.name='';
    this.image='';
    this.description='';
  }

}
