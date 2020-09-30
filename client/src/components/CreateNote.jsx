import React, { useState } from 'react'
import axios from 'axios';


const CreateNote = () => {

    const [formData, setFormData] = useState({
        note: '',
        date: ''
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();

        const newQuery = {
            note: formData.note,
            date: formData.date
        }
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const body = JSON.stringify(newQuery);

            const response = await axios.post('http://localhost:4000/api/create-note', body, config);

        } catch (err) {
            console.log(err.response.data);
        }

    }

    return (
        <div>
            <form onSubmit={e => onSubmit(e)} method="POST">
                <input value={formData.note} onChange={e => onChange(e)} type="text" name="note" />
                <input type="date" name="date" value={formData.date} onChange={e => onChange(e)} />
                <button className='btn btn-danger' type="submit">Create</button>
            </form>

        </div>
    )
}

export default CreateNote;
