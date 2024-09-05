// board states
export const PLANNED = "Planned";
export const STARTED = "Started";
export const DONE = "Done";

export const assignees = ["Shreyas", "Gopal"];

export const initialBoardState = {
    [PLANNED]: [
        {
            title: "Random val",
            dueDate: "Random val",
            assigneeName: "Random val",
        },
        {
            title: "Random val",
            dueDate: "Random val",
            assigneeName: "Random val",
        },
    ],
    [STARTED]: [
        {
            title: "Random val",
            dueDate: "Random val",
            assigneeName: "Random val",
        },
    ],
    [DONE]: [
        {
            title: "Random val",
            dueDate: "Random val",
            assigneeName: "Random val",
        },
    ],
};

export const boardReducer = (state, action) => {
    switch (action.type) {
        case "ADD_CARD":
            return {
                ...state,
                [action.payload.taskState]: [
                    ...state[action.payload.taskState],
                    {
                        title: action.payload.title,
                        dueDate: action.payload.date,
                        assigneeName: action.payload.assigneeName,
                    },
                ],
            };
    }
};
