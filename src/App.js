import './App.css';
import {useState} from "react";
import DetectPangram from './components/DetectPangram';
import TenMinutWalk from './components/TenMinutWalk';
import ConsecutiveStrings from './components/ConsecutiveStrings';
import {RomanNumeralsDecoder} from "./components/RomanNumeralsDecoder";
import {DubStep} from "./components/DubStep";

function App() {
    const initialState = {
        optionArray: [
            'Detect Pangram',
            'Take a Ten Minute Walk',
            'Consecutive strings',
            'Roman Numerals Decoder',
            'Dubstep'
        ],
        currentComponent: 'Dubstep'
    };

    const [state, setState] = useState(initialState);

    const onChangeHandle = (eve) => {
        setState(prevState => {
            return {
                ...prevState,
                currentComponent: eve.target.value
            }
        })
    }

    let drawCurrentComponent;

    switch (state.currentComponent) {
        case 'Detect Pangram':
            drawCurrentComponent = < DetectPangram/>;
            break;
        case 'Take a Ten Minute Walk':
            drawCurrentComponent = < TenMinutWalk/>;
            break;
        case 'Consecutive strings':
            drawCurrentComponent = < ConsecutiveStrings/>;
            break;
        case 'Roman Numerals Decoder':
            drawCurrentComponent = <RomanNumeralsDecoder/>;
            break;
        case 'Dubstep':
            drawCurrentComponent = <DubStep/>;
            break;
        default:
            alert('Huston we have a problem')
    }

    return (<div
            className='appWrapper'
        >
            <select
                onChange={onChangeHandle}
                value={state.currentComponent}> {
                state.optionArray.map((el, index) =>
                    <option
                        value={el}
                        key={index}
                    >
                        {el}
                    </option>)
            }
            </select>
            {drawCurrentComponent}
        </div>
    );
}

export default App;
