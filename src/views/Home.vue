<template>
	<Header/>
	<News title="Все новости"/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import News from '@/components/News.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Header,
    News,
    Footer
  }
}
</script>
