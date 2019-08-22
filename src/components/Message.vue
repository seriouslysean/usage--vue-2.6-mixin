<template>
  <p class="message">{{ message }}</p>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.message {
    background: #f4f4f4;
    padding: 20px;
}
</style>
