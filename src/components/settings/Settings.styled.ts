import styled from "styled-components";

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


export const S = {
    SettingsContainer,
    ValuesPanel,
    ValueSection,
    Span,
    Input,
    BtnContainer,
}
