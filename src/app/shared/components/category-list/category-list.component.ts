import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryModel} from "../../models/category.model";
import {FormControl} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories$!: Observable<CategoryModel[]>;
  searchCtrl!: FormControl;
  loading$!:Observable<boolean>;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
  }

  onSearch() {

  }
}
