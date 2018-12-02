import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../service/location/locations.service';
import { ShopService } from '../../service/shop/shop.service';
import { FoodService } from '../../service/food/food.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locationData : Array<any>= []
  shopData : Array<any> = []
  foodsData : Array<any> = []
  onClickTo = []
  constructor(private locationS :LocationsService , private shopS :ShopService , private foodS : FoodService) { }

  ngOnInit() {
    // this.onClickTo = []
    this.locationS.getListOfLocation().subscribe(data => this.locationData = data)
  }
  clickTOs(data) {
    this.shopS.getListOfShop(data.value).subscribe(data => {
      this.shopData = data.map(da => {
        return {
          name_shop : da.name_shop ,
          id : da.id ,
          img_shop : `http://localhost:3000/public/${da.img_shop}` ,
          like : da.shop_like || 0
        }
      })
    })
    // console.log(data.value)
  }
  shopSrech(data) {
    // console.log(data)
    this.foodS.getListOfFood(data.id).subscribe(data => {
      // this.onClickTo = []
      this.foodsData = data.map(data => {
        return {
          id : data.id_food ,
          name_food : data.name_food ,
          img_food :  `http://localhost:3000/public/${data.img_food}`,
          price_food_m : data.price_food_m , 
          price_food_l : data.price_food_l 

        }
      }) 
    })
  }
  onClickToList (shop){
    // this.onClickTo[i] = "onClickToRed"
    const id = shop.id
    // console.log(id)
    this.shopS.likeShopLink(id).subscribe(data => {
      this.shopData = data.map(da => {
        return {
          name_shop : da.name_shop ,
          id : da.id ,
          img_shop : `http://localhost:3000/public/${da.img_shop}` ,
          like : da.shop_like || 0
        }
      })
    })
  }
}
