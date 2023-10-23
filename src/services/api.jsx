import axios from "axios";

const baseURL = "https://sdk.photoroom.com/v1/segment";

export const removeBackground = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);
  const res = await axios.post(baseURL, formData, {
    headers: {
      "X-api-key": "b161a1e0a1f094dc32619a00a477629b7844a586",
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
