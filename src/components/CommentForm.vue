<template>
	<section class="news-comment">
		<div class="container">
			<div class="news-comment__title">Оставьте свой комментарий</div>
			<form class="news-comment__form comment-form">
				<div class="comment-form__line first">
					<input type="text" placeholder="Имя">
					<input type="text" placeholder="E-mail"
					>
					
					<label for="file">
						<input type="file"/>Прикрепить фото</label>
				</div>
				<div class="comment-form__line">
					<input type="text" placeholder="Комментарий">
				</div>
				<div class="comment-form__submit">
					<button type="submit">Отправить</button>
				</div>
			</form>
		</div>
	</section>
</template>
<script>
export default {
  name: 'CommentForm',
}
</script>

<style lang="sass">
.news-comment
	background: $dusk-color
	padding: 90px 0 108px
	&__title
		+text-style(52px,65px)
		color: $white-color
		font-weight: bold
		margin: 0 0 54px
	&__form
		max-width: 985px
	.comment-form
		&__line
			display: flex
			input
				background: transparent
				border-bottom: 2px solid $white-color
				padding: 0
				width: 100%
				color: $white-color
				&::placeholder
					color: $white-color
			&.first
				margin: 0 0 40px
				input
					margin: 0 50px 0 0
					&[type="text"]
						width: 339px
					&[type="file"]
						margin: 0
						width: auto
						opacity: 0
						position: absolute
				label
					color: $white-color
					+text-style(14px, 19px)
					+flex(flex-start,center)
					font-weight: 300
					height: 60px
					&::before
						content: ''
						background: url(../assets/img/clip-icon.svg) no-repeat
						width: 16px
						height: 17px
						margin: 0 10px 0 0
		&__submit
			margin: 82px 0 0
			button
				background: none
				border: 0
				color: $white-color
				+text-style(16px,16px)
				font-weight: 500
				padding: 17px
				border: 2px solid $white-color
				border-radius: 56px
				min-width: 162px
				cursor: pointer
@media screen and (max-width: 1024px)
	.news-comment
		padding: 48px 0 56px
		&__title
			+text-style(36px)
		.comment-form
			&__line
				flex-direction: column
				&.first
					margin: 0 0 8px
					input
						&[type="text"]
							width: 100%
							margin: 0 0 8px
			&__submit
				text-align: center
				margin: 64px 0 0

</style>