import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d467bd94325f48c68fbea65c651cd4f7",
  },
});
