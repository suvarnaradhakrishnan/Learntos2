import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})


export class TestimonialsComponent {

  activeSlideIndex = 0;

ngOnInit() {
  this.startSlideShow();
}

startSlideShow() {
  setInterval(() => {
    this.nextSlide();
  }, 5000);
}

nextSlide() {
  const totalSlides = this.testimonials.length;
  this.activeSlideIndex = (this.activeSlideIndex + 1) % totalSlides;
}


  testimonials = [
    {
      name: 'Avantika S',
      course: 'Foreign Language Training',
      quote: "I am extremely grateful to Learntos. It was the best decision I'd ever made and the best opportunity  I'd ever made.",
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 4.5
    },
    {
      name: 'Kiran M S',
      course: 'Angular Certification Training',
      quote: 'Learntos is an excellent online learning platform. The classes are well-designed and easy to understand. The trainers are friendly and do their best to clear up any confusion.',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 4.2
    },
    {
      name: 'Deepika Agarwal',
      course: 'Web Developer Certification Training',
      quote: 'Learntos is an excellent platform to learn IT. The way they teach is very brilliant. All the trainers are very friendly and very supportive. ',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
    {
      name: 'Sanju Joseph',
      course: 'Selenium Certification Training',
      quote: 'I thoroughly enjoyed the course. I admire the teachers and the way they instruct.',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 4.5
    },
    // Add more testimonial objects as needed
  ];
  


}


