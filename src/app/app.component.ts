import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-profesional-angular';
  imgYugi = 'assets/yugi/1.png';
  ngOnInit(){
    this.getYugImg();
  }

  getYugImg(){
    let rand = Math.random() * 17 + 1;
    rand = Math.floor(rand);
    this.imgYugi = `assets/yugi/${rand}.png`;
  }
}
