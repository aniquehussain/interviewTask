import React, { Fragment } from 'react';
import { Col } from 'react-bootstrap';

const NoteItem = (props) => {

    const newdate = props.date;

    return (
        <div style={{ backgroundColor: '#fff', color: '#111', borderRadius: '25px' }}>
            <h4> {props.note}</h4>
            <p>{newdate}</p>
        </div>
    )
}

export default NoteItem;
