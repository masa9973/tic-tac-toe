export type SquareProps = {
    value: string | null;
    onClick: any;
};

export type BoardProps = {
    squares: Array<SquareType>;
    onClick: (i: number) => void;
};

export type SquareType = "O" | "X" | null;

export type HistoryData = {
    squares: Array<SquareType>;
};

export type GameState = {
    history: HistoryData[];
    xIsNext: boolean;
    stepNumber: number;
};
