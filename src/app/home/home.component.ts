import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public review = [];
  product_id: number;
  constructor(private _reviewService: ReviewService) { }


  ngOnInit() {

    this._reviewService.getReviews()
      .subscribe(data => this.review = data)

  }
  deleteReviewData(product_id) {
    console.log("22222222222", product_id)

    this._reviewService.deleteReviews(product_id)
      .subscribe()
  }

}

