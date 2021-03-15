<template>
  <div>
    <button v-on:click="decrement()">-</button>
    &nbsp;
    <a id="text">{{ counter }}</a>
    &nbsp;
    <button v-on:click="increment()">+</button>



  </div>
</template>

<script>
export default {
      data() {
        return {
            counter: 0
        }
      },
      methods: {
        increment: function() {
            if (this.counter < 10) {
                this.counter++;
            }
            else {
                alert("You cannot buy more than 10 items.")
            }
            this.$emit('counter', this.item, this.counter)
        },
        decrement: function() {
            if (this.counter > 0) {
                this.counter--;
            }
            this.$emit('counter', this.item, this.counter)
        },
      },
      props:{
        item:{
          type: Object
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
a {
  font-size: 30px;
  font-family: Lucida Handwriting;
}
</style>
