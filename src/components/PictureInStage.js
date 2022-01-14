import Picture from "./Picture";
import React, {useRef, useState} from "react";
import {useDrag} from 'react-use-gesture'
import DragResizeContainer from 'react-drag-resize';

export const PictureInStage = (props) => {
    const [{xy}, setXY] = useState({xy: [0, 0]})
    const userId = props.user;
    const resizeDiv = useRef()
    const bindImage = useDrag(({offset,event}) => {
        if (event.target !== resizeDiv.current){
            setXY({xy: offset})
        }
    })
    return (
        <div ref={resizeDiv}  {...bindImage(userId)} className="image-in-board"
             style={{
                 position: "absolute",
                 left: xy[0],
                 top: xy[1]
             }}>
            <Picture size={true} {...props}/>
        </div>
    )


}