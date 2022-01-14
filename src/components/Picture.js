import React from "react";
import {useDrag} from "react-dnd";

function Picture({user, name, picture, isOver, size}) {
    const [{isDragging}, drag] = useDrag(() => {
        return {
            type: "image",
            item: {id: user},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
                a: monitor.didDrop()
            }),
        }
    });
    return (
        <img
            ref={drag}
            src={picture}
            width={"150px"}
            alt={name}
            className={`${isDragging ? 'dragging' : ''} ${isOver ? 'hover' : ''}`}
            style={size? {width: "inherit"}:{}}

        />
    );
}

export default Picture;