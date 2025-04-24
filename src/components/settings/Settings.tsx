import {Button} from "../Button.tsx";
import styled from "styled-components";
import {ChangeEvent} from "react";


type SettingsProps = {
    maxValueHandler: (e:ChangeEvent<HTMLInputElement>) => void;
    minValueHandler: (e:ChangeEvent<HTMLInputElement>) => void;
    setClickHandler: ()=> void;
    max: number
    min: number
};
export const Settings = ({maxValueHandler, minValueHandler, setClickHandler, max, min}: SettingsProps) => {

    return (
        <SettingsContainer>
            <ValuesPanel>
                <ValueSection>
                    <Span>max value:</Span>
                    <Input type="number" value={max} onChange={maxValueHandler}/>
                </ValueSection>
                <ValueSection>
                    <Span>min value:</Span>
                    <Input type="number" value={min} onChange={minValueHandler}/>
                </ValueSection>
            </ValuesPanel>

            <BtnContainer>
                <Button title={"set"} onClick={setClickHandler}></Button>
            </BtnContainer>
        </SettingsContainer>
    );
};

const SettingsContainer = styled.div`
    width: 400px;
    height: 350px;
    border: 2px solid #0893dc;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const ValuesPanel = styled.div`
    height: 50%;
    border: 2px solid #0893dc;
    border-radius: 15px;
    padding: 20px;
`
const ValueSection = styled.div`
    display: flex;
    justify-content: space-between;

    & + & {
        margin-top: 20px;
    }
`

const Span = styled.span`
    color: white;
    font-size: 1.5rem;
`

const Input = styled.input`
    border-radius: 5px;
    text-align: center;

    &.error {
        border-color: red;
    }
`

const BtnContainer = styled.div`
    border: 2px solid #0893dc;
    border-radius: 15px;
    padding: 30px;
    text-align: center;

`
