<template>
  <div class="HomeVueStyleS">

  <div class="mainDivS">
    <h1>{{ isEdit ? 'Редактировать пост' : 'Создать пост' }}</h1>
    <PostForm :initialTitle="initialTitle" :initialDescription="initialDescription" :isEdit="isEdit" @submit="handleSubmit" />
    <router-link to="/">Назад</router-link>
  </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { usePostsStore } from '../store/posts'
import PostForm from '../components/PostForm.vue'

const route = useRoute()
const router = useRouter()
const { addPost, updatePost, getPostById } = usePostsStore()

const isEdit = route.path.includes('edit')
let initialTitle = ''
let initialDescription = ''

if (isEdit) {
  const post = getPostById(route.params.id)
  if (post) {
    initialTitle = post.title
    initialDescription = post.description
  }
}

const handleSubmit = ({ title, description }) => {
  if (isEdit) updatePost(route.params.id, title, description)
  else addPost(title, description)
  router.push('/')
}
</script>

<style scoped>



.mainDivS {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
text-align: center;
}

.mainDiv button{
  background-color: transparent;
  border: 0;
  padding: 5px;
  margin: 10px;
      font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  transition: .3s;
    color: #6d2932;
}

.mainDiv button:hover{
  background-color: #561c24;
  border-radius: 10px;
  color: #e8d8c4;
}

.inputs{
      font-family: "Montserrat", sans-serif;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;

  background-color: transparent;
  border-radius: 20px;
  padding: 3px;
  border-color: #561c24;
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

</style>