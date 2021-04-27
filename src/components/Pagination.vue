<template>
	<div class="pagination">
		<div class="pagination__prev disabled">
			<img src="../assets/img/next-icon.svg" alt="prev">
		</div>
		<div class="pagination__page">
			<a class="current" href="#">1</a>
			<a href="#">2</a>
			<a href="#">3</a>
			<a href="#">4</a>
			<a href="#">...</a>
			<a href="#">123</a>

		</div>
		<div class="pagination__next">
			<img src="../assets/img/next-icon.svg" alt="next">
		</div>
	</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    title: String
  },

}
</script>

<style lang="sass">
.pagination
	+flex(center,center)
	margin: 70px 0
	&__prev
		transform: rotate(180deg)
	&__prev, &__next
		+flex(center,center)
		margin: 0 30px
		&.disabled
			opacity: 0.7
	&__page
		display: flex
		a
			+text-style(20px,24px)
			color: $dusk-color
			font-weight: bold
			padding: 0 10px
			&.current
				border-bottom: 2px solid $red-color
				padding: 0 4px


</style>
