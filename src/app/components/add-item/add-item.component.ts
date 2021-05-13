import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }
  item: Item = {} as Item;
  @Output() onAddItem = new EventEmitter<Item>();

  addItem(item: Item) {
    if (item.name !== undefined) {
      this.onAddItem.emit(item);
    }
    this.item = {} as Item;
  }

  ngOnInit(): void {
  }

}
