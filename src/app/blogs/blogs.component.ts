import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent  {
  blogs = [
    {
      img:"https://www.rathinamcollege.edu.in/wp-content/uploads/2020/06/Ai-ml.png",
      title: 'Artificial Intelligence and Machine Learning',
      content: "Artificial Intelligence, or AI, has already received a lot of buzz in the past decade, but it continues to be one of the new technology trends because of its notable effects on how we live, work and play are only in the early stages. AI is already known for its superiority in image and speech recognition, navigation apps, smartphone personal assistants, ride-sharing apps and so much more......."
    },
    {
      img:"https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
      title: 'Blockchain',
      content: "Although most people think of blockchain technology in relation to cryptocurrencies such as Bitcoin, blockchain offers security that is useful in many other ways. In the simplest of terms, blockchain can be described as data you can only add to, not take away from, or change. Hence the term “chain” because you’re making a chain of data. Not being able to change the previous blocks is what makes it so secure......."
    },
    {
      img:"https://www.simplilearn.com/ice9/free_resources_article_thumb/iot-explained-what-it-is-how-it-works-and-its-applications-banner.jpg",
      title: 'Internet of Things (IoT) ',
      content: "Another promising new technology trend is IoT. Many “things” are now being built with WiFi connectivity, meaning they can be connected to the Internet—and to each other. Hence, the Internet of Things, or IoT. The Internet of Things is the future, and has already enabled devices, home appliances, cars and much more to be connected to and exchange data over the Internet......"
    },
    
  ];

  slideIndex = 0;
  
  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.blogs.length;
  }
  
  previousSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.blogs.length) % this.blogs.length;
  }

  testimonials = [
    {
      name: 'Sandra',
      course: 'Angular Certification Training',
      quote: "Learntos is an excellent online learning platform. The classes are well-designed and easy to understand. The trainers are very friendly and do their best to clear up any confusion.",
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
    {
      name: 'Rahul',
      course: 'Selenium Certification Training',
      quote: "I am very lucky to be a part of Learntos. It's one of the best online platforms to learn and practice the Selenium Certification Training course. The teaching methods and class notes are very simple and effective.",
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
    {
      name: 'Karthika',
      course: 'Web Developer Certification Training',
      quote: 'My web development experience with Learntos was excellent. I was able to learn all of the concepts quickly and thoroughly. Now I can create websites and templates of my own design.',
      image: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
      rating: 5
    },
  ];
  
}
