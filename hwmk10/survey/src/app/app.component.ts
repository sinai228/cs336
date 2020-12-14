import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'survey';

  public results: number;

  //gotResults function
  gotResult(results): void {
    console.log(results);
    document.getElementById('results').innerHTML += results + ", ";
  }

}
