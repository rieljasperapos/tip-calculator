import { useState } from 'react';

const Share = () => {
    const [numberOfPeople, setNumber] = useState('');

    const handleChange = (e => {
        setNumber(e.target.value);
        console.log(e.target.value);
    })

    return (
        <input type="text" placeholder="Number of people" value={numberOfPeople} onChange={handleChange}></input>
    )
}

export default Share;