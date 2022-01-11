import api from './apiConfig';

export const getAllData = async () => {
  const resp = await api.get("/form");
  return resp.data;
}

export const postForm = async (formData) => {
  const resp = await api.post("/form", { form: formData });
  return resp.data;
}