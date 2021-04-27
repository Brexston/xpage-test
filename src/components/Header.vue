<template>
	<header class="header"> 
		<div class="container">
			<div class="header__top header-top">
				<div class="header-top__offer">Предложить новость</div>
				<a class="header-top__phone" href="tel:835136517111">8(3513)65-17-11</a>
				<div class="header-top__search"></div>
			</div>
			<div class="header__menu header-menu">
				<div class="hamburger">
					<div class="hamburger__item hamburger__item-one"></div>
					<div class="hamburger__item hamburger__item-two"></div>
					<div class="hamburger__item hamburger__item-three"></div>
				</div>
				<div class="header-menu__nav">
					<div class="close"></div>
					<ul class="nav">
						<li class="nav__item">
							<a class="nav__link" href="#">Новости</a>
						</li>
						<li class="nav__item">
							<a class="nav__link" href="#">Телепроекты</a>
						</li>
						<li class="nav__item">
							<a class="nav__link" href="#">Реклама</a>
						</li>
						<li class="nav__item dropdown">
							<a class="nav__link" href="#">Онлайн</a>
						</li>
						<li class="nav__item">
							<a class="nav__link" href="#">Программа передач</a>
						</li>
						<li class="nav__item dropdown">
							<a class="nav__link" href="#">Еще</a>
						</li>
					</ul>
				</div>
				<div class="header-menu__social social">
					<div class="social__title">Подписывайтесь на нас:</div>
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
	</header>
</template>


<script>
export default {
  name: 'Header',
}
</script>

<style lang="sass">
.header
	padding: 52px 0 0
	&__top
		+flex(space-between,center)
		margin: 0 0 59px
	.header-top
		&__offer
			+text-style(16px,16px)
			font-weight: 500
			color: $red-color
			padding: 17px 0
			border: 2px solid $red-color
			border-radius: 56px
			min-width: 224px
			text-align: center
			cursor: pointer
		&__phone
			margin: 0 44px 0 auto
			color: $dusk-color
			+text-style(20px,27px)
			font-weight: 700
			text-decoration: none
		&__search
			width: 18px
			height: 18px
			background: url(../assets/img/search-icon.svg) no-repeat
			cursor: pointer
	&__menu
			margin: 0 0 55px 
			border-bottom: 4px solid $dusk-color
			+flex(space-between,flex-start)
	.header-menu
		.nav
			display: flex
			padding: 0 0 24px
			margin: 0
			&__item
				list-style: none
				&:not(:last-child)
					margin: 0 48px 0 0
				&.dropdown
					.nav__link
						+flex(flex-start,center)
						&::after
							content: ''
							width: 8px
							height: 4px
							background: url(../assets/img/arrow-icon.svg) no-repeat
							display: inline-block
							background-size: contain
							margin: 0 0 0 8px
							+transition
					&:hover
						.nav__link
							&::after
								transform: rotate(180deg)
			&__link
				text-decoration: none
				+text-style(20px,27px)
				font-weight: 700
				color: $dusk-color
		.social
			+flex(flex-start,center)
			&__title
				+text-style(20px,27px)
				font-weight: 700
				color: $dusk-color
				margin: 0 48px 0 0
			&__item
				&:not(:last-child)
					margin: 0 16px 0 0
		.hamburger
			display: none


@media screen and (max-width: 1300px)
	.header
		.header-menu
			.social
				&__title
					display: none

@media screen and (max-width: 1024px)
	.header
		&__menu
			align-items: center
			padding: 0 0 16px
			margin: 0 0 32px
		&__top
			margin: 0 0 24px
		.header-menu
			&__nav
				display: none
			.hamburger
				height: 14px
				width: 16px
				position: relative
				display: block
				&__item
					width: 16px
					height: 2px
					background: $dusk-color
					position: absolute
					left: 0
					+transition
					&-one
						top: 0
					&-two
						top: 50%
						transform: translateY(-50%)
					&-three
						top: calc(100% - 2px)

			.nav
				&__item
					&:not(:last-child)
						margin: 0 24px 0 0
@media screen and (max-width: 1024px)
	.header
		padding: 24px 0 0
		&__top
			flex-direction: column
		.header-top
			&__offer
				+text-style(14px, 16px)
				min-width: 200px
			&__phone
				margin: 16px 0
				order: 1
			&__offer
				order: 2
		.header-menu
			.close
				position: absolute
				right: 16px
				top: 16px
				width: 32px
				height: 32px
				z-index: 1
				&::before, &::after
					position: absolute
					left: 15px
					content: ' '
					height: 24px
					width: 2px
					background-color: $dusk-color
				&::before
					transform: rotate(45deg)
				&::after
					transform: rotate(-45deg)
			.nav
				flex-direction: column
				position: absolute
				background: $white-color
				left: 0
				top: 0
				width: 100%
				height: 100%
				padding: 40px
				&__item
					&:not(:last-child)
						margin: 0 0 16px
</style>