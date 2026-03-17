import axios from 'axios';

function hasNoLetters(str) {
    return !/[a-zA-Z]/.test(str)
}

const API_URL = 'http://localhost:3000/users';

export default async function login(username, password) {
    if (hasNoLetters(password)) {
        password = parseInt(password);
    }
    console.log('Login:', username, password)

  try {
    const response = await axios.get(`${API_URL}?name=${username}&password=${password}`);

    console.log('Logged in user:', response.data.length)

    if (response.data.length > 0) {
      console.log('Login successful for user:', response.data[0])
      return response.data[0];
    } else {
      return false;
    }

  } catch (error) {
    console.log(error)
    return false;
  }
}
    // axios.get(`${API_URL}?name=${username}&password=${password}`)
    //     .then(function (response) {
    //         console.log(response)
    //         console.log('Logged in user:', response.data.length)
    //         if (response.data.length > 0) {
    //             console.log('Login successful for user:', response.data[0])
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }).catch(function (error) {
    //         console.log(error)
    //     })
// }

export async function signup(username, cpf, email, password) {
    if (hasNoLetters(password)) {
        password = parseInt(password);
    }

    console.log('Signup:', username, password)

  try {
    const response = await axios.post(API_URL, {
      name: username,
      cpf: cpf,
      email: email,
      password: password,
      contacts: []
    });
    console.log('Signed up user:', response.status)

    if (response.status === 201) {
      console.log('Signup successful for user:', response.data)
      return true;
    } else {
      return false;
    }

  } catch (error) {
    console.log(error)
    return false;
  }
}