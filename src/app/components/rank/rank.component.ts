import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ShopService } from '../../service/shop/shop.service';
import { LocationsService } from '../../service/location/locations.service';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  locationData = []
  shopData = [{
    "name": "Chrome",
    "y": 62.74,
    "drilldown": "Chrome"
},
{
    "name": "Firefox",
    "y": 10.57,
    "drilldown": "Firefox"
},
{
    "name": "Internet Explorer",
    "y": 7.23,
    "drilldown": "Internet Explorer"
},
{
    "name": "Safari",
    "y": 5.58,
    "drilldown": "Safari"
},
{
    "name": "Edge",
    "y": 4.02,
    "drilldown": "Edge"
},
{
    "name": "Opera",
    "y": 1.92,
    "drilldown": "Opera"
},
{
    "name": "Other",
    "y": 7.62,
    "drilldown": null
}]
  chart 

  chartF(data){
   return  new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Like of shop'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Rank like of shop'
        }

    },
      "series": [
        {
            "name": "Like of Shop",

            "data": data
        }
      ]
     
    });
  }
  constructor(private shopS : ShopService , private location : LocationsService) { }

  ngOnInit() {
    this.shopS.shopAll().subscribe(data => {
      const shop = data[0].map(d => {
        return {
          name : d.name_shop ,
          y : d.shop_like  ,
          drilldown : d.name_shop
        }
      })
      // console.log(shop)
      this.chart = this.chartF(shop)
      // console.log(data[0])
    })
  }

}
