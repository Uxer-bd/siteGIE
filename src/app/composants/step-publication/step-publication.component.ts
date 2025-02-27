import { Component } from '@angular/core';

@Component({
  selector: 'app-step-publication',
  templateUrl: './step-publication.component.html',
  styleUrls: ['./step-publication.component.css']
})
export class StepPublicationComponent {


  constructor() { }

  ngOnInit(): void {
    const articles = document.querySelectorAll('.publication-article');
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add('visible'); // Ajoute la classe visible avec un délai
      }, index * 300); // Décalage de 300ms pour chaque article
    });
  }
}

