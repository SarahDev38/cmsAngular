import {Component, OnInit} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {CategoryModel} from "../../models/category.model";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrls: ['./category-single.component.scss']
})
export class CategorySingleComponent implements OnInit {
  category$!: Observable<CategoryModel>;
  $id!:number;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.$id = +this.route.snapshot.params['id'];
    this.category$ = this.route.params.pipe(
      switchMap(params => this.categoryService.getCategoryById(this.$id)
      ));
  }

  onGoBack() {
    this.router.navigateByUrl('/barrages');
  }
}
