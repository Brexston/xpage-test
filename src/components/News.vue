<template>
	<section class="news">
		<div class="container">
			<div class="news__title">
				{{ title }}
			</div>
			<div class="news__breadcrumbs breadcrumbs">
				<a href="#" class="breadcrumbs__item">Главная</a> /
				<a href="#" class="breadcrumbs__item">Новости</a>
			</div>
			<div class="news__sorting">
				<DatePicker v-model="date">
					<template v-slot="{ inputValue, inputEvents }">
						<input
						class="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
						:value="inputValue"
						v-on="inputEvents"
						/>
					</template>
				</DatePicker>


				<dropdown class="my-dropdown-toggle"
					:options="arrayOfObjects" 
					:selected="object" 
					v-on:updateOption="methodToRunOnSelect" 
					:placeholder="'Select an Item'"
					:closeOnOutsideClick="boolean">
				</dropdown>
			</div>
			<div class="news__list news-list">
				<div class="news-list__item">
					<img class="news-list__img" src="../assets/img/bg1.png" alt="title">
					<div class="news-list__info">
						<a class="news-list__section" href="#">Медицина</a>
						<a class="news-list__section" href="#">Общество</a>
						<div class="news-list__date">02/02/2021</div>
					</div>
					<a class="news-list__title" href="#">Благодаря поддержке предпринимателей. Златоустовские поликлиники оснастили холодильными установками для хранения вакцины</a>
					<a class="news-list__сross" href="#" >
						<img src="../assets/img/cross-icon.svg" alt="Перейти">
					</a>
				</div>
				<div class="news-list__item">
					<img class="news-list__img" src="../assets/img/bg2.png" alt="title">
					<div class="news-list__info">
						<a class="news-list__section" href="#">Медицина</a>
						<div class="news-list__date">29/01/2021</div>
					</div>
					<a class="news-list__title" href="#">Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции.  Роддом Златоуста вновь откроет свои двери 8 февраля</a>
					<a class="news-list__сross" href="#" >
						<img src="../assets/img/cross-icon.svg" alt="Перейти">
					</a>
				</div>
				<div class="news-list__item">
					<img class="news-list__img" src="../assets/img/bg3.png" alt="title">
					<div class="news-list__info">
						<a class="news-list__section" href="#">Коммуналка</a>
						<div class="news-list__date">29/01/2021</div>
					</div>
					<a class="news-list__title" href="#">Осторожно, сосульки! Оттепель на этой неделе привела к тому, что на крышах многих домов образовались опасные ледяные наросты</a>
					<a class="news-list__сross" href="#" >
						<img src="../assets/img/cross-icon.svg" alt="Перейти">
					</a>
				</div>
				<div class="news-list__item">
					<img class="news-list__img" src="../assets/img/bg4.png" alt="title">
					<div class="news-list__info">
						<a class="news-list__section" href="#">Политика</a>
						<div class="news-list__date">29/01/2021</div>
					</div>
					<a class="news-list__title" href="#">В четыре раза меньше вопросов, чем обычно. В Златоусте прошло первое в 2021-м году Собрание депутатов</a>
					<a class="news-list__сross" href="#" >
						<img src="../assets/img/cross-icon.svg" alt="Перейти">
					</a>
				</div>
				<div class="news-list__item">
					<img class="news-list__img" src="../assets/img/bg5.png" alt="title">
					<div class="news-list__info">
						<a class="news-list__section" href="#">Коммуналка</a>
						<div class="news-list__date">29/01/2021</div>
					</div>
					<a class="news-list__title" href="#">В Златоусте сотрудники теротдела проверят магазин, из которого выбрасывали строительный мусор на контейнерную площадку</a>
					<a class="news-list__сross" href="#" >
						<img src="../assets/img/cross-icon.svg" alt="Перейти">
					</a>
				</div>
				<div class="news-list__item">
					<img class="news-list__img" src="../assets/img/bg6.png" alt="title">
					<div class="news-list__info">
						<a class="news-list__section" href="#">Общество</a>
						<div class="news-list__date">29/01/2021</div>
					</div>
					<a class="news-list__title" href="#">ДЧ: Первое Собрание депутатов 2021 года: планируется работа на весь год</a>
					<a class="news-list__сross" href="#" >
						<img src="../assets/img/cross-icon.svg" alt="Перейти">
					</a>
				</div>
				<div class="news-list__item main">
					<img class="news-list__img" src="../assets/img/bg6.png" alt="title">
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
			</div>

			<Pagination/>

		</div>
	</section>
