import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

import { Category, BoycottItem, Group } from '../../models/flashcard.model';
import { BoycottService } from '../../services/flashcard.service';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
  ],
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss'],
})
export class GroupListComponent {
  @Input() groups: Group[] = [];
  @Input() selectedGroupId: string | null = null;
  @Output() groupSelected = new EventEmitter<string | null>();

  boycottItems: BoycottItem[] = [];
  isMobile: boolean = false;
  private boycottService = inject(BoycottService);

  constructor() {
    this.boycottItems = this.boycottService.getBoycottItems();
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  selectGroup(groupId: string): void {
    // If clicking the already selected category, clear the filter
    if (this.selectedGroupId === groupId) {
      this.clearFilter();
      return;
    }

    this.selectedGroupId = groupId;
    this.groupSelected.emit(groupId);

    // Close mobile sidebar after selection on mobile
    if (this.isMobile) {
      this.closeMobileSidebar();
    }
  }

  clearFilter(): void {
    this.selectedGroupId = null;
    this.groupSelected.emit(null);

    // Close mobile sidebar after clearing filter on mobile
    if (this.isMobile) {
      this.closeMobileSidebar();
    }
  }

  private closeMobileSidebar(): void {
    // Find parent component to control sidebar visibility
    // This is done via DOM manipulation but ideally should use a service
    const sidebarEl = document.querySelector('.sidebar');
    if (sidebarEl) {
      sidebarEl.classList.remove('mobile-visible');
    }
  }

  getItemCountForGroup(groupId: string): number {
    return this.boycottItems.filter((item) => item.groupId === groupId).length;
  }
}
