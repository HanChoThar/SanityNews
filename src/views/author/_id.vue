<template>
  <main class="author-page">
    <section v-if="author" class="container mx-auto p-4">
      <div class="flex items-center mb-4">
        <img :src="CreateURL(author.avatar)" class="inline-block rounded-full w-16 h-16 mr-4" alt="">
        <h1 class="text-gray-500 text-2xl uppercase font-bold">{{ author.full_name }}</h1>
      </div>
        <p class="text-gray-500 mb-8">{{ author.short_bio }}</p>

        <div class="grid gap-4">
          <PostCard v-for="(post, i) in author.posts" :key="i" :post="post" />
        </div>
    </section>
    <section v-else class="container mx-auto p-4">
      <p class="text-lg text-white">Loading... </p>
    </section>
  </main>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {CreateURL} from '../../utils'
import sanity from '../../client'

import PostCard from '../../components/PostCard.vue'

export default {
  components: {
    PostCard
  },
  setup() {
    const route = useRoute();
    const id = ref(route.params.id)
    const author = ref(null)

    onMounted(() => {
      const query = `*[_type == "author" && _id == $id][0] 
      {...,"posts": *[_type == "post" && author->_id == $id] 
      {_id,title, excerpt, image, _createdAt, author, author->{full_name, avatar}}}`
      const params = {id: id.value}
      sanity.fetch(query, params).then(data => {
        author.value = data
      })
    })
    return {
      author,
      CreateURL
    }
  }
}
</script>