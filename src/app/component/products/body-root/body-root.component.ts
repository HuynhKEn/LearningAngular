import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ContentService} from "../../../service/products/content/content.service";

@Component({
  selector: 'app-body-root',
  templateUrl: './body-root.component.html',
  styleUrls: ['./body-root.component.scss']
})
export class BodyRootComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  constructor(public contentService: ContentService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  @HostListener('document:mousemove')
  onMouseMove() {
    let isSupp = this.videoPlayer.nativeElement.canPlayType("video/mp4")
    if (window.matchMedia("(max-width: 414px)").matches) {
      if (isSupp == "") {
        this.videoPlayer.nativeElement.src =  'static/videos/background-shoe-web_417x765_android.webm'
      } else {
        this.videoPlayer.nativeElement.src = 'static/videos/background-shoe-web_417x765_android.mp4'
      }
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      if (isSupp == "") {
        this.videoPlayer.nativeElement.src =  'static/videos/background-shoe-web_417x765_android.webm'
      } else {
        this.videoPlayer.nativeElement.src = 'static/videos/background-shoe-web_768x1024.mp4'
      }
    }
    this.videoPlayer.nativeElement.play();
  }


}
