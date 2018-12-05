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
  showId
  hh = []
  constructor(private locationS :LocationsService , private shopS :ShopService , private foodS : FoodService) { }

  ngOnInit() {
    // this.onClickTo = []
    this.locationS.getListOfLocation().subscribe(data => this.locationData = data)
  }
  clickTOs(inputData) {
    this.shopS.getListOfShop(inputData.value).subscribe(shop => {
     
      this.shopData = shop.map(async (da , id) => {
        const ggg = await this.foodS.getListOfFood(da.id).toPromise()
        const gg = ggg.reduce((sum , d) => sum += d.food_like , 0)

        return {
          name_shop : da.name_shop ,
          id : da.id ,
          img_shop : `http://localhost:3000/public/${da.img_shop}` ,
          like :gg[id]
        }
      })
    })
    // console.log(data.value)
  }
  shopSrech(data) {
    this.showId = data.id
    // console.log(data)
    this.foodS.getListOfFood(data.id).subscribe(data => {
      // this.onClickTo = []
      this.foodsData = data.map(data => {
        return {
          id : data.id_food ,
          name_food : data.name_food ,
          img_food :  `http://localhost:3000/public/${data.img_food}`,
          price_food_m : data.price_food_m , 
          price_food_l : data.price_food_l ,
          food_like : data.food_like

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
  foodLike(food) {
    const id = food.id 

    this.foodS.updateFood(id).subscribe(data => {
      this.foodS.getListOfFood(this.showId).subscribe(data => {
        const gg = data.reduce((sum,data) => sum += data.food_like , 0)
        console.log(gg)
        this.foodsData = data.map(data => {
          return {
            id : data.id_food ,
            name_food : data.name_food ,
            img_food :  `http://localhost:3000/public/${data.img_food}`,
            price_food_m : data.price_food_m , 
            price_food_l : data.price_food_l ,
            food_like : data.food_like
  
          }
        }) 
       
      })
    }, err => alert(JSON.stringify(err)))
  }
}
