<template>
  <div class="article">
    <ContentDoc>
      <template #not-found>
        <blog-not-found></blog-not-found>
      </template>
    </ContentDoc>
  </div>
</template>

<style scoped>
.article {
  margin: auto;
  padding: 0 0.5em 2em 0.5em;
  max-width: 800px;
}
</style>
