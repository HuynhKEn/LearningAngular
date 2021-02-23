import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ROUTE_PATH } from '../../config/route-path.config';
import { CommonDataService } from 'src/app/service/common-data.service';
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
  videosTranforms = [];
  colorTicTac = true;
  changeColor = setInterval(() => (this.colorTicTac = !this.colorTicTac), 5000);
  posts: object = [];
  topics: object = [];

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
    // this.videos.forEach(x => this.videosTranforms.push({id:x.id,link:this.sanitizer.bypassSecurityTrustResourceUrl(x.link)}))
  }
  redirect(post): void {
    this.router.navigate([`${ROUTE_PATH.POST}`], {
      state: { res: post },
    });
  }
}
