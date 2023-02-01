<script setup lang="ts">

    // รับค่า params จาก url
    const params = useRoute().params

    // call wp api
    const { data:posts, pending } = await useWpApi().getPost(params.slug as string)
    const post = posts.value?.[0]

    useHead({
        title: post?.title.rendered,
        meta: [
            {
                name: "description",
                content: `${post?.excerpt.rendered}`,
            }
        ]
    })

</script>


<template>
    <section class="container mx-auto py-10 sm:py-16">
        <div v-if="post" class="sm:px-20">
             <!-- Blog Title -->
            <h1 class="text-3xl font-bold mb-5 text-center leading-snug" v-html="post.title.rendered"></h1>
            <!-- Blog Content -->
            <div class="blog__content" v-html="post.content.rendered"></div>
        </div>

        <div v-if="pending">
            <p>Loading ..... </p>
        </div>
    </section>
</template>



<style>

.blog__content {
  @apply sm:px-10;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6,
.blog__content p {
  @apply my-5;
}
.blog__content h1,
.blog__content h2,
.blog__content h3,
.blog__content h4,
.blog__content h5,
.blog__content h6 {
  @apply font-bold;
}

.blog__content h1 {
  @apply text-2xl sm:text-4xl;
}

.blog__content h2 {
  @apply text-xl sm:text-3xl;
}

.blog__content h3 {
  @apply text-lg sm:text-2xl;
}

.blog__content h4 {
  @apply sm:text-xl;
}

.blog__content h5 {
  @apply text-sm sm:text-lg;
}
</style>