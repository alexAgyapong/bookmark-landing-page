import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bookmark-landing-page',
  templateUrl: './bookmark-landing-page.component.html',
  styleUrls: ['./bookmark-landing-page.component.css']
})
export class BookmarkLandingPageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.contactForm = this.fb.group({ email: ['', [Validators.email]] });
    tabNavigation();
    toggleTabIcons();
  }

}

function tabNavigation() {
  const tabs = document.querySelectorAll('.tabs');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      const element = event.target as HTMLLIElement;
      if (element.tagName === 'LI') {
        const targetPanel = document.querySelector(element.dataset.target);
        panels.forEach((panel) => {
          if (targetPanel === panel) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      }
    });
  });
}

function toggleTabIcons() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(question => {
    question.addEventListener('click', (event) => {
      const element = event.target as HTMLSpanElement;
      const iconDown = element.nextElementSibling as HTMLElement;
      const questionId = question.getAttribute('id');
      const selector = questionId.toString();
      console.log('event icon down', iconDown);
      console.log('selector angle up', document.querySelector(`${selector} .fa-angle-up`));
      console.log('selector', selector);
    });
  });

}
