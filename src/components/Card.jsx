const Card = ({ title, dueDate, assigneeName }) => {
    return (
        <div className="card-wrapper">
            <span key={title}>{title}</span>
            <span key={dueDate}>{`Due: ${dueDate}`}</span>
            <span key={assigneeName}>{assigneeName}</span>
        </div>
    );
};

export default Card;
