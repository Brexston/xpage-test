<template>
	<Header/>
	<News title="Все новости"/>


  <div class="tes">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import News from '@/components/News.vue'

export default {
  name: 'Home',
  components: {
    Header,
    News
  }
}
</script>
