import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePostsStore = defineStore('posts', () => {
  // Загрузка из localStorage
  const initialPosts = JSON.parse(localStorage.getItem('posts')) || [
    { id: 1, title: 'Пример', description: 'Описание поста' }
  ];
  
  const posts = ref(initialPosts);

  // Автосохранение при изменениях
  const saveToLocalStorage = () => {
    localStorage.setItem('posts', JSON.stringify(posts.value));
  };

  const addPost = (title, description) => {
    posts.value.push({ id: Date.now(), title, description });
    saveToLocalStorage();
  };

  const deletePost = (id) => {
    posts.value = posts.value.filter(p => p.id !== id);
    saveToLocalStorage();
  };

  const updatePost = (id, title, description) => {
    const index = posts.value.findIndex(p => p.id === id);
    if (index !== -1) {
      posts.value[index] = { id, title, description };
      saveToLocalStorage();
    }
  };

  const getPostById = (id) => posts.value.find(p => p.id === id);

  // Computed свойство для удобства
  const postsCount = computed(() => posts.value.length);

  return { 
    posts, 
    postsCount,
    addPost, 
    deletePost, 
    updatePost, 
    getPostById 
  };
});