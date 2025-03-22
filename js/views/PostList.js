export default {
  template: `
    <div>
      <h2>文章列表</h2>
      <p v-if="loading">載入中...</p>
      <ul v-else>
        <li v-for="post in posts" :key="post.title">
          <router-link :to="'/post/' + encodeURIComponent(post.path)">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  async mounted() {
    const res = await fetch('/content.json')
    const data = await res.json()
    this.posts = data
    this.loading = false
  }
}
