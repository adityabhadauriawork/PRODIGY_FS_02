import axios from "axios";

const API = axios.create({
  baseURL: "https://prodigy-fs-02-y8vn.onrender.com/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const loginUser = (data) => API.post("/auth/login", data);

export const getEmployees = () => API.get("/employees");

export const getEmployee = (id) => API.get(`/employees/${id}`);

export const createEmployee = (data) =>
  API.post("/employees", data);

export const updateEmployee = (id, data) =>
  API.put(`/employees/${id}`, data);

export const deleteEmployee = (id) =>
  API.delete(`/employees/${id}`);

export default API;