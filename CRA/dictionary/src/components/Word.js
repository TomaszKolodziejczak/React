import React from 'react';
import './Word.css'

const Word = props => (
    <li>English: <strong>{props.en} </strong>
        Polish: <strong>{props.pl}</strong></li>
)

export default Word;