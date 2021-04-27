<template>
	<section class="news-item">
		<div class="container">
			<div class="news-item__title">
				{{ $route.params.id }}
				Госпитальная база закрыта, учреждение вернётся в «доковидный» режим после дезинфекции.  Роддом Златоуста вновь откроет свои двери 8 февраля
			</div>
			<div class="news-item__breadcrumbs breadcrumbs">
				<a href="#" class="breadcrumbs__item">Главная</a> /
				<a href="#" class="breadcrumbs__item">Новости</a> /
				<a href="#" class="breadcrumbs__item">Медицина</a>
			</div>
			<div class="news-item__info">
				<a class="news-item__section" href="#">Медицина</a>
				<div class="news-item__date">29/01/2021</div>
			</div>
			<div class="news-item__content">
				<strong>
					Ещё одна главная новость дня — с 8 февраля златоустовский роддом возвращается к привычному формату работы. Госпитальную базу для лечения больных коронавирусной инфекцией переводят в профильный режим. Приказ Министерство здравоохранения Челябинской области выпустило 27 января.
				</strong>
				<p>Напомним, перепрофилировать родильный дом решили в связи с ежедневным большим приростом златоустовцев, заболевших ковид-19.  За это время лечение на госпитальной базе прошли свыше 1000 пациентов.</p>
				<div class="video">
					<video poster="/bg2.png" src="video/test.mp4"></video>
				</div>
				<h4>Александр Дорофеев</h4>
				<span>главный врач родильного дома г. Златоуста:</span>
				<p>«На сегодняшний день в МПЦ находятся 46 больных. Большая часть из них будет переведена на базу квартала Медик и меньшая часть – на базу долечивания, в район метзавода. В воскресенье к нам приезжает дезостанция для обработки всех помещений. С 1 по 7 число проводится заключительная дезинфекция всего родильного дома. С 8 числа мы начинаем принимать беременных и рожениц нашего города и горнозаводской зоны».</p>
				<hr>
				<p>Подготовка к возвращению профильной деятельности больниц проводится тщательным образом. Это полная дезинфекция помещений, забор ряда лабораторных анализов. И только после разрешения всех инстанций медицинское учреждение поступает к работе. Златоуст — не единственный город, где в связи со стабилизацией обстановки с коронавирусной инфекцией медицинские объекты возвращаются к плановому приёму пациентов. Решение по сокращению коечных мест для больных ковидом принимается оперативным штабом по борьбе с коронавирусной инфекцией при Правительстве Челябинской области. Оставшиеся ковид-базы перейдут в прежний режим работы при условии улучшения ситуации.</p>
			</div>
			<div class="news-item__actions actions">
				<div class="actions__item">
					<div class="actions__title">Автор материала</div>
					<div class="actions__content">Иван Анатольев</div>
				</div>
				<div class="actions__item">
					<div class="actions__title">Теги</div>
					<div class="actions__content">
						<a href="#">Роддом</a> / 
						<a href="#">Вакцинация</a> /
						<a href="#">Коронавирус</a>
					</div>
				</div>
				<div class="actions__item">
					<div class="actions__title">Поделиться</div>
					<div class="actions__content social">
						<a href="#" target="blank" class="social__item">
							<img src="../assets/img/yt-icon.svg" alt="Youtube">
						</a>
						<a href="#" target="blank" class="social__item"> 
							<img src="../assets/img/fb-icon.svg" alt="Facebook">
						</a>
						<a href="#" target="blank" class="social__item">
							<img src="../assets/img/vk-icon.svg" alt="Vkontakte">
						</a>
						<a href="#" target="blank" class="social__item">
							<img src="../assets/img/ok-icon.svg" alt="OK">
						</a>
						<a href="#" target="blank" class="social__item">
							<img src="../assets/img/inst-icon.svg" alt="Instagram">
						</a>
					</div>
				</div>
			</div>
		</div>

	</section>
</template>

<script>
export default {
  name: 'NewsDetails',
}
</script>

<style lang="sass">
.news-item
	&__title
		+text-style(52px,65px)
		font-weight: 700
		color: $dusk-color
		margin: 0 0 16px
	.breadcrumbs
		margin: 0 0 55px
		color: $telegray-color
		&__item
			+text-style(16px,22px)
			margin: 0 0 75px
			color: $telegray-color
	&__info
		display: flex
		align-items: center
		padding: 0 0 13px
		margin: 0 0 43px
		border-bottom: 2px solid $dusk-color
		max-width: 985px
	&__section
		+text-style(16px, 22px)
		color: $red-color
	&__date
		+text-style(14px,16px)
		color: $telegray-color
		margin-left: 40px
	&__content
		max-width: 985px
		padding: 0 0 72px
		color: $dusk-color
		strong
			font-weight: 700
		p
			font-weight: 300
			margin: 29px 0
		span
			display: block
			+text-style(14px)
			color: $telegray-color
		h4
			+text-style(20px,27px)
			margin: 0
		hr
			border: 0
			border-bottom: 2px solid $dusk-color
			background: $dusk-color
			margin: 48px 0
		.video
			width: 100%
			margin: 52px 0 45px
			+flex(center,center)
			position: relative

			video
				width: 100%
			&::after
				content: ''
				width: 135px
				height: 135px
				background:  rgba(255, 255, 255, 0.65)
				position: absolute
				left: 0
				right: 0
				margin: 0 auto
				border-radius: 50%
			&::before
				content: ''
				width: 30px
				height: 34px
				position: absolute
				left: 0
				right: 0
				margin: 0 auto
				background: url(../assets/img/play-icon.svg) no-repeat center
				z-index: 1
	&__actions
		max-width: 985px
		padding: 0 0 136px
	.actions
		display: flex
		margin: 0 -25px
		&__item
			margin: 0 25px
			min-width: 339px
			&:last-child
				min-width: 208px
				margin: 0 0 0 25px
			
		&__title
			+text-style(16px,22px)
			color: $dusk-color
			padding: 0 0 14px
			border-bottom: 2px solid  $dusk-color
			margin: 0 0 14px
		&__content
			+text-style(20px,27px)
			font-weight: 500
			a
				+text-style(16px,22px)
				color: $dusk-color
			.social
				display: flex
				&__item
					&:not(:last-child)
						margin: 0 16px 0 0

@media screen and (max-width: 1024px)
	.news-item
		&__actions
		.actions
			flex-direction: column
			margin: 0
			&__item
				margin: 0
				min-width: 100%
				&:last-child
					margin: 0
			&__title
				padding: 0
				margin: 0 0 8px
				border: 0
			&__content
				border-bottom: 2px solid  $dusk-color
				padding: 0 0 8px
				margin: 0 0 8px

@media screen and (max-width: 767px)
	.news-item
		&__title
			+text-style(32px)
		&__content
			padding: 0 0 16px
		&__actions
			padding: 0 0 64px
</style>