import { Component, OnInit } from '@angular/core';
import { UploadImage } from '../../../img-src';
import { LocationsService } from '../../../service/location/locations.service';
import { ShopService } from '../../../service/shop/shop.service';
import { FoodService } from '../../../service/food/food.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  selected_to = 0
  locationD ={
    id_location : 0,
    name_shop : "" ,
    img_shop : ""
  }
  shopTotal = []
  foodData = {
    id_shop : 0 ,
    name_food : "" , 
    price_food_m : 0,
    price_food_l : 0 ,
    img_food  : '',
  }
  locationTotal = []
  selectedFile
  showImage  = ""
  constructor(private lo: LocationsService , private showS : ShopService , private foodS : FoodService) { }
  processFile(imageInput: any) {
    console.log(imageInput)
    new UploadImage().processFile(imageInput).then(suc => {
      this.selectedFile = suc
      this.showImage = suc.src
      console.log(this.showImage)
    })
  }
  ngOnInit() {
    this.lo.getListOfLocation().subscribe(data => {
      this.locationTotal = data
    })
    this.showS.shopAll().subscribe(data => {
      console.log(data)
      this.shopTotal = data[0]
    })
    // this.foodS.getListOfFood()
  }
  selectedToImg(img) {
    console.log(img)
  }
  addNewShop() {
    // console.log(this.locationD)
    this.showS.addNewShop(this.locationD , this.selectedFile.file).subscribe(data => console.log(data))
  }
  addNewFood() {
    // this.foodS
    // console.log(this.foodData)
    this.foodS.addNewFood(this.foodData , this.selectedFile.file).subscribe(data => console.log(data))
  }
}
