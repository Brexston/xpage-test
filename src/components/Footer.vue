<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__social social">
				<div class="social__title">
					Подписывайтесь на нас:
				</div>
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
			<div class="footer__copyright copyright">
				<div class="copyright__description">
					© 2021 «Златоустовское телевидение»
					<a href="#">Политика конфиденциальности</a>
				</div>
				<a href="https://www.xpage.ru/" target="blank" class="copyright__developer">
					<img src="../assets/img/xpage.svg" alt="Xpage">
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="sass">
.footer
	background: $white-color
	padding: 59px 0 49px
	&__social
		padding: 0 0 54px
		margin: 0 0 47px
		border-bottom: 2px solid $dusk-color
	.social
		&__title
			+text-style(24px, 28px)
			margin: 0 0 18px
		&__item
			margin: 0 20px 0 0
			img
				min-width: 23px
	.copyright
		+flex(space-between,center)
		&__description
			color: $dusk-color
			+text-style(14px,22px)
			a
				display: block
				color: $dusk-color
				text-decoration: underline
@media screen and (max-width: 767px)
	.footer
		padding: 40px 0
		&__social
			text-align: center
		.copyright
			flex-direction: column
			&__description
				text-align: center
			&__developer
				margin: 16px 0 0 
</style>