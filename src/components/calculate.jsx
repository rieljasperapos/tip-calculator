import { useState } from 'react';

const Calculate = () => {
    const [totalBill, setTotalBill] = useState(0);
    const [numOfPeople, setNumOfPeople] = useState(1);
    const [selectedPercentage, setSelectedPercentage] = useState('10');
    const [tipAmount, setTipAmount] = useState(0);

    const percentages = ['30', '20', '15', '10'];

    const calculateTip = () => {
        const billPerPerson = (totalBill * (Number(selectedPercentage) / 100) / numOfPeople);
        setTipAmount(billPerPerson);
    };

const total = (e) => {
    setTotalBill(e.target.value);
    console.log(e.target.value);
}

const percentageSet = (e) => {
    setSelectedPercentage(e.target.value);
}

const people = (e) => {
    setNumOfPeople(e.target.value);
}

    return (
        <div>
            <div>
                <p>Input on the total bill from the restaurant</p>
                <input type="number" value={totalBill} onChange={total}></input>
            </div>

            <div>
                <p>Service Quality ?</p>
                <select value={selectedPercentage} onChange={percentageSet}>
                {percentages.map((percentage) => (
                    <option key={percentage} value={percentage}>
                        {percentage}%
                    </option>
                ))}
                </select>
            </div>

            <div>
                <p>How many people will share the bill?</p>
                <input type="number" value={numOfPeople} onChange={people}></input>
            </div>

            <div>
                <button onClick={calculateTip}>Calculate</button>
            </div>

            <div>
                <p>PHP</p>
                {(numOfPeople > 1) ? <p>Each: {tipAmount}</p> : <p>{tipAmount}</p>}
            </div>
        </div>
    );
}

export default Calculate;