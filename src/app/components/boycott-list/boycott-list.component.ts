import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { BoycottItem } from '../../models/flashcard.model';
import { BoycottService } from '../../services/flashcard.service';

@Component({
  selector: 'app-boycott-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './boycott-list.component.html',
  styleUrls: ['./boycott-list.component.scss']
})
export class BoycottListComponent implements OnChanges {
  @Input() categoryId: string | null = null;
  @Input() searchQuery: string = '';
  @Input() boycottItems: BoycottItem[] = [];
  
  expandedItems: Set<string> = new Set<string>();
  cardColors: Map<string, string> = new Map<string, string>();
  private boycottService = inject(BoycottService);
  
  private retroColors = [
    'var(--retro-mint)',
    'var(--retro-pink)',
    'var(--retro-yellow)',
    'var(--retro-teal)',
    'var(--retro-purple)',
    'var(--retro-orange)',
    'var(--retro-navy)',
    'var(--retro-red)',
    'var(--retro-light-blue)',
    'var(--retro-light-yellow)',
    '#a3e3ed',  // Light turquoise
    '#ffb347',  // Pastel orange
    '#b19cd9',  // Lavender
    '#ff9aa2',  // Pastel pink
    '#ffdac1',  // Peach
    '#c7ceea',  // Light periwinkle
    '#b5ead7',  // Mint green
    '#ff99c8',  // Pink
    '#d4a5a5',  // Dusty rose
    '#f5c0c0'   // Light coral
  ];
  
  constructor() {}
  
  ngOnChanges(changes: SimpleChanges): void {
    // Only load items if boycottItems input is not provided
    if (!this.boycottItems || this.boycottItems.length === 0) {
      if (changes['categoryId']) {
        this.loadItemsByCategory();
      }
      
      if (changes['searchQuery'] && this.searchQuery) {
        this.searchItems();
      }
    } else {
      this.assignRandomColorsToCards();
    }
  }
  
  assignRandomColorsToCards(): void {
    this.boycottItems.forEach(item => {
      if (!this.cardColors.has(item.id)) {
        const randomColor = this.retroColors[Math.floor(Math.random() * this.retroColors.length)];
        this.cardColors.set(item.id, randomColor);
      }
    });
  }
  
  getCardColor(itemId: string): string {
    if (!this.cardColors.has(itemId)) {
      const randomColor = this.retroColors[Math.floor(Math.random() * this.retroColors.length)];
      this.cardColors.set(itemId, randomColor);
    }
    return this.cardColors.get(itemId)!;
  }
  
  loadItemsByCategory(): void {
    if (this.categoryId) {
      this.boycottService.getBoycottItemsByCategory(this.categoryId)
        .subscribe(items => {
          this.boycottItems = items;
          this.expandedItems.clear();
          this.assignRandomColorsToCards();
        });
    } else {
      this.boycottItems = this.boycottService.getBoycottItems();
      this.expandedItems.clear();
      this.assignRandomColorsToCards();
    }
  }
  
  searchItems(): void {
    if (this.searchQuery.trim()) {
      this.boycottService.searchBoycottItems(this.searchQuery)
        .subscribe(items => {
          this.boycottItems = items;
          this.expandedItems.clear();
          this.assignRandomColorsToCards();
        });
    }
  }
  
  toggleExpand(itemId: string): void {
    if (this.expandedItems.has(itemId)) {
      this.expandedItems.delete(itemId);
    } else {
      this.expandedItems.add(itemId);
    }
  }
  
  isExpanded(itemId: string): boolean {
    return this.expandedItems.has(itemId);
  }
  
  getCompanyInitials(companyName: string): string {
    if (!companyName) return '';
    
    // Split the company name by spaces and other separators
    const words = companyName.split(/[\s\-&]+/);
    
    if (words.length === 1) {
      if (words[0].length === 3) {
        return words[0].toUpperCase();
      } else {
        return words[0].substring(0, 2).toUpperCase();
      }
    } else {
      return (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase();
    }
  }
} 