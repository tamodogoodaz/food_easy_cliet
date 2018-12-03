import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class ShopService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) {}
  getListOfShop(id): Observable<any> {
    return this.http.get(`${this.url}/api/listOfShop/${id}`)
  }
  likeShopLink(likeShop): Observable<any> {
    return this.http.get(`${this.url}/api/likeShop/${likeShop}`)
  }
  shopAll(): Observable<any> {
    return this.http.get(`${this.url}/api/allShop`)
  }
  addNewShop(addNewShop, file): Observable<any> {
    const formData = new FormData()
    formData.append("imgShop", file)
    formData.append("data", JSON.stringify(addNewShop))
    return this.http.post(`${this.url}/api/addNewShop`, formData)
  }
  deleteShop(id): Observable<any> {
    return this.http.delete(`${this.url}/api/deleteShop/${id}`)
  }
}
