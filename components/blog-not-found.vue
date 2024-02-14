<template>
  <div class="main">
    <span>
      <span class="emoji">🤷🏼‍♂️</span>
      <span class="error-code"> 404</span>
    </span>
    <h2>The blog article you are looking for, does not exist</h2>
    <span>
      <span>📚&nbsp;</span><nuxt-link to="/blog">See all articles</nuxt-link>
    </span>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 4em;
}

.emoji {
  font-size: 3em;
}

.error-code {
  font-size: 6em;
  font-weight: lighter;
}
</style>
