import axios from "axios";

const baseUrl = "https://luxuriant-ambitious-stone.glitch.me/";

export async function getEmployees() {
  const employees = `${baseUrl}api/emp/employees`;

  try {
    const data = await axios.get(employees);
    return data;
  } catch (error) {
    return error.message;
  }
}
