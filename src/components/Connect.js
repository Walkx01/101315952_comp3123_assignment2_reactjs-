import axios from "axios";

const baseUrl = "https://101315952-comp-3123-assignment1.vercel.app/";

export async function getEmployees() {
  const employees = `${baseUrl}api/emp/employees`;

  try {
    const data = await axios.get(employees);
    return data;
  } catch (error) {
    return error.message;
  }
}
