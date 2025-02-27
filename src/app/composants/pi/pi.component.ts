import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.css']
})
export class PiComponent implements OnInit {
  constructor() {
    // Activation de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    // Animation d'apparition pour chaque section au défilement
    this.animateSections();
  }

  private animateSections(): void {
    gsap.from("#impactSection .section-title", { 
      duration: 1.5, 
      y: 50, 
      opacity: 0, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#impactSection",
        start: "top 80%",
      }
    });

    gsap.from("#impactSection p", { 
      duration: 1.5, 
      y: 30, 
      opacity: 0, 
      ease: "power4.out", 
      delay: 0.3, 
      scrollTrigger: {
        trigger: "#impactSection",
        start: "top 80%",
      }
    });

    gsap.from("#piContent h3", { 
      duration: 1.2, 
      scale: 0.9, 
      opacity: 0, 
      rotation: -10, 
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#piContent",
        start: "top 80%",
      }
    });

    gsap.from("#piContent p", { 
      duration: 1.2, 
      x: -30, 
      opacity: 0, 
      stagger: 0.3, 
      ease: "power2.out", 
      scrollTrigger: {
        trigger: "#piContent",
        start: "top 80%",
      }
    });

    gsap.from("#piContent .image-container img", { 
      duration: 1.4, 
      scale: 0.85, 
      opacity: 0, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#piContent .image-container",
        start: "top 80%",
      }
    });

    // Animation du formulaire de contact
    gsap.from("#contactSection .contact-form", { 
      duration: 1.5, 
      y: 50, 
      opacity: 0, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top 80%",
      }
    });

    gsap.from("#contactSection .contact-image img", { 
      duration: 1.5, 
      scale: 0.85, 
      opacity: 0, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contactSection",
        start: "top 80%",
      }
    });
  }
}
