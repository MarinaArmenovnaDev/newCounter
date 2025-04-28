import './App.css'
import styled from "styled-components";
import {Settings} from "./components/settings/Settings.tsx";
import {Counter} from "./components/counter/Counter.tsx";
import {useState, ChangeEvent} from "react";

function App() {
    const loadInitialValues = () => {
        const savedSettings = localStorage.getItem('counterSettings');
        if (savedSettings) {
            const {maxValue, minValue} = JSON.parse(savedSettings);
            return { max: maxValue, min: minValue };
        }
        return { max: 5, min: 0 };
    };

    const initialValues = loadInitialValues();

    const [max, setMax] = useState<number>(initialValues.max);
    const [min, setMin] = useState<number>(initialValues.min);
    const [count, setCount] = useState<number>(initialValues.min);
    const [settingsChanged, setSettingsChanged] = useState<boolean>(false);

    const invalidValue = max < min || min < 0;

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        setMax(value);
        setSettingsChanged(true);
    }

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        setMin(value);
        setSettingsChanged(true);
    }

    const setClickHandler = () => {
        if (!invalidValue) {
            localStorage.setItem('counterSettings', JSON.stringify({
                maxValue: max,
                minValue: min
            }));
            setCount(min);
            setSettingsChanged(false);
        }
    };

    return (
        <MainContainer>
            <Settings
                maxValueHandler={maxValueHandler}
                minValueHandler={minValueHandler}
                setClickHandler={setClickHandler}
                max={max}
                min={min}
                invalidValue={invalidValue}
            />
            <Counter
                count={count}
                max={max}
                min={min}
                setCount={setCount}
                settingsChanged={settingsChanged}
                invalidValue={invalidValue}
            />
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export default App
