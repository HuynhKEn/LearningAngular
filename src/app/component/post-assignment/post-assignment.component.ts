import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { fromEvent} from 'rxjs';
import { map, startWith  } from 'rxjs/operators';
import { LanguageDTO } from 'src/app/model/dto/language.dto';
import { CommonDataService } from 'src/app/service/common-data.service';
import { PaginationModel } from '../customer/pagination-customer/pagination-customer.model';

@Component({
  selector: 'app-post-assignment',
  templateUrl: './post-assignment.component.html',
  styleUrls: ['./post-assignment.component.scss']
})
export class PostAssignmentComponent implements OnInit , AfterViewInit {
  @ViewChild('languageDOM') languageDOM;
  topics: any[];
  posts: any[];
  topicModel: any[];
  postModel: any[];
  languages: LanguageDTO[];
  languageModel: LanguageDTO;
  settingConfig: PaginationModel;
  constructor(
    private commonDataService: CommonDataService,
  ) {
    this.topics = this.commonDataService.topicsData();
    this.posts = this.commonDataService.postOfTopicsData();
    this.languages = this.commonDataService.languageSourceData();
    this.languageModel = this.languages ? this.languages[0] : null;
  }

  ngOnInit(): void {
    this.settingConfig = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      pageSizeList: [5, 10, 25, 50, 100],
      pageSizeDefault: 5
    };
  }
  ngAfterViewInit(): void{
    const languageElement = fromEvent(this.languageDOM.nativeElement, 'selectionChange');
    const topicElement = languageElement.pipe(
      startWith(
        this.languageModel = this.languages[0]
      ),
      map( res => {

      })
    );
  }

  waitValuePagination(event: any): void {
  }

}
