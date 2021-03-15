<template>
  <div>
    <ul>
        <h2>Menu:</h2>
        <li id="items_in_basket" v-for="item in itemsSelected" v-bind:key="item.name">
            <h3>{{item[0]}} x {{item[1]}}</h3>
        </li>
    </ul>
    <button v-on:click="findTotal(); showTotals(); sendOrder();" >Send Order</button>
    <p v-show="showTotal">Subtotal: ${{this.subtotal}}</p>
    <p v-show="showTotal">Grand Total: ${{plusGST}}</p>
  </div>
</template>


<script>
import database from './../firebase.js'

export default {
  computed : {
    plusGST: function() {
        return (this.subtotal * 1.07).toFixed(2);
    },
  },
 methods:{
      findTotal: function () {
       this.subtotal = 0
       for (let i = 0; i < this.itemsSelected.length; i++) {
           var selected = this.itemsSelected[i]
           this.subtotal += (selected[2] * selected[1])
        }
        this.subtotal = this.subtotal.toFixed(2)
      },

      showTotals: function () {
        this.showTotal = true
      },

      sendOrder: function () {
        var obj = {};
        for (let i = 0; i < this.itemsSelected.length; i++) {
          const curr_item = this.itemsSelected[i];
          obj[curr_item[0]] = curr_item[1];
        }
        database.collection('orders').add({
          count: obj
        }).then(() => {
          location.reload();
        });
      }
   },

   components: {

  },
props:{
      itemsSelected:{
          type:Array
      }
  },
  data(){
    return{
        showTotal: false,
        subtotal: 0
        }
  }
}
</script>

<style scoped>
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
}
</style>