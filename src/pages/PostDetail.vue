<template>
  <div class="HomeVueStyle">

  <div v-if="post"  class="mainDiv">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <router-link to="/">Назад</router-link>
  </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePostsStore } from '../store/posts'

const route = useRoute()
const { getPostById } = usePostsStore()
const post = getPostById(route.params.id)
</script>

<style scoped>


 .HomeVueStyle{
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}
h1{
  margin-bottom: 20px;
}

p{
  margin-bottom: 20px;

}

a{
  color: #561c24;
  text-decoration: none;
  transition: .5s;
  border-radius: 10px;
  padding: 4px;
}
a:hover{
  color: #E8D8C4;
  background-color: #561c24;
}
.mainDiv {
  margin-top: 10px;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  justify-content: center; /* Центрирование содержимого внутри div */
}
</style>