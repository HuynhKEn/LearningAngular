import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonDataService } from 'src/app/service/common-data.service';
import { GLOBAL_CONSTANT } from '../../constant/global-constant';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  formTopicGroup: FormGroup;
  topics = [];
  addTopicStatus = true;
  editTopicStatus = false;
  contentTopicValue: string;
  titleTopicValue: string;
  addOrEdit: boolean;
  idTopic: number;
  seeMoreValue = {};
  quoteValue = {};
  GLOBAL: any;
  constructor(private formBuilder: FormBuilder, private commonDataService: CommonDataService) {
    this.topics = this.commonDataService.topicsData();
    this.formTopicGroup = this.formBuilder.group({
      selectedValue: [this.topics[0]],
      titleTopic: ['', Validators.required],
      contentTopic: ['', Validators.required],
      seeLink: [''],
      quoteLink: [''],
      seeContent: [''],
      quoteContent: ['']
    });
  }

  ngOnInit(): void {
    this.GLOBAL = GLOBAL_CONSTANT;
  }



  get topicData(): any{
    return this.formTopicGroup.controls;
  }

  addTopic(): void {
    this.editTopicStatus = false;
    this.addTopicStatus = true;
    this.addOrEdit = true;
  }
  editTopic(): void {
    this.addTopicStatus = false;
    this.editTopicStatus = true;
    this.addOrEdit = false;
  }
  deleteTopic(): void {
    this.idTopic = this.topicData.selectedValue.value.id;
  }


  updateTopicElements(): void{
    this.topicData.titleTopic.setValue(
      this.topicData.selectedValue.value.title
    );

    this.topicData.contentTopic.setValue(
      this.topicData.selectedValue.value.content
    );


    this.topicData.seeLink.setValue(
      this.topicData.selectedValue.value.see_more.link
    );

    this.topicData.quoteLink.setValue(
      this.topicData.selectedValue.value.quote.link
    );

    this.topicData.seeContent.setValue(
      this.topicData.selectedValue.value.see_more.content
    );

    this.topicData.quoteContent.setValue(
      this.topicData.selectedValue.value.quote.content
    );

  }




  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  onSubmit(): void {
    // this.addOrEdit = True is add , False is edit
    if (this.addOrEdit) {
      const jsonData = {
        id: 4,
        title: this.topicData.titleTopic.value,
        content: this.topicData.contentTopic.value,
        see_more: {link: this.topicData.seeLink.value, content: this.topicData.seeContent.value},
        quote: {link: this.topicData.quoteLink.value, content: this.topicData.quoteContent.value},
      };

      this.topics.push(jsonData);
      this.formTopicGroup.controls.selectedValue.patchValue(jsonData);
    } else {
      // this.topicData.selectedValue.value is json with format  {id,title,value}
      this.idTopic = this.topicData.selectedValue.value.id;
      this.titleTopicValue = this.topicData.selectedValue.value.title;
      this.contentTopicValue = this.topicData.contentTopic.value;
      this.seeMoreValue = {link: this.topicData.seeLink.value, content: this.topicData.seeContent.value};
      this.quoteValue = {link: this.topicData.quoteLink.value, content: this.topicData.quoteContent.value};
    }
  }
}
