<template>
  <div class="posts-container">
    <div v-for="post in postsStore.posts" :key="post.id" class="post-item">
      <PostItem 
        :post="post" 
        @deletePost="handleDeletePost(post.id)" 
        @editPost="handleEditPost(post.id)" 
      />
    </div>
  </div>
</template>

<script setup>
import PostItem from './PostItem.vue';
import { usePostsStore } from '../store/posts';

const postsStore = usePostsStore();

const handleDeletePost = (id) => {
  postsStore.deletePost(id);
};

const handleEditPost = (id) => {
  emit('editPost', id);
};

defineEmits(['editPost']);
</script>

<style scoped>
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}
.post-item {
  transition: all 0.3s ease;
}
</style>