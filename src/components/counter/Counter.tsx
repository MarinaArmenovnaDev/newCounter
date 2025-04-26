import {Button} from "../button/Button.tsx";
import { S } from "./Counter.styled.ts";

type CounterProps = {
    count: number;
    max: number;
    min: number;
    increment: () => void;
    reset: () => void;
    settingsChanged: boolean;
    invalidValue: boolean;
};

export const Counter = ({count, max, min, increment, reset, settingsChanged, invalidValue}: CounterProps) => {
    const isIncDisabled = count === max || invalidValue || settingsChanged;
    const isResetDisabled = count === min || invalidValue || settingsChanged;

    return (
        <S.CounterContainer>
            <S.CounterValue className={invalidValue || min === max ? "error" : count === max? "error" : ""}>
                {invalidValue ? (
                    <span className="error">Invalid Value!</span>
                ) : settingsChanged ? (
                    <span>enter value and press "set"</span>
                ) : (
                    count
                )}
            </S.CounterValue>
            <S.BtnContainer>
                <Button
                    title={"inc"}
                    onClick={increment}
                    disabled={isIncDisabled}
                />
                <Button
                    title={"reset"}
                    onClick={reset}
                    disabled={isResetDisabled}
                />
            </S.BtnContainer>
        </S.CounterContainer>
    );
};
