import styled from "styled-components";

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
    text-align: center;

    &.error {
       color: red; 
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


export const S = {
    CounterContainer,
    CounterValue,
    BtnContainer,

}
