import Card from "./Card";

const CardHolder = ({ title, cards, handleOpenModal }) => {
    return (
        <div>
            <span className="card-holder-title">{title}</span>
            <div className="card-holder">
                {Array.isArray(cards) &&
                    cards.length &&
                    cards.map(({ title, dueDate, assigneeName }, index) => (
                        <Card
                            key={`card_${index}_${title}`}
                            title={title}
                            dueDate={dueDate}
                            assigneeName={assigneeName}
                        />
                    ))}
                <button onClick={() => handleOpenModal(title)}>
                    + Add another task
                </button>
            </div>
        </div>
    );
};

export default CardHolder;
