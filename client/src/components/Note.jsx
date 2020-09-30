import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import NoteItem from './NoteItem';
import axios from 'axios';


const Note = () => {

    const [noteArr, setNoteArr] = useState([]);
    // let arr = [];
    useEffect(() => {

        const getNotes = async () => {
            const foundNotes = await axios.get('http://localhost:4000/api/all-notes');
            const resData = foundNotes.data;
            // resData.forEach((data) => {
            //     arr.push(data);
            // })
            setNoteArr(resData);
        }
        getNotes();

    }, [])
    console.log(noteArr, "sad");

    return (
        <Container>
            <Row>
                {noteArr.map((item) => {
                    return (<Col>
                        <NoteItem note={item.note} date={item.date} key={item._id} />
                    </Col>)
                })}
            </Row>
        </Container>
    )
}

export default Note;
