<script setup>
const { params } = useRoute()
useHead({
	title: `Posts Tagged with ${params.slug[0]}`,
	meta: [
		{ name: 'description', content: 'Blog Post tag archive' },
	],
})

const articles = await queryContent('blog')
	.where({ tags: { $contains: params.slug[0] } })
	.sort({ date: -1 })
	.only(['_path', 'title', 'description', 'tags'])
	.find()
</script>
<template>
	<div>
		<h1>Posts tagged with '{{ params.slug[0] }}'</h1>
		<hr />
		<BlogPostsList
			v-if="articles.length > 0"
			:articles="articles"
		></BlogPostsList>
		<p v-else>Sorry, nothing found.</p>
	</div>
</template>
