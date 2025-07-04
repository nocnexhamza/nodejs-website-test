import config from "../config";
import jwt from "jsonwebtoken";

const hasToken = () => {
  const token = localStorage.getItem('token');
  if (!config.isBackend && token) return true;
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = jwt.decode(token);
  if (!data) return;
  return date < data.exp;
}

export default hasToken;
