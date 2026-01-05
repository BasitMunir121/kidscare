import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent {
  images = [
    {
      id: 1,
      title: 'Educational Puzzle Games',
      description: 'Children solving puzzles and developing problem-solving skills',
      category: 'Puzzles',
      image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Creative Building Activities',
      description: 'Kids building and creating with digital blocks',
      category: 'Building',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Music & Rhythm Games',
      description: 'Children enjoying music and rhythm activities',
      category: 'Music',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Science Exploration',
      description: 'Learning about nature and science through games',
      category: 'Science',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Storytelling Adventures',
      description: 'Interactive storytelling and reading activities',
      category: 'Reading',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Math Learning Games',
      description: 'Fun mathematical challenges and puzzles',
      category: 'Math',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Art & Creativity',
      description: 'Expressing creativity through digital art',
      category: 'Art',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Family Gaming Time',
      description: 'Parents and children playing together',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      title: 'Safe Gaming Environment',
      description: 'Creating safe and supervised gaming spaces',
      category: 'Safety',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
    }
  ];

  selectedCategory = 'All';
  categories = ['All', 'Puzzles', 'Building', 'Music', 'Science', 'Reading', 'Math', 'Art', 'Family', 'Safety'];

  get filteredImages() {
    if (this.selectedCategory === 'All') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
