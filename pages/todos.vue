<template>
  <div>
    <ul id="todos">
      <li v-for="todo in todos" :key="todo.id">{{ todo.content }}</li>
    </ul>
    <hr />
    <ul id="list">
      <li v-for="item in lists" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      todos: [],
      lists: [],
    };
  },

  created() {
    console.log("created");
    // fetch("api/messages?userId=10")
    fetch("/api/todos")
      .then((res) => {
        console.log("got res");
        const x = res.json();
        console.log("x:", x);
        return x;
      })
      .then((json) => {
        console.log("***** got results ******");
        console.log("***** results json ******", json);
        this.todos = json.todos;
      });
    fetch("/api/list")
      .then((res) => {
        console.log("got list");
        const x = res.json();
        console.log("x:", x);
        return x;
      })
      .then((json) => {
        console.log("***** got results ******");
        console.log("***** results json ******", json);
        this.lists = json.lists;
      });
  },
};
</script>
