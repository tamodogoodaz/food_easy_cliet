import { Component, OnInit } from "@angular/core"
import { LocationsService } from "src/app/service/location/locations.service"
import { ShopService } from "src/app/service/shop/shop.service"
import { FoodService } from "src/app/service/food/food.service"

@Component({
  selector: "app-delte",
  templateUrl: "./delte.component.html",
  styleUrls: ["./delte.component.css"]
})
export class DelteComponent implements OnInit {
  locationData = []
  shopData = []
  foodData = []
  constructor(
    private locaS: LocationsService,
    private shopS: ShopService,
    private foodS: FoodService
  ) {}

  ngOnInit() {
    this.locaS.getListOfLocation().subscribe(data => {
      this.locationData = data
    })
  }
  changeLocation(location) {
    const id = location.value
    this.shopS.getListOfShop(id).subscribe(data => {
      this.shopData = data
    })
  }
  editeShop(shop) {}
  deleteShop(shop) {
    console.log(shop)
   if(confirm("ต้องการลบข้อมูลอาหารนี้หรือไม่ ?")) {
    this.shopS.deleteShop(shop.id).subscribe(data => {
      alert(JSON.stringify(data))
      this.shopData.splice(this.shopData.indexOf(shop), 1)
      this.foodData = []
    })
   }
  }
  showFood(shop) {
    this.foodS.getListOfFood(shop.id).subscribe(data => {
      this.foodData = data
    })
  }
  deleteFood(food) {
    if(confirm("ต้องการลบข้อมูลอาหารนี้หรือไม่ ?")) {
      this.foodS.deleteFood(food.id_food).subscribe(data => {
        this.foodData.splice(this.foodData.indexOf(food), 1)
        alert(JSON.stringify(data))
      })
    }
  }
}
