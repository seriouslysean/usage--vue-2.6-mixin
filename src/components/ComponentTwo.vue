<template>
  <div class="component-two">
    <h1>Component Two</h1>

    <Message :message="$message" />
    <Message :message="hello" />

    <p>{{ $formatCurrency(8.19232745) }}</p>
  </div>
</template>

<script>
import currencyMixin from "../mixins/currency.js";
import messageMixin from "../mixins/message.js";

import Message from "./Message.vue";

export default {
  name: "ComponentTwo",
  mixins: [currencyMixin, messageMixin],
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
