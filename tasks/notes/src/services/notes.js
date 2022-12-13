import axios from 'axios'
const base_url = 'http://localhost:3001/notes'

const get_notes = () => axios.get(base_url)
const add_note = note => axios.post(base_url, note)
const update_note = (id, new_object) => axios.put(`${base_url}/${id}`, new_object)

export default { 
    getNotes: get_notes,
    addNote: add_note, 
    update_note: update_note
}