import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-show-item',
  templateUrl: './card-show-item.component.html',
  styleUrls: ['./card-show-item.component.scss']
})
export class CardShowItemComponent implements OnInit {
  videos = [
    {id:1,
      link:"https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf",
      topic:"100",videoTime:100,fileType:"pdf",thumb: "https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf"
    },
    {id:2,
      link:"https://cors-anywhere.herokuapp.com/http://anh.cs.luc.edu/python/hands-on/3.1/Hands-onPythonTutorial.pdf",
      topic:"100",videoTime:100,fileType:"pdf",thumb: "https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf"
    },
    {id:3,
      link:"https://cors-anywhere.herokuapp.com/https://alex.smola.org/drafts/thebook.pdf",
      topic:"100",videoTime:100,fileType:"pdf",thumb: "https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf"
    },
    {id:4,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",thumb: ""
    },
    {id:5,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",thumb: ""
    },
    {id:6,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",thumb: ""
    },
    {id:7,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",thumb: ""
    },
    {id:8,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",thumb: ""
    },
    {id:9,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",thumb: ""
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
