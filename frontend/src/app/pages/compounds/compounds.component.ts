import { Component, OnInit } from '@angular/core';
import { CompoundService } from 'src/app/services/compound.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Compound, CompoundResponse } from '../../types/compound';

@Component({
  selector: 'app-compounds',
  templateUrl: './compounds.component.html',
  styleUrls: ['./compounds.component.css'],
})
export class CompoundsComponent implements OnInit {
  showAddTask: boolean = false;
  limit: number = 18;
  compounds: Compound[] = [];
  totalCount: number;
  currPage: number = 1;
  totalPage: number;

  constructor(
    private compoundService: CompoundService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    console.log('hi');
    this.route.queryParams.subscribe((params) => {
      if (
        (Object.keys(params).length === 1 && !params['pg']) ||
        Object.keys(params).length > 1
      ) {
        this.router.navigate(['/404']);
        return;
      }
      this.currPage = Number(params['pg']) || 1;
      this.compoundService.getCompound(this.currPage, this.limit).subscribe(
        (response) => {
          this.compounds = response.rows;
          if (this.compounds.length === 0) {
            this.router.navigate(['/400']);
          }
          this.totalCount = response.count;
          this.totalPage = Math.ceil(this.totalCount / this.limit);
        },
        (error) => this.router.navigate(['/400'])
      );
    });
  }

  onClick() {
    this.showAddTask = !this.showAddTask;
  }

  addCompound(obj: Compound) {
    this.compoundService.addCompound(obj).subscribe(
      (response) => {
        this.totalCount = this.totalCount + 1;
        this.currPage = Math.ceil(this.totalCount / this.limit);
        this.compounds = [...this.compounds, response];
        this.router.navigate([''], { queryParams: { pg: this.currPage } });
      },
      (error) => this.router.navigate(['/400'])
    );
  }

  deleteCompound(id: any) {
    this.compoundService.deleteCompound(id).subscribe(
      (res) => {
        this.totalCount = this.totalCount - 1;
        if (this.currPage === this.totalPage && this.compounds.length === 1) {
          this.currPage = this.currPage - 1;
        }
        this.compoundService.getCompound(this.currPage, this.limit).subscribe(
          (response) => {
            this.compounds = response.rows;
            this.totalCount = response.count;
            this.totalPage = Math.ceil(this.totalCount / this.limit);
          },
          (error) => this.router.navigate(['/400'])
        );
        this.router.navigate([''], { queryParams: { pg: this.currPage } });
      },
      (error) => this.router.navigate(['/400'])
    );
  }
}
