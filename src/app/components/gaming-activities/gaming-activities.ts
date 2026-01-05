import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gaming-activities',
  imports: [CommonModule],
  templateUrl: './gaming-activities.html',
  styleUrl: './gaming-activities.css',
})
export class GamingActivitiesComponent {
  activities = [
    {
      title: 'Educational Puzzle Games',
      description: 'Engage children with age-appropriate puzzles that develop problem-solving skills, spatial awareness, and logical thinking.',
      icon: '🧩',
      benefits: ['Cognitive Development', 'Patience Building', 'Visual Recognition']
    },
    {
      title: 'Creative Building Games',
      description: 'Foster creativity and imagination through digital building blocks and construction games that encourage design thinking.',
      icon: '🏗️',
      benefits: ['Creativity', 'Planning Skills', 'Spatial Reasoning']
    },
    {
      title: 'Storytelling Adventures',
      description: 'Interactive narrative games that help develop reading comprehension, vocabulary, and storytelling abilities.',
      icon: '📚',
      benefits: ['Language Skills', 'Imagination', 'Comprehension']
    },
    {
      title: 'Math & Logic Games',
      description: 'Fun mathematical challenges and logic puzzles that make learning numbers and patterns enjoyable and engaging.',
      icon: '🔢',
      benefits: ['Numeracy Skills', 'Logical Thinking', 'Pattern Recognition']
    },
    {
      title: 'Music & Rhythm Games',
      description: 'Games that introduce children to music, rhythm, and timing while improving coordination and auditory skills.',
      icon: '🎵',
      benefits: ['Musical Awareness', 'Coordination', 'Rhythm Sense']
    },
    {
      title: 'Nature & Science Exploration',
      description: 'Virtual exploration games that teach children about nature, animals, plants, and scientific concepts in an interactive way.',
      icon: '🌱',
      benefits: ['Scientific Knowledge', 'Curiosity', 'Environmental Awareness']
    }
  ];
}
