import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CompoundService } from 'src/app/services/compound.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Compound, CompoundResponse } from '../../types/compound';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  // compound: Compound;
  id: string;
  showAddTask: boolean = false;
  @Input() compound: Compound;
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private compoundService: CompoundService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.compoundService.getOneCompound(this.id).subscribe(
      (response) => {
        this.compound = response;
      },
      (error) => this.router.navigate(['/400'])
    );
  }

  onClick() {
    this.showAddTask = !this.showAddTask;
  }

  editCompound(obj: Compound) {
    this.compoundService.editCompound(obj, this.id).subscribe(
      (res) => {
        this.compoundService.getOneCompound(this.id).subscribe(
          (response) => {
            this.compound = response;
          },
          (error) => this.router.navigate(['/400'])
        );
      },
      (error) => this.router.navigate(['/400'])
    );
  }

  // deleteCompound() {
  //   console.log(this.compound.id, 'd');
  //   this.deleteClick.emit(this.compound.id);
  //   this.router.navigate(['/']);
  // }
  deleteCompound() {
    console.log(this.compound.id, 'hello');
    this.compoundService.deleteCompound(this.compound.id).subscribe(
      (res) => {
        this.router.navigate(['/']);
      },
      (error) => this.router.navigate(['/400'])
    );
  }
}
