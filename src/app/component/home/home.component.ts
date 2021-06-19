import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonDataService } from 'src/app/service/common-data.service';
import { ROUTE_PATH } from '../../config/route-path.config';
/**/



export class SeeMoreDto {
  link: string;
  content: string;
}

export class QuoteDto {
  link: string;
  content: string;
}

export class PostDTO {
  id: number;
  title: string;
  content: string;
  id_parent: number;
  start_date: string;
  end_date: string;
}

export class TopicDTO {
  id: number;
  title: string;
  content: string;
  see_more: SeeMoreDto;
  quote: QuoteDto;
  language: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = ['machine.png', 'python.png', 'deeplearning.jfif'].map(
    (n) => `../../../assets/images/${n}`
  );
  imagesFramework = [
    'caffe-deep-learning.jpg',
    'pytorch.jpg',
    'Tensorflow-.webp',
  ].map((n) => `../../../assets/images/${n}`);
  videos = [];
  videosTransforms = [];
  colorTicTac = true;
  changeColor = setInterval(() => (this.colorTicTac = !this.colorTicTac), 5000);
  posts: PostDTO[] = [];
  topics: TopicDTO[] = [];

  constructor(
    config: NgbCarouselConfig,
    private router: Router,
    private sanitizer: DomSanitizer,
    private commonDataService: CommonDataService
  ) {
    this.topics = this.commonDataService.topicsData();
    this.posts = this.commonDataService.postOfTopicsData();
    this.videos = (this.commonDataService.dataMedia() as any).filter(
      (res) => res.fileType !== 'pdf'
    );
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit(): void {
    // this.videos.forEach(x => this.videosTransforms.push({id:x.id,link:this.sanitizer.bypassSecurityTrustResourceUrl(x.link)}))
  }
  redirect(post): void {
    this.router.navigate([`${ROUTE_PATH.POST}`], {
      state: { res: post },
    });
  }
}
