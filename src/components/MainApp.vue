<template>
  <div class="main">
    <fireflies-background />
    <div id="content">
      <div id="introduction">
        <h1>Hi there, I'm Sonny Hu TEST</h1>
      </div>
      <div id="social">
        <social-bar></social-bar>
      </div>
    </div>
  </div>
</template>

<script>
import FirefliesBackground from "./FirefliesBackground.vue";
import SocialBar from "./SocialBar.vue";
export default {
  components: { FirefliesBackground, SocialBar },
};
</script>

<style>
.main {
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
}
#content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10rem;
  z-index: 80;
}

#content h1 {
  color: #eee;
}

#content #introduction {
  margin-bottom: 1.5rem;
}
</style>
