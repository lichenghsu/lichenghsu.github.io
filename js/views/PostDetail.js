export default {
  template: `
    <div>
      <router-link to="/posts">← 回文章列表</router-link>
      <div v-if="loading">載入中...</div>
      <div v-else-if="post">
        <h2>{{ post.title }}</h2>
        <p><small>{{ post.date }}</small></p>
        <div v-html="post.content"></div>
      </div>
      <div v-else>
        <h2>找不到文章</h2>
      </div>
    </div>
  `,
  data() {
    return {
      post: null,
      loading: true
    }
  },
  async mounted() {
    const res = await fetch('/content.json')
    const data = await res.json()
    const slug = this.$route.params.slug
    this.post = data.find(p => p.path === slug)
    this.loading = false
  }
}
