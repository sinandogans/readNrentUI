import {Component, Input} from '@angular/core';
import {BookDetailModel} from "../models/book-detail.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  @Input() book: BookDetailModel;
}
