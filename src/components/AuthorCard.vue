<template>
  <div class="bg-gray-800 rounded-lg p-4 text-center">
    <div v-if="author">
      <img :src="CreateURL(author.avatar)" class="inline-block rounded-full w-32 h-32 mb-4" alt="">

      <h3 class="text-2xl font-bold mb-4"> {{ author.full_name }}</h3>

      <p class="text-gray-400 mb-4">{{ author.short_bio }}</p>

      <router-link :to="`/author/${author._id}`" class="btn">Profile</router-link>
    </div>
  </div>
</template>

<script>
import { CreateURL } from '../utils'

export default {
  props: ['author'],
  setup() {
    return {
      CreateURL
    }
  }
}
</script>