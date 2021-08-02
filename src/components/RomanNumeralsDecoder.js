import React, {useState} from "react";

export const RomanNumeralsDecoder = () => {
    const [inputValue, setInputValue] = useState('');
    const changeValueHandler = (eve) => setInputValue(eve.target.value);
    const [answer, setAnswer] = useState(0);

    const decodeHandler = roman => {
        const tempArray = [];
        roman.split('').forEach(el => {
            switch (el) {
                case 'M':
                    tempArray.push(1000);
                    break;
                case 'D':
                    tempArray.push(500);
                    break;
                case 'C':
                    tempArray.push(100);
                    break;
                case 'L':
                    tempArray.push(50);
                    break;
                case 'X':
                    tempArray.push(10);
                    break;
                case 'V':
                    tempArray.push(5);
                    break;
                case 'I':
                    tempArray.push(1);
                    break;
                default:
                    alert('Huston we have a problem')
            }
        });
        tempArray.push(0);
        let tempAnswer = 0;
        for (let i = 1; i < tempArray.length; i++) {
            if (tempArray[i] <= tempArray[i - 1]) {
                tempAnswer += tempArray[i - 1]
            } else {
                tempAnswer += tempArray[i] - tempArray[i - 1]
                i++
            }
        }
        setAnswer(tempAnswer);
    }

    return (
        <div>
            <h1>Roman Numerals Decoder</h1>
            <p>Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal
                integer. You don't need to validate the form of the Roman numeral.

                Modern Roman numerals are written by expressing each decimal digit of the number to be encoded
                separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M,
                900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666,
                "MDCLXVI", uses each letter in descending order.
            </p>
            <div>
                <input
                    style={{width: '200px', display: 'inline-block', margin: '0 50px'}}
                    type="text"
                    placeholder='input Roman Number'
                    value={inputValue}
                    onChange={changeValueHandler}
                />
                <button
                    style={{display: 'inline-block', marginRight: '50px', padding: '5px'}}
                    onClick={() => decodeHandler(inputValue)}
                >decode
                </button>
                <span>{answer}</span>
            </div>
        </div>
    )
}
