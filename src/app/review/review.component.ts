import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  public reviewObj: object = {}
  constructor(private _reviewService: ReviewService) { }

  ngOnInit() {
    
  
}
addReviewData(review)
{
  this.reviewObj = {
    product_id: review.product_id,
    manufacturer: review.manufacturer,
    product_name: review.product_name,
    avg_score: review.avg_score
  }
  
  this._reviewService.addReviews(this.reviewObj)
      .subscribe(data => console.log(data))
}
updateReviewData(review)
{
  this.reviewObj = {
    product_id: review.product_id,
    manufacturer: review.manufacturer,
    product_name: review.product_name,
    avg_score: review.avg_score
  }
  
  this._reviewService.updateReviews(this.reviewObj)
      .subscribe(data => console.log(data))
}

}
