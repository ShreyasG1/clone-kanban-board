import CardHolder from "./components/CardHolder";
import useBoardState from "./hooks/useBoardState";
import AddTaskModal from "./modals/AddTaskModal";
import useModalActions from "./hooks/useModalActions";

const App = () => {
    const { boardState, handleAddCard } = useBoardState();
    const {
        isModalOpen,
        setIsModalOpen,
        handleOpenModal,
        defaultModalTaskState,
    } = useModalActions();

    return (
        <div className="card-holder-wrapper">
            <AddTaskModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                handleAddCard={handleAddCard}
                defaultModalTaskState={defaultModalTaskState}
            />
            {Object.entries(boardState).map(([title, cards]) => (
                <CardHolder
                    key={title}
                    title={title}
                    cards={cards}
                    handleOpenModal={handleOpenModal}
                />
            ))}
        </div>
    );
};

export default App;
