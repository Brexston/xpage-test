<template>
	<div class="news-list__item">
		<img :src="`${item.imageUrl}`" :alt="selecteditem">
	
		<div class="news-list__info">
			<a v-for="tag of item.tags" :key="tag" v-bind:item="tag" class="news-list__section"  href="#"> {{tag}}</a>
			<div class="news-list__date">{{item.date}}</div>
		</div>
		<router-link :to="{ name: 'newsDetails', params: { id: item.id }}" class="news-list__title">{{item.title}}</router-link>
		<router-link :to="{ name: 'newsDetails', params: { id: item.id }}" class="news-list__сross">
			<img src="../assets/img/cross-icon.svg" alt="Перейти">
		</router-link>
	</div>
</template>
<script>
export default {
	name: 'DefaultListItem',
	props: {
		item: Object
	},
}
</script>