import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  openGitHub(){
    const gitHubUrl = 'https://github.com/thayano';
    window.open(gitHubUrl, '_blank');
  }
}
