import { Component, OnInit, Input } from '@angular/core';
import { FakeApiService } from 'src/app/fake-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;

  constructor(
    private fakeApiService: FakeApiService
  ) { }

  ngOnInit() {
  }

  onLike(id: any) {
    console.log(id)
    this.fakeApiService.incrementLikes(id).subscribe((updatedCard) => {
      if (updatedCard) {
        this.card.likes = updatedCard.likes;
      } else {
        console.error('Card não encontrado.');
      }
    });
  }

  onShare(){
    // TODO: abrir o link do seu linkedin
    const linkedInUrl = 'https://www.linkedin.com/in/ttdavalo/';
    window.open(linkedInUrl, '_blank');
  }
}
