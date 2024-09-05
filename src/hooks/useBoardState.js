import { useReducer } from "react";
import { boardReducer, initialBoardState } from "../reducers/board";

const useBoardState = () => {
    const [boardState, dispatchBoardState] = useReducer(
        boardReducer,
        initialBoardState
    );

    const handleAddCard = (title, date, taskState, assigneeName) => {
        dispatchBoardState({
            type: "ADD_CARD",
            payload: {
                title,
                date,
                taskState,
                assigneeName,
            },
        });
    };

    return {
        boardState,
        handleAddCard,
    };
};

export default useBoardState;
