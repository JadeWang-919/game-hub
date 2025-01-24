import axois from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axois.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "06eaaa5a4b4b4a3aac0b74170ae64979" },
});
