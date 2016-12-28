import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    ngOnChanges(): void {
        this.starWidth = this.rating * 87 / 5;
    }
}