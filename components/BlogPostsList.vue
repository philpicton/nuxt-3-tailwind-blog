<script lang="ts" setup>
interface Article {
	title: string,
	_path: string,
	description: string,
	tags?: string[]
}

defineProps({
	articles: {
		type: Array<Article>,
		default: () => {
			return []
		},
	},
})
</script>

<template>
	<nav>
		<ul class="list-none pl-0">
			<li
				v-for="{ title, _path, description, tags } in articles"
				:key="_path"
			>
				<NuxtLink :to="_path" class="transition">
					{{ title }}
				</NuxtLink>
				<br />
				<small>{{ description }}</small>
				<br />
				<BlogTag v-for="tag in tags" :key="tag" :text="tag" />
				<br />
			</li>
		</ul>
	</nav>
</template>

