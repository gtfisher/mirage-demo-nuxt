if (process.env.NODE_ENV === "development") {
  require("../src/miragejs/server").makeServer();
}
