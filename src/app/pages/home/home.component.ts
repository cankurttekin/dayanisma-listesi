import { Component, OnInit, OnDestroy, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BoycottService } from '../../services/flashcard.service';
import { Category, BoycottItem } from '../../models/flashcard.model';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoryListComponent } from '../../components/category-list/category-list.component';
import { BoycottListComponent } from '../../components/boycott-list/boycott-list.component';
import { HeaderService } from '../../services/header.service';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    CategoryListComponent,
    BoycottListComponent,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  boycottItems: BoycottItem[] = [];
  filteredItems: BoycottItem[] = [];
  selectedCategoryId: string | null = null;
  searchQuery: string = '';
  private searchSubscription: Subscription | null = null;
  
  // Mobile responsive properties
  isMobile: boolean = false;
  showMobileSidebar: boolean = false;

  private boycottService = inject(BoycottService);
  private route = inject(ActivatedRoute);
  private headerService = inject(HeaderService);

  constructor() {
    // Initialize mobile detection
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  // Check if screen is mobile size
  private checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width <= 768;
    
    // Only auto-hide sidebar on initial load
    if (this.isMobile && !document.body.classList.contains('initialized')) {
      this.showMobileSidebar = false;
      document.body.classList.add('initialized');
    } else if (!this.isMobile) {
      this.showMobileSidebar = true;
    }
  }

  // Toggle sidebar visibility on mobile
  toggleMobileSidebar() {
    this.showMobileSidebar = !this.showMobileSidebar;
    
    // Prevent body scrolling when sidebar is open
    if (this.showMobileSidebar) {
      //document.body.style.overflow = 'hidden';
    } else {
      //document.body.style.overflow = '';
    }
  }

  ngOnInit(): void {
    this.loadCategories();
    this.boycottItems = this.boycottService.getBoycottItems();
    this.filteredItems = [...this.boycottItems];
    
    // Get category ID from route parameter if available
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      if (categoryId) {
        this.selectedCategoryId = categoryId;
      }
    });

    // Subscribe to the header search service
    this.searchSubscription = this.headerService.searchQuery$.subscribe((query: string) => {
      this.searchQuery = query;
      this.handleSearch(query);
    });
  }

  ngOnDestroy(): void {
    // Clean up subscriptions
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
    
    // Restore body scrolling
    document.body.style.overflow = '';
  }

  loadCategories(): void {
    this.categories = this.boycottService.getCategories();
  }

  handleCategorySelected(categoryId: string | null): void {
    this.selectedCategoryId = categoryId;
    
    // Reset search when changing category
    if (this.searchQuery) {
      this.searchQuery = '';
      this.headerService.updateSearchQuery(''); // Update the header search box
    }
    
    if (categoryId) {
      this.boycottService.getBoycottItemsByCategory(categoryId).subscribe(items => {
        this.filteredItems = items;
      });
    } else {
      // Show all items when no category is selected
      this.filteredItems = [...this.boycottItems];
    }
    
    // Close mobile sidebar after category selection if on mobile
    if (this.isMobile) {
      this.showMobileSidebar = false;
      document.body.style.overflow = '';
    }
  }

  handleSearch(query: string): void {
    if (query) {
      // Reset category selection when searching
      this.selectedCategoryId = null;
      
      this.boycottService.searchBoycottItems(query).subscribe(items => {
        this.filteredItems = items;
      });
    } else if (this.selectedCategoryId) {
      // If search is cleared but a category is selected, show that category
      this.boycottService.getBoycottItemsByCategory(this.selectedCategoryId).subscribe(items => {
        this.filteredItems = items;
      });
    } else {
      // If search is cleared and no category is selected, show all items
      this.filteredItems = [...this.boycottItems];
    }
  }
} 