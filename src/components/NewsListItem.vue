<template>
	<DefaultNewsListItem v-bind:item="item" v-if="(index+1)%7!=0"/>
	<FeaturedNewsListItem v-bind:item="item" v-if="(index+1)%7==0"/>
</template>
<script>
import DefaultNewsListItem from '@/components/DefaultNewsListItem.vue'
import FeaturedNewsListItem from '@/components/FeaturedNewsListItem.vue'

export default {
	name: 'NewsListItem',
	props: {
		item: Object,
		index: Object
	},
	components: {
		DefaultNewsListItem,
		FeaturedNewsListItem
	}
}
</script>