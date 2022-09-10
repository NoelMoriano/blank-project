import config from "./config.json";
import { includes } from "lodash";

const hostname = window.location.hostname;

const ProdHostnames = [
  "cruzdelsur.webuild.pe",
  "www.cruzdelsur.com.pe",
  "cruzdelsur.com.pe",
];

const currentEnvironment = includes(ProdHostnames, hostname)
  ? "production"
  : "development";

console.log(currentEnvironment);

const {
  apiUrl,
  portalUrl,
  authentication,
  storageUrl,
  googleAnalytics,
  facebookPixel,
  version,
} = {
  ...config[currentEnvironment],
  ...config.common,
};

export {
  apiUrl,
  portalUrl,
  authentication,
  currentEnvironment,
  storageUrl,
  googleAnalytics,
  facebookPixel,
  version,
};
