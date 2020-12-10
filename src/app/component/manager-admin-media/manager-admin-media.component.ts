import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-admin-media',
  templateUrl: './manager-admin-media.component.html',
  styleUrls: ['./manager-admin-media.component.scss']
})
export class ManagerAdminMediaComponent implements OnInit {
  videos = [
    {id:1,
      link:"https://cors-anywhere.herokuapp.com/https://bugs.python.org/file47781/Tutorial_EDIT.pdf",
      topic:"100",videoTime:100,fileType:"pdf",
      thumb: ""
    },
    {id:2,
      link:"https://cors-anywhere.herokuapp.com/http://anh.cs.luc.edu/python/hands-on/3.1/Hands-onPythonTutorial.pdf",
      topic:"100",videoTime:100,fileType:"pdf",
      thumb: ""},
    {id:3,
      link:"https://cors-anywhere.herokuapp.com/https://alex.smola.org/drafts/thebook.pdf",
      topic:"100",videoTime:100,fileType:"pdf",
      thumb: ""
    },
    {id:4,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",
      thumb: ""
    },
    {id:5,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",
      thumb: ""
    },
    {id:6,
      link:"../../../assets/videos/demo.mp4",
      topic:"100",videoTime:100,fileType:"video",
      thumb: ""
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  settingTable(){
    const columnsDisplay = ["NO","TOPIC","DURATION","FILE_TYPE"];
    const tunrOnactionEvent = true;
    const dataSrc = this.videos
    return {columns:columnsDisplay,action : tunrOnactionEvent,data:dataSrc}
  }


}
