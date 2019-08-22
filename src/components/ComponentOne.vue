<template>
  <div class="component-one">
    <h1>Component One</h1>

    <Message :message="$message" />
    <Message :message="hello" />

    <p>{{ $formatCurrency(1.0387) }}</p>
  </div>
</template>

<script>
import currencyMixin from "../mixins/currency.js";
import messageMixin from "../mixins/message.js";

import Message from "./Message.vue";

export default {
  name: "ComponentOne",
  mixins: [currencyMixin, messageMixin],
  components: {
    Message
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(`This is the mounted hook from the component "${this.$options.name}"`);
  }
};
</script>

<style>
.component-one {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
}
</style>
