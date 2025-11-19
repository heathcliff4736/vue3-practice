<!-- TodoItem.vue -->
<script>
export default {
  props: {
    todo: {
      // 단일 객체
      type: Object,
      required: true,
    },
  },
  emits: ['update-todo', 'delete-todo'],
  methods: {
    deleteTodo(id) {
      this.$emit('delete-todo', id);
    },
    updateTodo(id) {
      this.$emit('update-todo', id);
    },
  },
};
</script>
<template>
  <div class="todo__item" :class="{ 'todo__item--completed': todo.completed }">
    <input
      type="checkbox"
      :id="`chk${todo.id.toString()}`"
      :checked="todo.completed"
      @click="updateTodo(todo.id)"
    />
    <label
      :for="`chk${todo.id.toString()}`"
      class="todo__checkbox-label"
    ></label>
    <span class="todo__item-text">
      {{ todo.text }}
    </span>
    <span
      class="material-symbols-outlined todo__delete-icon"
      @click="deleteTodo(todo.id)"
    >
      delete
    </span>
  </div>
</template>
