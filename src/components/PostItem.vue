<template>
  <div class="postDivContainer">
    <div class="postDiv">
      <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      <button @click.stop="$emit('editPost', post.id)">Редактировать</button>
      <button @click.stop="$emit('deletePost', post.id)">Удалить</button>
    </div>
  </div>
</template>





<script setup>
defineProps({ post: Object })
</script>

<style scoped>

.postDivContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.postDiv {
  padding: 15px;
  border: 2px solid #c7b7a3;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
}

a{
  color: #561c24;
  text-decoration: none;
  transition: .5s;
}
a:hover{
  font-size: 18px;
}
button{
  background-color: transparent;
  border: 0;
  padding: 5px;
      font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  transition: .3s;
  border-radius: 5px;

    color: #6d2932;
}

button:hover{
  background-color: #561c24;
  border-radius: 10px;
  color: #e8d8c4;
}

</style>

