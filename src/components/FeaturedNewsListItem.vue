<template>
	<div class="news-list__item main">
					<img class="news-list__img" src="/bg6.png" alt="title">
					<div class="news-list__wrap">
						<div class="news-list__info">
							<a class="news-list__section" href="#">Общество</a>
							<div class="news-list__date">29/01/2021</div>
						</div>
						<a class="news-list__title" href="#">Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции.  Роддом Златоуста вновь откроет свои двери 8 февраля</a>
						<a class="news-list__description" href="#">Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят...</a>
						<a class="news-list__сross" href="#" >
							<img src="../assets/img/cross-icon.svg" alt="Перейти">
						</a>
					</div>
				</div>
</template>
<script>
export default {
	name: 'FeaturedNewsListItem',
	props: {
		item: Object
	},
}
</script>