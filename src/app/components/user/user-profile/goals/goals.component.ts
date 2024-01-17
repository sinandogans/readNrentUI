import {Component, Input, OnInit} from '@angular/core';
import {ReadingGoalModel} from "../models/reading-goal.model";
import {LibraryService} from "../../../../services/library/library.service";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [
    MatProgressBarModule,
    NgForOf
  ],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent implements OnInit {
  @Input() readingGoals: ReadingGoalModel[];

  constructor(private libraryService: LibraryService) {
  }

  ngOnInit() {

  }

  getPercentage(readingGoal: ReadingGoalModel): number {
    return (readingGoal.yearReadCount / readingGoal.goal) * 100;
  }
}
