<template>
  <div class="component-three">
    <h1>Component Three</h1>
    <Message :message="$message" />
    <Message :message="hello" />
  </div>
</template>

<script>
import messageMixin from "../mixins/message.js";

import Message from "./Message.vue";

export default {
  name: "ComponentThree",
  mixins: [messageMixin],
  components: {
    Message
  },
  computed: {
    hello() {
      return "This is a message from the component";
    }
  }
};
</script>

<style>
.component-three {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
}
</style>
