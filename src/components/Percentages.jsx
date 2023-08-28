import { useState } from 'react';
// import { useRef } from 'react';

const Percentage = () => {
    const [newPercent, setPercent] = useState('');

    const handlePercentChange = (event) => {
        setPercent(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div>
            <select value={newPercent} onChange={handlePercentChange}>
                <option value="30%">30% - Excellent</option>
                <option value="20%">20% - Good</option>
                <option value="15%">15% - Average</option>
                <option value="10%">10% - Mediocre</option>
            </select>
        </div>
    )
}

export default Percentage;