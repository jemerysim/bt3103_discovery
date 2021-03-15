<template>
    <div>
        <div v-for="item in datapacket" v-bind:key="item">
            <div v-for="(qty, dish) in item.count" v-bind:key="dish">
                {{dish}}: {{qty}}<br>
                <input @change="updateDatapacket($event)" :id="dish" type="number" placeholder=0 min="0">
                <br><br>
            </div><br>
        </div>
        <br><button v-on:click="updateOrder">Update Order</button>
    </div>
</template>

<script>
import database from './../firebase.js'

export default {
 methods:{
    updateDatapacket (event) {
        let dish = event.target.getAttribute("id");
        this.datapacket[0].count[dish] = parseInt(event.target.value);
    },
    
    updateOrder() {
      database.collection("orders").doc(this.$route.query.doc_id)
        .set({count: this.datapacket[0].count})
        .then(() => {
          this.$router.push({ name: "Orders" });
        });
    },

    fetchItems: function() {
      database.collection('orders').doc(this.$route.query.doc_id)
      .get().then((querySnapShot)=> {
        this.datapacket.push(querySnapShot.data())
      })
    }
   },

    created: function() {
        this.fetchItems()
    },
  
  data(){
    return{
        datapacket: []
        }
  }
}
</script>

<style scoped>
button {
  width: 80px;
  height: 40;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>