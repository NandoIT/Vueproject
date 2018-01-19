<template>
  <div class="header">
    <span class="myLogo"/>
    <span class="user">
      <nav>
        <ul>
          <li><router-link to="/blogs" exact>Blog</router-link></li>
          <li><router-link to="/add" exact>Add</router-link></li>
        </ul>
        <!-- <pre>{{store}}</pre> -->
      </nav>
      <button v-show="store.loggedIn" @click="logOut">Logout</button>
    </span>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    log(){
      console.log("hoi");
    },

  },
  data () {
    return {
      title: 'header',
      store: this.$store.state
    }
  },
  methods: {
    logOut(){
      this.$firebase.auth().signOut().then(() => {
        console.log("uitgelogd");
        console.log(this.$loggedIn)
        this.$router.push('/');
      });
    }
  }
}
</script>
<style>
  .myLogo {
    display: inline;
    float: left;
    margin-left: 20px;
    width: 70px;
    height: 70px;
    content:url("../assets/logo.png");
  }

  li{
    color: white;
    display: inline-block;
    margin-left: 10px;
  }

  a:visited{
    color: white;
  }

  .user {
    white-space: nowrap;
    display: inline;
    float: right;
    margin-top: 20px;
    margin-right: 30px;
    font-size: large;
  }

  .header {
    background-color: #f4c842;
    display: inline-block;
    width: 100%;clear:both;
  }
</style>
