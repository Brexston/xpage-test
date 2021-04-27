<template>
    <Header/>
    <NewsItem/>
    <CommentForm/>
    <Footer/>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NewsItem from '@/components/NewsItem.vue'
import CommentForm from '@/components/CommentForm.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'Home',
  components: {
    Header,
    NewsItem,
    CommentForm,
    Footer
  }
}
</script>
