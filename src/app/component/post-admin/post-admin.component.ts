import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/service/common-data.service';
import { GLOBAL_CONSTANT } from '../../constant/global-constant';


@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.scss']
})

export class PostAdminComponent implements OnInit, DoCheck {
  formPostGroup: FormGroup;
  topics: any[];
  postsOfTopics: any[] = [];
  copyPostsOfTopics = [];
  editPostStatus: boolean;
  addPostStatus = true;
  deletePostStatus: number;
  addOrEditDelete: number;
  oldSubSelectValue: string;
  contentValue: string;
  GLOBAL: any;
  constructor(
    private fromBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private commonDataService: CommonDataService
    ) {
    this.topics = this.commonDataService.topicsData();
    this.postsOfTopics = this.commonDataService.postOfTopicsData();
    this.formPostGroup = this.fromBuilder.group({
      titleAdd: ['', Validators.required],
      content: ['', Validators.required],
      selectedValue: [this.topics[0]],
      subSelectValue: [''],
    });
   }

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
    this.oldSubSelectValue = this.formPostGroup.controls.subSelectValue.value;
  }
  ngDoCheck(): void{
    if (!!this.formPostGroup.controls.subSelectValue.value && this.oldSubSelectValue !==  this.formPostGroup.controls.subSelectValue.value){
      this.formPostGroup.controls.content.setValue(this.formPostGroup.controls.subSelectValue.value.content);
      this.oldSubSelectValue  = this.formPostGroup.controls.subSelectValue.value;
    }
  }

  addPost(): void {
    this.editPostStatus = false;
    this.deletePostStatus = 0;
    this.addPostStatus = true;
    this.addOrEditDelete = 0;
  }
  editPost(): void {
    this.addPostStatus = false;
    this.deletePostStatus = 0;
    this.editPostStatus = true;
    this.addOrEditDelete = 1;

  }
  deletePost(): void {
    this.editPostStatus = false;
    this.addPostStatus = false;
    this.deletePostStatus = 1;
    this.addOrEditDelete = 2;
  }
  updatePostElements(): void{
    this.copyPostsOfTopics = this.postsOfTopics.filter(param => param.id_parent === this.formPostGroup.controls.selectedValue.value.id);
    this.formPostGroup.controls.subSelectValue.patchValue(this.copyPostsOfTopics[0]);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onSubmit(): void{
    // Add
    if (this.addOrEditDelete === 0){
      console.log(this.formPostGroup.controls.titleAdd.value,
        this.formPostGroup.controls.content.value,
        this.formPostGroup.controls.selectedValue.value.id);
    }
    // Edit
    if (this.addOrEditDelete === 1){
      console.log(this.formPostGroup.controls.subSelectValue.value,
        this.formPostGroup.controls.content.value,
        this.formPostGroup.controls.selectedValue.value.id);
    }
    // Delete
    if (this.addOrEditDelete === 2){
      console.log(this.formPostGroup.controls.subSelectValue.value,
        this.formPostGroup.controls.selectedValue.value.id);

    }
  }

}
