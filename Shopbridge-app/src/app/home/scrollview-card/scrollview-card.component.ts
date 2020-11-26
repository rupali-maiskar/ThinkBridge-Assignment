import { Component, Input, OnInit } from '@angular/core';
import { ShopbridgeService } from 'src/app/common/shopbridge.service';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'scrollview-card',
  templateUrl: './scrollview-card.component.html',
  styleUrls: ['./scrollview-card.component.css']
})
export class ScrollviewCardComponent implements OnInit {
  @Input() public card: any;
  constructor(private shopbridgeservice:ShopbridgeService) { }

  ngOnInit(): void {
  }

  public removeItem(itemId) {
    this.shopbridgeservice.remove(itemId).subscribe(res => {
      if (res) {
        alert('Item deleted successfully.');
      }
      else if (!res && res != null) {
       alert('Something went wrong.');
      }
    },
      err => {
        alert( err.message);
      }
    );
  }

}
