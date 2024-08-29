import './grid.css';

const Grid = ({ rows, columns }) => {
    return (
        <div className="grid-container">
            {Array.from({ length: rows }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid-row">
                    {Array.from({ length: columns }).map((_, colIndex) => (
                        <div key={colIndex} className="grid-cell"></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Grid;
