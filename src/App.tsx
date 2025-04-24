import './App.css'
import styled from "styled-components";
import {Settings} from "./components/settings/Settings.tsx";
import {Counter} from "./components/counter/Counter.tsx";
import {useState, useEffect, ChangeEvent} from "react";

function App() {
    const [max, setMax] = useState<number>(5);
    const [min, setMin] = useState<number>(0);
    const [count, setCount] = useState<number>(min);
    const [error, setError] = useState<string | null>(null);

    const invalidValue = max < min || min < 0;

    useEffect(() => {
        if (invalidValue) {
            setError("Invalid values!");
        } else {
            setError(null);
            setCount(min);
        }
    }, [min, max, invalidValue]);



    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        setMax(value);
    }
    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        setMin(value);
    }
    const setClickHandler = () => {
        if (!invalidValue) {
            setCount(min);
            setError(null);
        } else {
            setError("Invalid values!");
        }
    };

    const inc = () => {
        if (count < max) {
            setCount(count + 1);
        }
    }

    const reset = () => {
        setCount(min);
    }

    return (
        <MainContainer>
            <Settings
                maxValueHandler={maxValueHandler}
                minValueHandler={minValueHandler}
                setClickHandler={setClickHandler}
                max={max}
                min={min}
            />
            <Counter
                count={count}
                max={max}
                min={min}
                inc={inc}
                reset={reset}
                error={error}
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
