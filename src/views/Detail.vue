<template>
    <Header/>
    <NewsDetails/>
    <CommentForm/>
    <Footer/>
</template>


<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NewsDetails from '@/components/NewsDetails.vue'
import CommentForm from '@/components/CommentForm.vue'
import Footer from '@/components/Footer.vue'



export default {
  name: 'Home',
  components: {
    Header,
    NewsDetails,
    CommentForm,
    Footer
  }
}
</script>
