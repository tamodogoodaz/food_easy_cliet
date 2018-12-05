import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root"
})
export class FoodService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) {}
  getListOfFood(id_food): Observable<any> {
    return this.http.get(`${this.url}/api/listOfFood/${id_food}`)
  }
  addNewFood(addNewFood, file): Observable<any> {
    const formData = new FormData()
    formData.append("imgFood", file)
    formData.append("data", JSON.stringify(addNewFood))
    return this.http.post(`${this.url}/api/addNewFood`, formData)
  }
  deleteFood(id): Observable<any> {
    return this.http.delete(`${this.url}/api/deleteFood/${id}`)
  }
  updateFood(id): Observable<any> {
    return this.http.get(`${this.url}/api/likeFood/${id}`)
  }
}
