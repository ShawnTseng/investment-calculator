import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatGridListModule, MatIconModule, MatInputModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  principle = 0;

  winRate = 0.5;

  profitLossRate = 2;

  bestBetRatio = 0;

  onWinRateChange(e: any) {
    this.winRate = e.target.value / 100;
  }

  onCalculateBestBetRatio() {

  }
}
