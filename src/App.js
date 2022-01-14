import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <h1>Drag And Drop Assignment</h1>
                <h2>Drag the user from the user-list and drop it into the background image</h2>
                <h2>Then you can place the image exactly where you want by double click on the image</h2>
                <DragDrop />
            </div>
        </DndProvider>
    );
}

export default App;




// import './App.css';
// import {getUserApi} from "./services";
// import {useEffect, useState} from "react";
// import domtoimage from 'dom-to-image';
// import {saveAs} from 'file-saver';
//
// const App = () => {
//     const [users, setUsers] = useState(null);
//     const stage = document.querySelector(".stage")
//
//     const saveImage = () => {
//         domtoimage.toBlob(stage)
//             .then( (blob) => {
//                 saveAs(blob, 'my-picture.png');
//             });
//     }
//
//     useEffect(async () => {
//         const getUsers = async () => {
//             const usersApi = await getUserApi('http://www.mocky.io/v2/59bd9a773c00001303529fe0');
//             setUsers(usersApi.users);
//         }
//         await getUsers();
//         const fill = document.querySelector('.fill');
//         const empties = document.querySelectorAll('.empty');
//
// // Fill listeners
//         fill.addEventListener('dragstart', dragStart);
//         fill.addEventListener('dragend', dragEnd);
//
// // Loop through empty boxes and add listeners
//         for (const empty of empties) {
//             empty.addEventListener('dragover', dragOver);
//             empty.addEventListener('dragenter', dragEnter);
//             empty.addEventListener('dragleave', dragLeave);
//             empty.addEventListener('drop', dragDrop);
//         }
//
//         function dragStart() {
//             this.className += ' hold';
//             setTimeout(() => (this.className = 'invisible'), 0);
//         }
//
//         function dragEnd() {
//             this.className = 'fill';
//         }
//
//         function dragOver(e) {
//             e.preventDefault();
//         }
//
//         function dragEnter(e) {
//             e.preventDefault();
//             this.className += ' hovered';
//         }
//
//         function dragLeave() {
//             this.className = 'empty';
//         }
//
//         function dragDrop() {
//             this.className = 'empty';
//             this.append(fill);
//         }
//
//
//     }, [])
//     console.log(users);
//     return (
//         <div className={"page"}>
//             <div className="container">
//                 <h1 className="title">User Images Editor</h1>
//                 <h4 className={"details"}>You can drag the users images to the background and then download the picture
//                     you created!</h4>
//                 <div className="users-frame">
//                     <div className="image_and_button">
//                         <div className="stage">
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                             <div className="empty"></div>
//                         </div>
//                         <button onClick={saveImage}>Download</button>
//                     </div>
//                     <div className="users-list">
//                         {
//                             users && users.map((user, key) => (
//                                 <div key={key} className="user-wrapper">
//                                     <div className="user-details">{`קוד יוזר: ${user.user}, שם:  ${user.name}`}</div>
//                                     <div className="fill">
//                                         <img draggable={true} className={"user-image"} src={user.picture} width={100}
//                                              height={100}
//                                              alt={user.name + "image"}/>
//                                     </div>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default App;
