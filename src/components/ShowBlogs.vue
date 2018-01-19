<template>
  <div v-theme="'wide'"class="blogs">
    <h1>All blogs</h1>
    <input type="text" v-model="search" placeholder="Search"></input>
    <div v-for="blog in filteredBlogs" class="blog">
        <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title}}</h2></router-link>
        <p>{{blog.content}}</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        blogs: [],
        search: '',
        store: this.$store.state
      }
    },
    created(){
      this.$http.get('https://vue-app-3db3c.firebaseio.com/post.json').then(function(data){
        return data.json();
      }).then(function(data){
        let blogsArray = [];
        for (let key in data) {
          data[key].id = key
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      })
    },
    computed: {
      filteredBlogs(){
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        });
      }
    },
    mounted(){
      console.log(this.store.loggedIn);
      if(!this.store.loggedIn){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .blogs{
    margin: 0px 200px;
  }
  .blog{
    margin: 20px auto;
    background-color: #eee;
    border: 1px solid black;
  }
  a:visited {
    color: darkgrey;
  }
</style>
