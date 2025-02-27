import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-impact',
  templateUrl: './step-impact.component.html',
  styleUrls: ['./step-impact.component.css']
})
export class StepImpactComponent implements OnInit {

  ngOnInit(): void {
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkVisibility();
  }

  private checkVisibility(): void {
    const section = document.getElementById('stepTraining');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add('in-view');
      } else {
          section.classList.remove('in-view');
      }
    }
  }
}
