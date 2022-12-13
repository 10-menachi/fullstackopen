import axios from 'axios'

const base_url = 'http://localhost:3001/persons'

const get_all_persons = () => axios.get(base_url)
const add_new_contact = contact => axios.post(base_url, contact)
const delete_contact = contact => axios.delete(`${base_url}/${contact.id}`)
const update_contact = contact => axios.put(`${base_url}/${contact.id}`, contact)
export default { get_all_persons, add_new_contact, delete_contact, update_contact }