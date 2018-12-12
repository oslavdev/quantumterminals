import axios from 'axios';




/*========= USER ===========*/

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
                    .then(response => response.data)

    return {
        type:'GET_USER_POSTS',
        payload:request
    }
}


export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
                .then(response => response.data)

    return {
        type:'USER_LOGIN',
        payload:request
    }
}

export function auth(){
    const request = axios.get('/api/auth')
                .then(response => response.data);

    return {
        type:'USER_AUTH',
        payload:request
    }

}

export function getUsers(){
    const request = axios.get(`/api/users`)
                    .then(response => response.data);
    return {
        type:'GET_USER',
        payload:request
    }
}

export function userRegister(user,userList){
    const request = axios.post(`/api/register`,user)

    return (dispatch) =>{
        request.then(({data})=>{
            let users = data.success ? [...userList,data.user]:userList;
            let response = {
                success:data.success,
                users
            }

            dispatch({
                type:'USER_REGISTER',
                payload:response
            })
        })
    }
}

export function getUser(id){
  const request = axios.get(`/api/getUsers?id=${id}`)
    .then(response => response.data)
  return {
    type: 'GET_USERID',
    payload: request
  }
}

export function updateUser(data){
  const request = axios.post(`/api/user_update`, data)
    .then(response => response.data);
  return{
    type:'UPDATE_USER',
    payload:request
  }
}

/*========= SOUND MANAGER ===========*/


export const startGame = () =>{
  return{
    type: 'Noise'
  }
}

export const introTheme = () =>{
  return{
    type: 'Intro'
  }
}

export const gameplay = () =>{
  return{
    type: 'Gameplay'
  }
}

export const standby = () =>{
  return{
    type: 'Standby'
  }
}

export const credits = () =>{
  return{
    type: 'Credits'
  }
}
