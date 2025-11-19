<script setup>
const props = defineProps({
  name: String,
});
const emit = defineEmits(['greet']);
const sendGreeting = () => {
  emit('greet', `Hello, ${props.name}!`);
};
// export default {
//   props: {
//     name: String,
//   },
//   emits: ['greet'],
//   methods: {
//     sendGreeting() {
//       this.$emit('greet', `Hello, ${this.name}!`);
//     },
//   },
// };
</script>
<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
