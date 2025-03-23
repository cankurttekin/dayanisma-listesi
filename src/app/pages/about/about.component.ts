import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatCardModule,
    MatDividerModule,
    MatIconModule
  ],
  template: `
    <div class="about-container">
      <app-header (toggleCategoriesEvent)="handleToggleCategories()"></app-header>
      <div class="content-container">
        <mat-card class="about-card">
          <mat-card-header>
            <mat-card-title>About Boycott App</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>This application was created to help users identify and boycott companies based on their values and ethics.</p>
            <p>Simply browse the categories or search for specific companies to get detailed information.</p>
            <mat-divider></mat-divider>
            <h3><mat-icon>info</mat-icon> How to Use</h3>
            <ul>
              <li>Browse by category to see companies grouped by industry</li>
              <li>Use the search function to find specific companies</li>
              <li>Click on company cards to see detailed information about why they are on the boycott list</li>
            </ul>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    
    .content-container {
      flex: 1;
      padding: 20px;
      background-color: #f5f5f5;
      background-image: var(--diagonal-pattern);
      background-size: 20px 20px;
    }
    
    .about-card {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;
      border: 3px solid #000;
      border-radius: 0 !important;
      box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.5) !important;
      background-color: var(--retro-mint) !important;
    }
    
    mat-card-title {
      font-size: 24px;
      margin-bottom: 16px;
      font-family: 'Impact', 'Arial Black', sans-serif;
      color: var(--retro-navy);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    mat-divider {
      margin: 20px 0;
      border-top-color: #000 !important;
    }
    
    h3 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      font-family: 'Impact', 'Arial Black', sans-serif;
      color: var(--retro-navy);
    }
    
    ul {
      margin-left: 20px;
      font-family: 'Courier New', monospace;
    }

    p {
      font-family: 'Courier New', monospace;
      line-height: 1.5;
    }
  `]
})
export class AboutComponent {
  private router = inject(Router);
  
  constructor() { }
  
  handleToggleCategories(): void {
    // Navigate to home page to show categories
    this.router.navigate(['/']);
  }
} 