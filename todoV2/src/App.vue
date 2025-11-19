<!-- App.vue -->
<script>
import TodoFilter from './components/TodoFilter.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoFilter,
    TodoInput,
    TodoList,
  },
  data() {
    return {
      newTodo: '',

      todos: [
        // { id: 1, text: "청소하기", completed: false }
      ],
      filter: 'all', // all | active | done
    };
  },
  computed: {
    computedTodo() {
      if (this.filter === 'all') {
        return this.todos;
      } else if (this.filter === 'false') {
        return this.todos.filter((v) => v.false);
      } else {
        return this.todos.filter((v) => v.completed);
      }
    },
  },
  methods: {
    addTodo(inputMsg) {
      const item = {
        id: Math.random(), // todo id를 고유값으로 랜덤하게 저장
        text: inputMsg, // 할일 텍스트
        completed: false, // 할일 완료 여부
      };
      this.todos.push(item);
    },
    updateTab(tab) {
      this.filter = tab;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((v) => v.id !== id);
    },
    updateTodo(id) {
      console.log('updateTodo 호출됨, id:', id);
      console.log('변경 전:', this.todos);
      this.todos = this.todos.map((v) =>
        v.id === id ? { ...v, completed: !v.completed } : v
      );
      console.log('변경 후:', this.todos);
    },
  },
};
</script>
<template>
  <div class="todo">
    <TodoFilter :filter @update-tab="updateTab" />
    <TodoList
      :computed-todo="computedTodo"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>

<!-- 
TodoItem (클릭!)
  ↓
  this.$emit('update-todo', id)  // List야, update-todo 해줘!
  ↓
TodoList (받음)
  ↓
  @update-todo="updateTodo"  // Item이 보낸 신호 받음
  ↓
  methods의 updateTodo(id) 실행
  ↓
  this.$emit('update-todo', id)  // App이야, update-todo 해줘!
  ↓
App.vue (받음)
  ↓
  @update-todo="updateTodo"  // List가 보낸 신호 받음
  ↓
  methods의 updateTodo(id) 실행
  ↓
  this.todos 실제 수정! -->
