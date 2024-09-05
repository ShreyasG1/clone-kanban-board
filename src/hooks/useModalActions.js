import { useState } from "react";
import { PLANNED } from "../reducers/board";

const useModalActions = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [defaultModalTaskState, setDefaultModalTaskState] = useState(PLANNED);

    const handleOpenModal = (taskState) => {
        if (taskState) setDefaultModalTaskState(taskState);
        setIsModalOpen(true);
    };
    return {
        isModalOpen,
        setIsModalOpen,
        handleOpenModal,
        defaultModalTaskState,
    };
};

export default useModalActions;
