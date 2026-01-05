import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  team = [
    {
      name: 'Child Development Experts',
      role: 'Educational Content',
      description: 'Dedicated professionals ensuring quality educational gaming experiences.',
      icon: '👨‍🏫'
    },
    {
      name: 'Safety Specialists',
      role: 'Digital Wellness',
      description: 'Experts in children\'s digital safety and screen time management.',
      icon: '🛡️'
    },
    {
      name: 'Game Developers',
      role: 'Interactive Learning',
      description: 'Creating engaging, educational games that children love.',
      icon: '🎮'
    }
  ];

  stats = [
    { number: '10K+', label: 'Happy Families' },
    { number: '500+', label: 'Activities' },
    { number: '50+', label: 'Experts' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];
}
