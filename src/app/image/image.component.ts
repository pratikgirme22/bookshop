import { Component, OnInit } from '@angular/core';
import { ImageService } from './image.service';
import { Image } from './image';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  images: any ;


  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.showList();
  }

  public showList(): Observable<any []> {
    this.images=this.imageService.getList().subscribe((response:any)=>{
      this.images=response.data;
    });
    return this.images ;
  }

  displayedColumns: string[] = ['Id', 'Name', 'Year', 'Color','Value'];
  

}
