import { createApp } from "vue";
import Dashboard from "./Components/Dashboard.vue";

const mount = (elem) => {
  const app = createApp(Dashboard);
  app.mount(elem);
};
export { mount };

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}
