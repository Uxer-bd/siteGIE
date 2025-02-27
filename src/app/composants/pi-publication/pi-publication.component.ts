import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pi-publication',
  templateUrl: './pi-publication.component.html',
  styleUrls: ['./pi-publication.component.css']
})
export class PiPublicationComponent implements OnInit {

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
