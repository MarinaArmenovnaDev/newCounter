import {Button} from "../button/Button.tsx";
import {ChangeEvent} from "react";
import { S } from "./Settings.styled.ts";

type SettingsProps = {
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    minValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    setClickHandler: () => void;
    max: number;
    min: number;
    invalidValue: boolean;
};

export const Settings = ({
                             maxValueHandler,
                             minValueHandler,
                             setClickHandler,
                             max,
                             min,
                             invalidValue
                         }: SettingsProps) => {
    return (
        <S.SettingsContainer>
            <S.ValuesPanel>
                <S.ValueSection>
                    <S.Span>max value:</S.Span>
                    <S.Input
                        type="number"
                        value={max}
                        onChange={maxValueHandler}
                        className={invalidValue ? 'error' : ''}
                    />
                </S.ValueSection>
                <S.ValueSection>
                    <S.Span>min value:</S.Span>
                    <S.Input
                        type="number"
                        value={min}
                        onChange={minValueHandler}
                        className={invalidValue ? 'error' : ''}
                    />
                </S.ValueSection>
            </S.ValuesPanel>

            <S.BtnContainer>
                <Button
                    title={"set"}
                    onClick={setClickHandler}
                    disabled={invalidValue}
                />
            </S.BtnContainer>
        </S.SettingsContainer>
    );
};
