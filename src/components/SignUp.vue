<template>
    <div class="sign-up">
      <p>Let's create a new accout!</p>
      <form v-on:submit.prevent="signUp">
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button>Sign Up</button>
      </form>
      <span>or go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user)
          alert('User has been created')
        })
        .catch(err => {
          console.log(err)
          alert('Ñaaaak')
        })
    }
  }
}
</script>

<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 20%;
    padding: 15px;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
