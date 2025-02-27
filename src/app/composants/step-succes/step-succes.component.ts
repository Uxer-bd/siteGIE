import { Component, OnInit } from '@angular/core';

interface Participant {
  title: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-step-succes',
  templateUrl: './step-succes.component.html',
  styleUrls: ['./step-succes.component.css']
})
export class StepSuccesComponent implements OnInit {
  showPopup = false;
  popupTitle = '';
  popupContent = '';
  popupImage = '';

  // Définition du type participants avec l'interface
  participants: { [key: string]: Participant } = {
      leila: {
          title: 'Leila Salifou',
          content: `A fashion designer by training, Leila Salifou has been involved in the catering business for several years now...`,
          image: 'assets/img/Id1.jpg' // Chemin vers l'image de Leila
      },
      habibout: {
          title: 'Habibout',
          content: `Akouélé Ekoué Hettah, owner of a clothing boutique 
          in Lomé, started her shop with limited business knowledge, or 
          as she would say “blindly, by trial and error”. However, 
          after taking the Personal Initiative Training course, 
          she has become an accomplished entrepreneur.
          Having gained credibility in her business environment
          and vis-à-vis her customers and partners, she was able to 
          obtain financing for her business much more easily. “When it comes
          to providing financing, we only think of banks and microfinance institutions, 
          but after my training I realized that suppliers, friends, and relatives can
          also be sources of financing,” she said.
          A constant pursuit of innovation is one of Akouélé’s most 
          important attributes as it enables her “to stand out among her competitors.”
          Today she is adding her personal touches to wedding dresses that she has purchased from 
          her suppliers, to attract more customers. “We need to have innovative products, creative ideas. 
          We need to propose extra special items to appeal to our customers,” she says.
          Akouélé has become more ambitious since her training and now has bigger dreams.
          Her boutique began to seem too small to her, so she moved her business to a more prestigious location on a boulevard in Totsi, a western suburb of Lomé. She has even turned her eyes to the international market, with a boutique already open in Benin and another under way in Ghana.
          Not only is Akouélé’s business growing, but so are her ambitions.`,
          image: 'assets/img/inf.jpeg' // Chemin vers l'image de Habibout
      },
      yeski: {
          title: 'Yeski',
          content: `Description de Yeski...`, // Ajoutez le contenu pour Yeski
          image: 'assets/img/Id2.jpg' // Chemin vers l'image de Yeski
      },
      akouele: {
          title: 'Akouélé',
          content: `Description de Akouélé...`, // Ajoutez le contenu pour Akouélé
          image: 'assets/img/Id2.jpg' // Chemin vers l'image de Akouélé
      },
  };

  ngOnInit(): void {
    // Initialize anything if necessary, for example:
    console.log('Component Initialized');
  }

  // Function to show info
  showInfo(person: string) {
    const participant = this.participants[person];
    if (participant) {
      this.popupTitle = participant.title;
      this.popupContent = participant.content;
      this.popupImage = participant.image;
      this.showPopup = true;
    } else {
      console.error('Participant not found:', person);
    }
  }

  // Function to close popup
  closePopup() {
    this.showPopup = false;
    this.popupTitle = '';
    this.popupContent = '';
    this.popupImage = '';
  }
}
