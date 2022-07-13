import { SquareProps } from "./types";

export function Square(props: SquareProps) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}
