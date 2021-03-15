<template>
  <div>
    <ul>
        <li v-for="item in itemsList" v-bind:key="item.name" v-bind:item="item.name">
            <h2>{{item.name}}</h2>
            <img v-bind:src="item.imageURL"/>
            <p id='price'>${{item.price}}</p>
            <qty_counter :item=item v-on:counter="onCounter"></qty_counter>
        </li>
    </ul>
    <basket v-bind:itemsSelected="itemsSelected"></basket>
  </div>

</template>


<script>
import QuantityCounter from './QuantityCounter.vue'
import Basket from './Basket.vue'
import database from './../firebase.js'

export default {
   components: {
    'qty_counter': QuantityCounter,
    'basket': Basket
  },
  data(){
    return{
        itemsSelected : [],
        itemsList: []
        }
        
  },
  
  created: function() {
   this.fetchItems()
  },

  methods:{
    fetchItems: function() {
      database.collection('menu').get().then((querySnapShot)=> {
        let item={}
        querySnapShot.forEach(doc=>{
          item=doc.data()
          item.show=false
          this.itemsList.push(item)
        }) 
      }) 
    },

    onCounter: function (item, count) {
      if (this.itemsSelected.length === 0 && count > 0) {
        //If there is nothing in items selected, push the ORDER in
        this.itemsSelected.push([item.name, count, item.price]);
      } else {
        // Loop through everything to check what is not in the basket
        var last_item = false
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          const item_name = curr_item[0];
          if (i == this.itemsSelected.length - 1) {
            last_item = true
          }
          // if item_name is the same as item.name and the count is more than 0, update this.itemsSelected
          if (item_name == item.name && count == 0) {
            this.itemsSelected.splice(i, 1);
            break;
          }
          else if (item_name == item.name && count > 0) {
            this.itemsSelected.splice(i, 1, [item.name, count, item.price]);
            break;
          }
          // Next, item_name is the same as item.name and the count is 0, remove it from itemsSelected.

          // otherwise, if the item is not in itemSelected, add it to itemsSelected by pushing the ORDER in.
          else if (last_item) {
            if (count != 0) {
                this.itemsSelected.push([item.name, count, item.price]);
                break;
            }
          }
        }
      }
    },
  },
}
</script>

<style scoped>
#itemsList {
  width: 100%;
  max-width: 70%;
  margin: 0px;
  padding: 0 5px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  float: left;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
img {
  width: 135px;
  height: 135px;
}

#price {
  font-size: 25px;
}

#itemName {
  font-size: 30px;
}


</style>