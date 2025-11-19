<!-- TodoList.vue -->
<script>
import TodoItem from './TodoItem.vue';

export default {
  components: { TodoItem },
  props: {
    computedTodo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['delete-todo', 'update-todo'],
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
  <div class="todo__list">
    <TodoItem
      v-for="item in computedTodo"
      :key="item.id"
      :todo="item"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>
