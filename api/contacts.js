import axios from 'axios';

// link da API
const API_URL = 'http://192.168.70.47:3000/users';

export async function getContacts(user_id) {
  try {
    // request GET do objeto usuário
    const response = await axios.get(`${API_URL}/${user_id}`);

    //console.log('Retrieved contacts:', response.data.contacts.length)

    if (response.data.contacts.length > 0) {
      //console.log('Contacts retrieved for user:', response.data.contacts)

      // retorna os contatos do usuário
      return response.data.contacts;
    } else {
      return false;
    }

  } catch (error) {
    console.log("Erro ao retornar contatos:", error)
    return false;
  }
}

export async function addContact(userId, newContact) {
  try {

    // GET o usuário
    const response = await axios.get(`${API_URL}/${userId}`);
    const user = response.data;

    // criando ID para o contato
    let contactId = 1;

    if (user.contacts.length > 0) {
      contactId = (user.contacts[response.data.contacts.length - 1].id) + 1
    }

    newContact.id = contactId

    // adicionando o novo contato à lista de contatos
    const updatedContacts = [...user.contacts, newContact];

    // request PATCH para atualizar os contatos do usuário
    const updatedUser = await axios.patch(`${API_URL}/${userId}`, {
      contacts: updatedContacts
    });

    return updatedUser.data.contacts;

  } catch (error) {
    console.log("Erro ao adicionar contato:", error);
    return false
  }
}

export async function updateContact(userId, newContact) {
  try {
    // request GET do usuário
    const response = await axios.get(`${API_URL}/${userId}`);
    const user = response.data;
    const contactId = newContact.id

    // atualizando informações do contato através do id
    const updatedContacts = user.contacts.map(contact =>
      contact.id === contactId
        ? { ...contact, name: newContact.name, phone: newContact.phone, email: newContact.email }
        : contact
    )

    // atualizando a lista de contatos do usuário
    const updatedUser = await axios.patch(`${API_URL}/${userId}`, {
      contacts: updatedContacts
    });

    return updatedUser;

  } catch (error) {
    console.log("Erro ao atualizar contato:", error);
    return false
  }
}

export async function deleteContact(userId, contactId) {
  try {
    // request GET do usuer
    const response = await axios.get(`${API_URL}/${userId}`);
    const user = response.data;

    // filtrando lista de contatos para deixar o contactId em questão de fora
    const updatedContacts = user.contacts.filter(
      contact => contact.id !== contactId
    );

    // salvando nova lista de contatos, sem o contato deletado
    const updatedUser = await axios.patch(`${API_URL}/${userId}`, {
      contacts: updatedContacts
    });

    if (updatedUser.statusText === 'OK') {
      //console.log('user deleted')
      return updatedUser
    } else {
      console.log('error:', updatedUser.status, updatedUser.statusText)
      return false
    }
  } catch (error) {
    console.log('Erro ao deletar contato:', error)
    return false
  }
}