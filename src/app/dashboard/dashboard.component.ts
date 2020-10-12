import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from '../sevice/api.service';
import { HttpServieService } from '../sevice/http-servie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public Editor = ClassicEditor;
  heroes: any;
  list: any;
  
  constructor(private heroService:ApiService,private apiService:HttpServieService) { 
    this.Editor.defaultConfig = {
      toolbar: {
        items: [
          'heading',
          '|',
          'bold',
          'italic',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'insertTable',
          '|',
          'undo',
          'redo'
        ]
      },
      image: {
        toolbar: [
          'imageStyle:full',
          'imageStyle:side',
          '|',
          'imageTextAlternative'
        ]
      },
      table: {
        contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
      },
      language: 'en'
    };

  }

  ngOnInit() {
   this.apiService.getMeh().subscribe((res: any[]) => {
        console.log(res,"result");
         this.list = res['hits'];
        // console.log("this.resul", this.list)
      })

  }
  toggled = false;
  slideOpen: any = false;

  onToggle(){
    
  }
    changeSlide(): void {
      this.toggled = !this.toggled;
      this.slideOpen = !this.slideOpen;
  }
 
}
