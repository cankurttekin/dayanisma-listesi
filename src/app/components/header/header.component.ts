import { Component, EventEmitter, OnDestroy, OnInit, Output, inject, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { HeaderService } from '../../services/header.service';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() toggleCategoriesEvent = new EventEmitter<void>();
  
  searchQuery: string = '';
  isMobile: boolean = false;
  private searchSubject = new Subject<string>();
  private subscription: Subscription | null = null;
  private router = inject(Router);
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
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnInit(): void {
    // Setup debounced search
    this.subscription = this.searchSubject.pipe(
      debounceTime(300), // Wait for 300ms pause in events
      distinctUntilChanged() // Only emit if value is different from previous
    ).subscribe(query => {
      this.headerService.updateSearchQuery(query);
      this.searchEvent.emit(query); // Keep this for backwards compatibility
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSearchInput(): void {
    this.searchSubject.next(this.searchQuery);
  }

  onSearch(): void {
    // This is called when user presses Enter or clicks the search button
    this.headerService.updateSearchQuery(this.searchQuery);
    this.searchEvent.emit(this.searchQuery);
  }
  
  clearSearch(): void {
    this.searchQuery = '';
    this.headerService.updateSearchQuery('');
    this.searchEvent.emit('');
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  goAbout(): void {
    this.router.navigate(['/about']);
  }
  
  toggleCategories(): void {
    this.toggleCategoriesEvent.emit();
  }
} 