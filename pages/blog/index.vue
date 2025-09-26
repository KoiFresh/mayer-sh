<template>
  <div class="main">
    <h1>📚 Blog</h1>
    <ContentList :query="{ path: '/blog', sort: [{ date: -1 }] }">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._id">
          <i class="date">{{ new Date(article.date).toDateString() }}</i>
          <nuxt-link :to="article._path">{{ article.title }}</nuxt-link>
        </div>
      </template>
      <template #not-found>
        <span>No blog articels found!</span>
      </template>
    </ContentList>
    <br />
    <br />
    <div>
      <span>🧑🏼‍💻&nbsp;<a href="/blog/rss.xml" target="_blank">RSS Feed</a></span>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin: auto;
  padding: 0 0.5em;
  max-width: 800px;
}

.date {
  display: inline-block;
  min-width: 9em;
}
</style>
