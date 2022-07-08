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

export async function addPosts(token, NewPost){
  try{
  const response = await fetch(`${BASE_URL}${cohortName}/posts`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      post: NewPost
    })
  })
    const result = await response.json()
    console.log(result)
} catch(error){
  throw error;
}
  }

  export async function deletePosts(){
    try{
      const response = await fetch(`${BASE_URL}${cohortName}/posts`, {
        method: 'DELETE',
      });
      const result = await response.json()
      console.log(result)
    } catch (error){
      throw error;
    }

  }



export async function loginUser (username, password) {
  try{
  const response = await fetch(`${BASE_URL}${cohortName}/users/login`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }})
    
  }
  )
  console.log(response, "response - loginUser")
  const result = await response.json()
  const token = result.data.token
  return token
  }catch(error){
    throw error
  }  
}


export const getProfile = async (token) => {
  const response = await fetch(`${BASE_URL}${cohortName}/users/me`,
  {
    headers: {
      "Content-Type" : "application.json",
      "Authorization": 'Bearer ${token}'
    }
  })
}



export async function getUser(authToken){
  console.log(authToken, "This is authtoken");
  try{
    const userData ={
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${authToken}`
    }
    const response = await fetch(`${BASE_URL}${cohortName}/users/me`,{
      headers: userData
    })
    const result = await response.json()
    return result 
  } catch (error){
    throw error;
  }
}

// function registerPerson(event){
//     const registerUsername = event.target[0].value
//     const registerPassword = event.target[1].value

//     console.log(`${BASE_URL}${cohortName}/users/register`)
//     const response =  fetch(`${BASE_URL}${cohortName}/users/register`,
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
// const result = response.json()
// const token = result.data.token
// localStorage.setItem("token", token)
// const tokenFromStorage = localStorage.getItem("token")
// console.log(token)
// }



// localStorage.getItem('')
// https://developer.mozilla.org/en-US/docs/Web/API/Window?localStorage