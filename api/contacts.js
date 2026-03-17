import axios from 'axios';

function hasNoLetters(str) {
    return !/[a-zA-Z]/.test(str)
}

const API_URL = 'http://localhost:3000/users';

export async function getContacts(user_id) {
 try {
    const response = await axios.get(`${API_URL}/${user_id}`);

    console.log('Retrieved contacts:', response.data.contacts.length)

    if (response.data.contacts.length > 0) {
      console.log('Contacts retrieved for user:', response.data.contacts)
      return response.data.contacts;
    } else {
      return false;
    }

  } catch (error) {
    console.log(error)
    return false;
  }   
}

export async function addContact(userId, newContact) {
  try {

    // 1️⃣ pegar usuário atual
    const response = await axios.get(`${API_URL}/${userId}`);
    const user = response.data;

    // 2️⃣ pegar lista de contatos
    const updatedContacts = [...user.contacts, newContact];

    // 3️⃣ atualizar usuário
    const updatedUser = await axios.patch(`${API_URL}/${userId}`, {
      contacts: updatedContacts
    });

    return updatedUser.data.contacts;

  } catch (error) {
    console.log("Erro ao adicionar contato:", error);
  }
}