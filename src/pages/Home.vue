<template>
  <div class="HomeVueStyle">
    <div class="mainDiv">
    <h1>Список постов</h1>
    <button @click="goCreate">Создать пост</button>
    </div>
    <input v-model="search" placeholder="Поиск постов..." />
    <PostList :posts="filteredPosts" @deletePost="deletePost" @editPost="editPost" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePostsStore } from '../store/posts'
import PostList from '../components/PostList.vue'

const router = useRouter()
const { posts, deletePost } = usePostsStore()
const search = ref('')

const filteredPosts = computed(() => {
  if (!search.value) return posts
  return posts.filter(p => p.title.toLowerCase().includes(search.value.toLowerCase()))
})

const goCreate = () => router.push('/create')
const editPost = (id) => router.push(`/edit/${id}`)
</script>

<style scoped>


 .HomeVueStyle{
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
 }
.mainDiv {
  margin-top: 10px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center; /* Центрирование содержимого внутри div */
  max-width: max-content; /* Ширина div будет равна ширине содержимого */
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


</style>