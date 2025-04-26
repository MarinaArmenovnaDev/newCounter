import { S } from "./Button.styled";

type ButtonProps = {
    title: string;
    onClick?: () => void;
    disabled?: boolean;

};
export const Button = ({title, onClick, disabled}: ButtonProps) => {
    return (
        <S.Button onClick={onClick} disabled={disabled}>{title}</S.Button>
    );
};
