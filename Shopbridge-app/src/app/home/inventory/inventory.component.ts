import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemTemplateDirective } from '@progress/kendo-angular-dropdowns';
import { ShopbridgeService } from 'src/app/common/shopbridge.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  data: Array<any>;
  public scrollViewCards: Array<any> = [];
  isLoaded: boolean = false;
  submitted: boolean;
  constructor(private shopbridgeService:ShopbridgeService) { }

  ngOnInit() {
    this.data=[];
       this.shopbridgeService.getComponents().subscribe(
      (resData) => {
        this.isLoaded = true;
        this.data = this.mapProperties(resData);
      }); 
  }

  public active = false;
  public editForm: FormGroup = new FormGroup({
      'ComponentId':new FormControl(0),
      'Name': new FormControl('', Validators.required),
      'Description': new FormControl(''),
      'Price': new FormControl(0,Validators.compose([Validators.required, Validators.pattern('^[0-9]{1-5}')])),
      'Image': new FormControl(),
      'CreatedBy': new FormControl(1),
      'CreatedOn': new FormControl('26-11-2020'),
      'UpdatedBy': new FormControl()
  });

  public onSave(e): void {
    try {
      this.submitted = true;
      if (this.editForm.valid) {
        e.preventDefault();
        this.shopbridgeService.save(this.editForm.value).subscribe(res => {
          if (res) {
            this.close();
            alert('Item added successfully');
            this.ngOnInit();
          }
        },
          err => {
            alert(err.message);
          }
        );
      } else {
        return;
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  public mapProperties(resData): Array<any>{
    this.scrollViewCards=[];
    resData.forEach(element => {
      this.scrollViewCards.push(
        {
          itemId: element.ComponentId,
          thumbnailSrc: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/bg_flag.jpg',
          headerTitle: element.Name,
          headerSubtitle: element.Description,
          price: element.Price,
          scrollViewItems: [
              { url: 'https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/martenitsa.jpg' }
          ]
      }
      )
    });
    return this.scrollViewCards;
  }

  public opened = false;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
      this.dataSaved = true;
      this.close();
  }
}
