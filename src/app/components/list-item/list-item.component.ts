import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../model/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  constructor() { }

  @Input() items: Item[];
  @Output() onDelete = new EventEmitter<Item>();
  @Output() onUpdate = new EventEmitter<Item>();
  @Output() onCheck = new EventEmitter<Item>();

  delete(item: Item) {
    this.onDelete.emit(item);
  }

  update(item: Item, event) {
    event.preventDefault();
    if(event.target.innerText) {
      item.name = event.target.innerText;
      this.onUpdate.emit(item);
    } else {
      this.delete(item);
    }
  }

  check(item: Item) {
    item.isChecked = !item.isChecked;
    this.onCheck.emit();
  }

  ngOnInit(): void { }
}
