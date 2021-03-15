import { Bar } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: ["Cereal Prawn",  "Dry Beef Hor Fun", "Mapo Tofu", "Pork Fried Rice", "Prawn omelette",  "Sambal KangKung"],
            datasets: [{
                label: "Total number of each dish",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#008000"],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
            }]
          }
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
          this.results=doc.data()
            for(var i = 0; i < this.datacollection.labels.length; i++){
              let itemname = this.datacollection.labels[i]
              this.datacollection.datasets[0].data[i] += this.results.count[itemname]
            }      
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}