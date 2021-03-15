<template>
  <div>
    <h1>Ah Leng's Zi Char</h1>
    <ul id='app_ul'>
        <li id='app_li'><router-link to="/" exact>Home</router-link></li>
        <li id='app_li'><router-link to="/orders" exact>Orders</router-link></li>
        <li id='app_li'><router-link to="/dashboard" exact>Dashboard</router-link></li>

    </ul>
    <router-view></router-view>
    </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 { color: #111;
    background-color: coral;
    padding: 1em;
    font-family: 'Helvetica Neue',
    sans-serif;
    font-size: 100px;
    font-weight: bold;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
    }

#app_ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
#app_li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}

</style>
