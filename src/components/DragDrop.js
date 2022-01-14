import React, {useEffect, useRef, useState} from "react";
import Picture from "./Picture";
import {useDrop} from "react-dnd";
import {getUserApi} from "../services";
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {PictureInStage} from "./PictureInStage";
import "../App.scss";

function DragDrop() {
    const [pictureList, setPictureList] = useState([]);
    const [board, setBoard] = useState([]);

    const addImageToBoard = (id) => {
        const userPicture = pictureList.find((picture) => id === picture.user);
        if (userPicture && !board.includes(userPicture)) {
            setBoard([...board, userPicture]);
        }
    };
    const imageDownload = useRef()
    const [{isOver, dropResult}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            dropResult: monitor.getDropResult(),
        }),
    }), [pictureList, board]);

    const saveImage = () => {
        domtoimage.toBlob(imageDownload.current, {})
            .then((blob) => {
                saveAs(blob, 'my-picture.png');
            });
    }
    useEffect(async () => {
        const urlApi = 'http://www.mocky.io/v2/59bd9a773c00001303529fe0';
        const getUsers = async () => {
            const usersApi = await getUserApi(urlApi);
            if (usersApi?.users) {
                setPictureList(usersApi.users)
            }
        }
        await getUsers();
    }, [])

    return (
        <div className="users-frame">
            <div>
                <div ref={imageDownload}>
                    <div className="board stage" ref={drop}>
                        {board.map((picture, idx) => <PictureInStage key={idx} {...picture} />)}
                    </div>
                </div>
                <button className="download" onClick={saveImage}>Download</button>
            </div>
            <div className="pictures">
                {pictureList.map((picture, idx) => (
                    <div className={"picture-in-list"} key={idx}>
                        <h4>מס יוזר: {picture.user}</h4>
                        <h4> שם: {picture.name}</h4>
                        <Picture dropResult={dropResult} isOver={isOver} {...picture}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DragDrop;