import { useEffect, useState } from "react";
import Modal from "react-modal";
import { assignees, DONE, PLANNED, STARTED } from "../reducers/board";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        border: "1px solid black",
        width: "25rem",
    },
};

const AddTaskModal = ({
    isOpen,
    onRequestClose,
    handleAddCard,
    defaultModalTaskState,
}) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [taskState, setTaskState] = useState(defaultModalTaskState);
    const [assigneeName, setAssigneeName] = useState(assignees[0]);

    useEffect(() => {
        setTaskState(defaultModalTaskState);
    }, [defaultModalTaskState]);

    const handleSave = () => {
        if (title && date && taskState && assigneeName) {
            handleAddCard(title, date, taskState, assigneeName);
            handleCancel();
        }
    };
    const handleCancel = () => {
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <div className="modal-wrapper">
                <div className="name">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        maxLength={50}
                        placeholder="Enter task name..."
                    />
                </div>
                <div className="date-task-state">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        placeholder="Enter task due date..."
                    />
                    <select
                        value={taskState}
                        onChange={(e) => {
                            setTaskState(e.target.value);
                        }}
                    >
                        {[PLANNED, STARTED, DONE].map((val) => (
                            <option
                                key={val}
                                value={val}
                                selected={val === taskState}
                            >
                                {val}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="assignee-buttons">
                    <div>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={handleCancel}>Cancel</button>
                    </div>
                    <select
                        value={assigneeName}
                        onChange={(e) => {
                            setAssigneeName(e.target.value);
                        }}
                    >
                        {assignees.map((val) => (
                            <option
                                key={val}
                                value={val}
                                selected={val === assigneeName}
                            >
                                {val}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </Modal>
    );
};

export default AddTaskModal;
