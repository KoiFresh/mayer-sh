<script lang="ts" setup>
import { ref } from "vue";

const code = ref<HTMLSpanElement | null>(null);

onMounted(() => {
  let index = 0;
  for (const child of code.value?.children ?? []) {
    if (!(child instanceof HTMLElement)) {
      continue;
    }

    let chars = child.innerText.length;
    child.style.setProperty("--chars", chars.toString());
    child.style.setProperty("--prev", index.toString());
    index += chars;
  }
});
</script>

<template>
  <span class="code" ref="code">
    <div class="comment">#!/bin/bash</div>
    <br />
    <br />
    <div class="comment">
      # --------------------------------------------------------
    </div>
    <br />
    <div class="comment"># Script: mayer.sh</div>
    <br />
    <div class="comment">
      # Description: prints information about the author
    </div>
    <br />
    <div class="comment"># Usage: ./mayer.sh</div>
    <br />
    <div class="comment"># Author: Kai Mayer &lt;kai@mayer.sh&gt;</div>
    <br />
    <div class="comment"># Version: 0.0.1</div>
    <br />
    <div class="comment"># Date: 2023-09-07</div>
    <br />
    <div class="comment">
      # --------------------------------------------------------
    </div>
    <br />
    <br />
    <div class="command">echo&nbsp;</div>
    <div class="value">"Willkommen auf meiner Website!"</div>
    <br />
    <div class="command">curl&nbsp;</div>
    <div class="value">
      <a style="color: inherit" href="mayer.sh"
        >https://mayer.sh/mayer.sh&nbsp;</a
      >
    </div>
    <div class="param">-o&nbsp;</div>
    <div class="value">mayer.sh&nbsp;</div>
    <div class="nop">&&&nbsp;</div>
    <div class="command">bash&nbsp;</div>
    <div class="value">./mayer.sh</div>
    <br />
    <br />
    <div class="comment"># Key ID: 7FE1E0CD</div>
    <br />
    <div class="comment"># Key Type: RSA</div>
    <br />
    <div class="comment"># Expires: 2027-07-11</div>
    <br />
    <div class="comment"># Key Size: 4096/4096</div>
    <br />
    <div class="comment">
      # Fingerprint:
      2C23&nbsp;48A2&nbsp;C4AD&nbsp;F105&nbsp;DC46&nbsp;&nbsp;65E0&nbsp;2E6F&nbsp;AD54&nbsp;7FE1&nbsp;E0CD
    </div>
    <br />
    <div class="command">curl&nbsp;</div>
    <div class="value">
      <a style="color: inherit" href="kai@mayer.sh.asc"
        >https://mayer.sh/kai@mayer.sh.asc</a
      >
    </div>
    <br />
    <br />
    <div class="comment"># ...</div>
    <br />
    <br />
  </span>
</template>

<style scoped>
.code {
  color: white;
  white-space: nowrap;
  font-family: monospace;
  font-size: 14px;
}

.code .nop,
.command,
.value,
.comment,
.param {
  display: inline-block;
}

.code .nop {
  color: white;
}

.code .command {
  color: #d7d7ab;
}

.code .value {
  color: #c5947c;
}

.code .param {
  color: #679ad1;
}

.code .comment {
  color: #70925a;
}

.nop,
.comment,
.value,
.command,
.param {
  overflow: hidden;
  width: 0;
  animation-name: typing;
  -webkit-animation-name: typing;
  animation-duration: calc(var(--chars) * 0.01s);
  -webkit-animation-duration: calc(var(--chars) * 0.01s);
  animation-delay: calc(var(--prev) * 0.01s);
  -webkit-animation-delay: calc(var(--prev) * 0.01s);
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes typing {
  0% {
    width: 0px;
  }

  100% {
    width: calc(var(--chars) * 1ch);
  }
}
</style>
