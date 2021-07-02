import React, { useState } from 'react';


const DetectPangram = () => {
    const [currentValue, setCurrentValue] = useState('');
    const [drawAnswer, setDrawAnswer] = useState('');
    const onChangeStringHandle = (eve) => setCurrentValue(eve.target.value);

    const checkStringHandle = () => {
        const alphabetArray = 'absdefghijklmnopqrstuvwxyz'.split('');
        let tempStr = currentValue.split(' ').join('').toLowerCase();
        let flag = true;
        let counter = 0;

        alphabetArray.forEach(el => {
            if (tempStr.indexOf(el, 0) < 0) {
                return flag = false;
            } else {
                counter++;
            }
        })
        flag = counter === 26 ? true : false;
        return flag ? setDrawAnswer('Pangram') : setDrawAnswer('No Pangram');
    }

    return (
        <div>
            <h1>DETECT PANGRAM</h1>
            <p>
                A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

                Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
            </p>
            <label>
                <input
                    value={currentValue}
                    onChange={onChangeStringHandle}
                />
            </label>
            <button
                onClick={checkStringHandle}
            >
                check a string
            </button>
            <h2>Answer: {drawAnswer} </h2>
        </div >
    )
}

export default DetectPangram;