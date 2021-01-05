import { Server, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      todo: Model,
      list: Model,
    },

    seeds(server) {
      server.create('todo', { content: 'Learn Mirage JS' });
      server.create('todo', { content: 'Integrate With Vue.js' });
      server.create('todo', { content: 'do some stuff' });
      server.create('list', { content: 'item 1' });
      server.create('list', { content: 'item 2' });
      server.create('list', { content: { some: 'object' } });
    },

    routes() {
      this.namespace = 'api';

      this.get('/todos', (schema) => {
        return schema.todos.all();
      });
      this.get('/list', (schema) => {
        return schema.lists.all();
      });
    },
  });

  return server;
}
