<template>
  <div class="component-two">
    <h1>Component Two</h1>
    <Message :message="$message" />
    <Message :message="hello" />
  </div>
</template>

<script>
import messageMixin from "../mixins/message.js";

import Message from "./Message.vue";

export default {
  name: "ComponentTwo",
  mixins: [messageMixin],
  components: {
    Message
  }
};
</script>

<style>
.component-two {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
}
</style>
