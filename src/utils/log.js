import axios from "axios";
import config from "../config";

/**
 * 该函数用于告知服务端生成的贴纸的id，名称和类型
 * 官方请求内容为：{"id":"5","name":"Airi 03","type":"download"}
 * 官方返回结果为：{"success":true}
 * 目前直接返回：{"success":true}
 * @param {string} id 贴纸的id，
 * @param {string} name 贴纸的名称
 * @param {string} type 当前为 "copy", "download"
 * @returns 
 */
async function log(id, name, type) {
  const key = localStorage.getItem("x-key");
  try {
    const responce = await axios.post(
      `${config.apiUrl}/log`,
      {
        id: id,
        name: name,
        type: type,
      },
      {
        headers: {
          "x-key": key,
        },
      }
    );
    if (responce.data.key) {
      localStorage.setItem("x-key", responce.data.key);
    }
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}

export default log;
