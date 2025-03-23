import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss']
})
export class BoycottListComponent implements OnChanges {
  @Input() categoryId: string = '';
  @Input() searchQuery: string = '';
  
  boycottItems: BoycottItem[] = [];
  expandedItems: Set<string> = new Set<string>();
  
  constructor(private boycottService: BoycottService) {}
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryId']) {
      this.loadItemsByCategory();
    }
    
    if (changes['searchQuery']) {
      this.searchItems();
    }
  }
  
  loadItemsByCategory(): void {
    if (this.categoryId) {
      this.boycottService.getBoycottItemsByCategory(this.categoryId)
        .subscribe(items => {
          this.boycottItems = items;
          this.expandedItems.clear();
        });
    } else {
      this.boycottItems = this.boycottService.getBoycottItems();
      this.expandedItems.clear();
    }
  }
  
  searchItems(): void {
    if (this.searchQuery.trim()) {
      this.boycottService.searchBoycottItems(this.searchQuery)
        .subscribe(items => {
          this.boycottItems = items;
          this.expandedItems.clear();
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
} 