<template>
  <div>
   <ul id="orders_ul">
        <li id="orders_li" v-for="order in orders" v-bind:key="order[0]">
          <div v-for="(qty, dish) in order[1].count" v-bind:key="dish">
            {{dish}}: {{qty}}
          </div>
          <button v-on:click="deleteItem($event)" v-bind:id='order[0]'>Delete</button>
          <button v-on:click="route($event)" v-bind:id="order[0]">Modify</button>
        </li>
    </ul>
  </div>
</template>


<script>
import database from './../firebase.js'

export default {
 methods:{
    route: function(event) {
      let doc_id = event.target.getAttribute("id"); 
      this.$router.push({ name: "Modify", path: "/modify", query: { doc_id: doc_id } })
    }, 
    
    deleteItem: function(event) {
      let doc_id = event.target.getAttribute("id"); 
      database.collection('orders').doc(doc_id).delete().then(() => {
          location.reload();
        });
    }, 

    fetchItems: function() {
      database.collection('orders').get().then((querySnapShot)=> {
        let order = {}
        querySnapShot.forEach(doc=>{
          order = doc.data()
          const id = doc.id
          this.orders.push([id, order])
        }) 
      }) 
    }
   },

   created: function() {
    this.fetchItems()
  },

  data(){
    return{
        orders: []
        }
  },
  components: {
  },
}
</script>

<style scoped>
#orders_ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
#orders_li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>