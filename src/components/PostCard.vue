<template>
  <div class="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row">
    <img v-if="post.image" :src="CreateURL(post.image, 480,320)" class="block w-full sm:max-w-xs mr-4 object-cover mb-4 sm:mb-0" alt="">
    <div class="flex flex-col flex-1">
      <h3 class="text-lg md:text-2xl font-bold mb-4">
        {{post.title}}
      </h3>

      <p class="text-gray-500 md:text-lg mb-4 flex-1">{{post.excerpt}}</p>
      <div class="flex sm:flex-col md:flex-row justify-between items-start md:items-end">
        
        <div class="flex items-center sm:mb-4 md:mb-0">
          <img v-if="post.author.avatar" :src="CreateURL(post.author.avatar)" class="rounded-full mr-4 w-8 h-8">
          <div>
            <p class="text-white mr-4">
              {{post.author.full_name}}
            </p>
            <p class="text-gray-500 text-sm">
              {{FormatDate(post._createdAt)}}
            </p>
          </div>
        </div>

        <router-link :to="`/post/${ post._id }`" class="btn">Read More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {FormatDate, CreateURL} from '../utils'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      FormatDate,
      CreateURL
    }
  }
}
</script>