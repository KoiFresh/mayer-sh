<script lang="ts" setup>
useHead({
  title: "mayer.sh",
  htmlAttrs: {
    lang: "de",
  },
  meta: [
    {
      name: "description",
      content: "Bash script to print information about the author",
    },
  ],
});

const background = ref<HTMLElement | null>(null);

onMounted(() => {
  const seconds = Math.round(Date.now() / 1000);
  const degrees = (seconds % 200) * (360 / 200);

  if (background.value !== null) {
    background.value.style.transform = `rotate(${degrees}deg)`;
  }
});
</script>

<template>
  <div>
    <div ref="background" class="background"></div>
    <div class="main">
      <div class="header"></div>
      <div class="window">
        <div class="header">
          <i class="red dot"></i>
          <i class="yellow dot"></i>
          <i class="green dot"></i>
        </div>
        <div class="editor">
          <div class="bash-script" hx-get="mayer.sh.html" hx-trigger="load">
            <mayer-sh />
          </div>
        </div>
      </div>
      <div class="footer">
        <span>
          🔔&nbsp;<nuxt-link to="https://dieklingel.de/">dieKlingel</nuxt-link>
        </span>
        <span> 📚&nbsp;<nuxt-link to="/blog">Blog</nuxt-link> </span>
        <span>
          📫&nbsp;<nuxt-link to="mailto:kai@mayer.sh">Get in touch</nuxt-link>
        </span>
        <span>
          🐙&nbsp;<nuxt-link to="https://github.com/koifresh">GitHub</nuxt-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  bottom: calc((var(--size) * -0.65));
  left: calc((var(--size) * -0.65));
  z-index: -1;
  --unit: calc(max(1vw, 1vh));
  --size: calc(var(--unit) * 500);
  width: var(--size);
  height: var(--size);
}

.background::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: #f786f7;
  animation: backg 200s linear infinite;
  background-image: url("assets/background.svg");
  background-size: 100%;
}

@keyframes backg {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.main {
  font-family: "Courier New", Arial;
  max-width: 50em;
  margin: auto;
}

.window {
  border-radius: 0.4em;
  color: white;
  background-color: #252525;
  overflow: hidden;
  max-width: 50em;
  margin: auto;
}

.window .editor {
  margin: 0.5em;
  overflow-x: auto;
}

.window .header {
  background-color: #323232;
  padding: 0.2em 0em 0 0.4em;
}

.window .header .dot {
  display: inline-block;
  border-radius: 50%;
  width: 0.7em;
  aspect-ratio: 1;
  margin-right: 0.3em;
}

.window .header .red.dot {
  background-color: #ec6b5f;
}

.window .header .yellow.dot {
  background-color: #f5bf4f;
}

.window .header .green.dot {
  background-color: #63c856;
}

.footer {
  margin: 0.5em 0;
  font-weight: 700;
  color: whitesmoke;
  display: flex;
  justify-content: space-around;
  gap: 0.5em;
  flex-wrap: wrap;
}

.footer > * {
  padding: 0.1em;
  text-align: center;
}
</style>
