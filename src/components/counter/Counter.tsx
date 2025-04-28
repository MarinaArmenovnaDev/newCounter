import {Button} from "../button/Button.tsx";
import { S } from "./Counter.styled.ts";
import {Dispatch, SetStateAction} from "react";

type CounterProps = {
    count: number;
    max: number;
    min: number;
    setCount: Dispatch<SetStateAction<number>>;
    settingsChanged: boolean;
    invalidValue: boolean;
};

export const Counter = ({count, max, min, setCount, settingsChanged, invalidValue}: CounterProps) => {
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
                    onClick={()=> setCount(count + 1)}
                    disabled={isIncDisabled}
                />
                <Button
                    title={"reset"}
                    onClick={()=>setCount(min)}
                    disabled={isResetDisabled}
                />
            </S.BtnContainer>
        </S.CounterContainer>
    );
};
