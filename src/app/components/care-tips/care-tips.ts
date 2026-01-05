import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-care-tips',
  imports: [CommonModule],
  templateUrl: './care-tips.html',
  styleUrl: './care-tips.css',
})
export class CareTipsComponent {
  careTips = [
    {
      title: 'Set Time Limits',
      description: 'Establish clear daily time limits for gaming. The American Academy of Pediatrics recommends no more than 1 hour per day for children aged 2-5, and consistent limits for older children.',
      icon: '⏰'
    },
    {
      title: 'Choose Age-Appropriate Content',
      description: 'Always check game ratings (ESRB, PEGI) and reviews. Select games that are appropriate for your child\'s age and maturity level to ensure safe and positive experiences.',
      icon: '👶'
    },
    {
      title: 'Play Together',
      description: 'Engage with your child during gaming sessions. Co-playing helps you monitor content, provides bonding opportunities, and allows you to guide their gaming experience positively.',
      icon: '👨‍👩‍👧'
    },
    {
      title: 'Balance Screen Time',
      description: 'Encourage a healthy balance between digital activities and physical play, outdoor activities, reading, and social interactions to promote overall development.',
      icon: '⚖️'
    },
    {
      title: 'Monitor Online Interactions',
      description: 'If games include online features, monitor communications, use parental controls, and teach your child about online safety and appropriate behavior.',
      icon: '🔒'
    },
    {
      title: 'Watch for Warning Signs',
      description: 'Be aware of signs of problematic gaming such as withdrawal from other activities, mood changes, sleep disruption, or difficulty stopping. Seek professional help if needed.',
      icon: '⚠️'
    },
    {
      title: 'Create Gaming-Free Zones',
      description: 'Designate certain areas (like bedrooms or dining areas) as screen-free zones to promote better sleep, family meals, and face-to-face interactions.',
      icon: '🚫'
    },
    {
      title: 'Encourage Educational Games',
      description: 'Prioritize games that offer educational value, problem-solving challenges, and creative opportunities that contribute to your child\'s learning and development.',
      icon: '📖'
    }
  ];
}
