<template>
  <form @submit.prevent="submitForm">
    <div>
      <label>Название:</label>
      <input v-model="title" maxlength="12" required />
    </div>
    <div>
      <label>Описание:</label>
      <textarea v-model="description" maxlength="50" required></textarea>
    </div>
    <button type="submit">{{ isEdit ? 'Обновить' : 'Создать' }}</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  initialTitle: String,
  initialDescription: String,
  isEdit: Boolean
})
const emit = defineEmits(['submit'])

const title = ref(props.initialTitle || '')
const description = ref(props.initialDescription || '')

const submitForm = () => {
  if (!title.value.trim() || !description.value.trim()) return
  emit('submit', { title: title.value, description: description.value })
}
</script>


<style>


button{
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

button:hover{
  background-color: #561c24;
  border-radius: 10px;
  color: #e8d8c4;
}


textarea, input, label{
      font-family: "Montserrat", sans-serif;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;

  background-color: transparent;
  border-radius: 20px;
  padding: 3px;
  border-color: #561c24;
}
</style>