</template>


<script>
import Pagination from '@/components/Pagination.vue'
import dropdown from 'vue-dropdowns';
import { DatePicker } from 'v-calendar';

export default {
	data() {
		return {
			arrayOfObjects: [
				{
					name: 'Медицина',

				},
				{
					name: 'Общество',
				}
			],
			object: {
				name: 'Выбрать рубрику',
			},
			date: new Date(),
		}
	},
	name: 'News',
	props: {
		title: String
	},
	components: {
		Pagination,
		'dropdown': dropdown,
		DatePicker,
	},
	methods: {
		methodToRunOnSelect(payload) {
		this.object = payload;
		}
	}
}
</script>




<style lang="sass">
.news
	&__title
		+text-style(70px,87px)
		font-weight: 700
		color: $dusk-color
		margin: 0 0 5px
	.breadcrumbs
		margin: 0 0 55px
		color: $telegray-color
		&__item
			+text-style(16px,22px)
			margin: 0 0 55px
			color: $telegray-color
	&__sorting
		margin: 0 0 83px
		select
			margin: 0 0 0 50px
		input,select
			width: 468px
	.news-list
		margin: 0 -24.5px
		display: flex
		flex-wrap: wrap
		&__item
			margin: 0 24.5px 80px
			width: calc(33% - 44.5px)
			position: relative
			&.main
				display: flex
				align-items: flex-start
				width: 100%
				padding: 48px
				margin: 0 24px 0
				background: $white-color
				.news-list
					&__img
						margin: 0 50px 0 0
					&__info
						margin: 0 0 23px
					&__title
						max-width: 597px
						margin: 0 0 70px
					&__description
						max-width: 597px
						color: $dusk-color
						+text-style(16px,26px)
						display: block
					&__сross
						right: 50px
						bottom: 47px
						left: auto

		&__img
			display: block
			margin: 0 0 35px
			max-width: 100%
		&__info
			display: flex
			align-items: center
			margin: 0 0 12px
			a
				margin: 0 20px 0 0
			div
				margin: 0 0 0 20px
		&__section
			+text-style(16px, 22px)
			color: $red-color
		&__date
			+text-style(14px,16px)
			color: $telegray-color
		&__title
			+text-style(20px,27px)
			font-weight: 500
			padding: 0 5px 0 0
			margin: 0 0 64px
			color: $dusk-color
			text-overflow: ellipsis
			overflow: hidden
			display: -webkit-box
			-webkit-line-clamp: 4
			-webkit-box-orient: vertical
		&__сross
			position: absolute
			bottom: 0
			left: 0
			img
				display: block


@media screen and (max-width: 1300px)
	.news
		.news-list
			&__item
				margin: 0 22px 80px
			&__title
			&__img
				margin: 0 0 16px
			&__section
				+text-style(14px)
			&__info
				flex-wrap: wrap
				div
					margin: 0
			&__date
				margin: 0

@media screen and (max-width: 1024px)
	.news
		.news-list
			&__item
				&.main
					.news-list
						&__img
							max-width: 50%
			&__title
				+text-style(16px)
				margin: 0 0 36px
				padding: 0
		&__sorting
			margin: 0 0 46px
			input,select
				width: auto


@media screen and (max-width: 767px)
	.news
		&__title
			+text-style(50px,60px)
		.news-list
			margin: 0
			&__item
				width: 100%
				margin: 0 0 32px
				&.main
					margin: 0
					flex-direction: column
					padding: 16px 16px 32px
					.news-list
						&__img
							max-width: 100%
							margin: 0 0 16px
						&__title
							margin: 0 0 16px
						&__description
							+text-style(14px)
						&__сross
							right: auto
							bottom: auto
		&__sorting
			margin: 0 0 46px
			input
				margin: 0 16px 16px 0
				display: block
			select
				margin: 0
.my-dropdown-toggle
	border-radius: 5px
::v-deep .dropdown-toggle
	color: tomato
	font-size: 25px
	font-weight: 800

::v-deep .dropdown-toggle-placeholder 
	color: #c4c4c4


</style>