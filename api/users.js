import axios from 'axios';
import { hasNoLetters } from '../functions/Validation';


// link da api
const API_URL = 'http://localhost:3000/users';

export default async function login(username, password) {

  // se a senha tiver apenas números ela será convertida para int
  if (hasNoLetters(password)) {
    password = parseInt(password);
  }
  //console.log('Login:', username, password)

  try {
    // fazendo request GET para API
    const response = await axios.get(`${API_URL}?name=${username}&password=${password}`);

    //console.log('Logged in user:', response.data.length)

    if (response.data.length > 0) {
      //console.log('Login successful for user:', response.data[0])
      return response.data[0];
    } else {
      return false;
    }

  } catch (error) {
    console.log(error)
    return false;
  }
}

export async function signup(username, cpf, email, password) {

  // convertando senha númerica para int
  if (hasNoLetters(password)) {
    password = parseInt(password);
  }

  //console.log('Signup:', username, password)

  try {
    // fazendo request POST para API
    const response = await axios.post(API_URL, {
      name: username,
      cpf: cpf,
      email: email,
      password: password,
      contacts: []
    });
    //console.log('Signed up user:', response.status)

    if (response.status === 201) {
      //console.log('Signup successful for user:', response.data)
      return response;
    } else {
      return false;
    }

  } catch (error) {
    console.log(error)
    return false;
  }
}