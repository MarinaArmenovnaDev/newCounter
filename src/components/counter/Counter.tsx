import styled from "styled-components";
import {Button} from "../Button.tsx";

type CounterProps = {
    count: number;
    max: number;
    min: number;
    inc: () => void;
    reset: () => void;
    error: string | null;
};
export const Counter = ({count, max, min, inc, reset, error}: CounterProps) => {

    const errorMessage = error || (count < 0 ? "Invalid value!" : null);

    const isIncDisabled = count === max || count < 0;
    const isResetDisabled = count === min || count < 0;

    return (
        <CounterContainer>
            <CounterValue className={count >= max ? 'error' : ''}>
                {errorMessage || count}
            </CounterValue>
            <BtnContainer>
                <Button
                    title={"inc"}
                    onClick={inc}
                    disabled={isIncDisabled}
                />
                <Button
                    title={"reset"}
                    onClick={reset}
                    disabled={isResetDisabled}
                />
            </BtnContainer>
        </CounterContainer>
    );
};

const CounterContainer = styled.div`
    width: 400px;
    height: 350px;
    border: 2px solid #0893dc;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const CounterValue = styled.div`
    height: 50%;
    border: 2px solid #0893dc;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    
    &.maxValue {
        color: red;
    }
    
    &.error {
      color: red;
        text-align: center;
    }

`;

const BtnContainer = styled.div`
    border: 2px solid #0893dc;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
