import { Component, DoCheck, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare const compilers : any


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit,DoCheck {
  post :string;
  content:string;
  idVideo = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  version = '...';
  private player;
  statusPlaying = new BehaviorSubject(true);
  statusPlaying$ = this.statusPlaying.asObservable()
  hiddenTag: boolean = true

  constructor() {
   }

  ngOnInit(): void {
    compilers()
    if ( localStorage.getItem("post") !== null ){
      if ( !!window.history.state.res ){
        this.post = window.history.state.res.title
        this.content = window.history.state.res.content
        localStorage.setItem("post",this.post)
        localStorage.setItem("content",this.content)
      }
      else{
        this.post = localStorage.getItem("post")
        this.content = localStorage.getItem("content")
      }


    }
    else {
      this.post = window.history.state.res.title
      this.content = window.history.state.res.content
      localStorage.setItem("post",this.post)
      localStorage.setItem("content",this.content)
    }

  }



  onStateChange(event,typeMedia) {
    if(typeMedia === "video"){
      const timeWatched = (this.player.getCurrentTime()/this.player.getDuration())*100
      if(timeWatched >= 80) {
        this.changeStatusMedia(true);
      }
      else{
        this.changeStatusMedia(false);
      }
    }

  }
  changeStatusMedia(statusPlaying:boolean){
    this.statusPlaying.next(statusPlaying)
  }
  savePlayer(player) {
    this.player = player;
  }
  ngDoCheck(){
    this.statusPlaying$.subscribe(res => {
      if(res) {
        this.hiddenTag = false
      }
      else{
        this.hiddenTag = true
      }
    })
  }

}
