<template>
  <div>
    <h1>Login</h1>
    <form>
        <label>E-mail:</label>
        <input v-model="email" type="text" required />
        <label>Password:</label>
        <input v-model="password" type="password" required />
        <button @click.prevent="login">Sign in</button>
    </form>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      login(){
        const auth = this.$firebase.auth();
        const promise = auth.signInWithEmailAndPassword(this.email, this.password);
        promise.then((data) => {
          console.log(data);
          console.log(this.$loggedIn);
          this.$router.push('/add')
        });

      }
    }
  }
</script>
