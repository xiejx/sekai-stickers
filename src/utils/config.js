// import axios from "axios";
// import config from "../config.json";

/**
 * 该方法用户获取配置值，返回使用总共使用这个app的人数，以及当前用户制作的贴纸的次数
 * 目前直接返回{}，不进行统计
 * 官方返回结果为： {"total":5,"global":3196579}
 * @returns
 */
async function getConfiguration() {
  /*
  const key = localStorage.getItem("x-key");
  const responce = await axios.get(`${config.apiUrl}/config`, {
    headers: {
      "x-key": key,
    },
  });
  if (responce.data.key) {
    localStorage.setItem("x-key", responce.data.key);
  }
  console.log(responce.data);
  return responce.data;
  */
  return {};
}

export default getConfiguration;
