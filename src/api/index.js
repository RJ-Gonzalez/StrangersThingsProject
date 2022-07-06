import axios from "axios";

export const cohortName = "2206-FTB-ET-WEB-FT";
export const BASE_URL = `https://strangers-things.herokuapp.com/api/`;

export async function getPosts() {
  try {
    const data  = await fetch(`${BASE_URL}${cohortName}/posts`);
    const result = await data.json()
    return result;
  } catch (error) {
    throw error;
  }
}


// function registerPerson(event){
//     const registerUsername = event.target[0].value
//     const registerPassword = event.target[1].value

//     console.log(`${BASE_URL}${cohortName}/users/register`)
//     const response = await
//     fetch(`${BASE_URL}${cohortName}/users/register`,
//     {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         user:{
//             username: registerUsername,
//             password: registerPassword
//         }
//     })
// })
// const result = await response.json()
// const token = result.data.token
// lovalStorage.setItem("token", token)
// const tokenFromStorage = localStorage.getItem("token")
// console.log(token)
// }
