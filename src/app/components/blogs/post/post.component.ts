import { Component, OnInit } from '@angular/core';
declare const compilers: any;


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: string;
  content: string;
  idVideo = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  version = '...';

  constructor() {
   }

  ngOnInit(): void {
    compilers();
    if ( localStorage.getItem('post') !== null ){
      if ( !!window.history.state.res ){
        this.post = window.history.state.res.title;
        this.content = window.history.state.res.content;
        localStorage.setItem('post', this.post);
        localStorage.setItem('content', this.content);
      }
      else{
        this.post = localStorage.getItem('post');
        this.content = localStorage.getItem('content');
      }


    }
    else {
      this.post = window.history.state.res.title;
      this.content = window.history.state.res.content;
      localStorage.setItem('post', this.post);
      localStorage.setItem('content', this.content);
    }

  }




}
