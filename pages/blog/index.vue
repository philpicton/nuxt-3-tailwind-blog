<script setup>
useHead({
	title: 'Recent Blog Posts - Phil Picton 💀',
	meta: [
		{ name: 'description', content: 'Index of recent blog posts by Phil' },
	],
})

const articles = await queryContent('blog')
	.sort({ date: -1 })
	.only(['_path', 'title', 'description', 'tags'])
	.find()

</script>
<template>
	<section>
		<h1>Recent Posts</h1>
		<hr />
		<BlogPostsList
			v-if="articles.length > 0"
			:articles="articles"
		></BlogPostsList>
		<p v-else>Sorry, nothing found.</p>
	</section>
</template>