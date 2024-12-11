import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <>
      <ModalContainer />
    </>
  );
}

export default App;

function ModalContainer() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div> <button onClick={() => setModalOpen(true)}>Open Todo list</button> </div>
      <ModalDialog isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <p>The Modal Dialog is made from the html dialog element. It has a showModal() method, 
          which opens the dialog. It also has a close() method, which closes the dialog. 
          When clicking the "Open Todo list" button, the dialog opens. When clicking outside the dialog, 
          or pressing the Escape key or clicking the "Close" button, the dialog closes. This is achieved by adding event listeners to the document object.
          3 event listeners are added: </p>
         <ul><li>

           1 for click inside a div inside the dialog (to stop propagation. The purpose of the div is because the dialog when open takes op the whole viewport), 
            </li>
          <li>1 for click outside the dialog (to close), and </li>
          <li>1 for keydown event on esc key (also to close).</li>
           </ul>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit, nunc nec volutpat lacinia, felis turpis consectetur nunc,
            nec ultricies elit nunc nec eros. Nullam non sapien nec velit
            fermentum aliquet. Nullam auctor, eros eget ultricies ultricies, sem
            nunc ultricies turpis, vel ultricies purus nisi nec purus. Nullam
            suscipit, nunc nec volutpat lacinia, felis turpis consectetur nunc,
            nec ultricies elit nunc nec eros. Nullam non sapien nec velit
            fermentum aliquet. Nullam auctor, eros eget ultricies ultricies, sem
            nunc ultricies turpis, vel ultricies purus nisi nec purus. Nullam
            suscipit, nunc nec volutpat lacinia, felis turpis consectetur nunc,
            nec ultricies elit nunc nec eros. Nullam non sapien nec velit
            fermentum aliquet. Nullam auctor, eros eget ultricies ultricies, sem
            nunc ultricies turpis, vel ultricies purus nisi nec purus. Nullam
            suscipit, nunc nec volutpat lacinia, felis turpis consectetur nunc, 
            nec ultricies elit nunc nec eros. Nullam non sapien nec velit fermentum aliquet. 
            Nullam auctor, eros eget ultricies ultricies, sem nunc ultricies turpis, 
            vel ultricies purus nisi nec purus. Nullam suscipit, nunc nec volutpat lacin 

        </p>
    </>
  );
}

const StyledModalDialog = styled.dialog`
  background-color: lightgray;
  color: darkslategray;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  min-width: 600px;
  min-height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  table {
    width: 100%;
  }
  th,
  td {
    padding: 0.5rem;
    border: 1px solid black;
  }
`;

const StyledModalInnerDiv = styled.div` // This is to prevent event bubbling. this inner div has same width and height as the dialog.
  // min-width: 600px;
  // min-height: 400px;
  widht: 100%;
  height: 100%;
  border: 1px solid red;
  padding: 1em;
  `;



// eslint-disable-next-line react/prop-types
export function ModalDialog({ isOpen, onClose }) {
  const [todos, setTodos] = useState([]);
  const dialogRef = useRef(null);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/"
  //       );
  //       const data = await response.json();
  //       const filtered = data.filter((todo) => todo.id < 10);
  //       setTodos(filtered);
  //     } catch (error) {
  //       console.error("Failed to fetch todos:", error);
  //     }
  //   };

  //   // const handleOutsideClick = (event) => {
  //   //   console.log(dialogRef.current, event.target, event.target.contains(dialogRef.current));
  //   //   if (dialogRef.current && !dialogRef.current.contains(event.target)) {
  //   //     onClose(); // Close the modal if clicked outside
  //   //   }
  //   // };

  //   if (isOpen) {
  //     dialogRef.current?.showModal(); // Open the modal

  //     document.addEventListener("click", (evt) => {
  //       const dialogDimensions = dialogRef.current?.getBoundingClientRect();
  //       if (
  //         evt.clientX < dialogDimensions.left ||
  //         evt.clientX > dialogDimensions.right ||
  //         evt.clientY < dialogDimensions.top ||
  //         evt.clientY > dialogDimensions.bottom
  //       ) {
  //         handleClose();
  //       }
  //     }); // Detect outside clicks
  //     document.addEventListener("keydown", (e) => {
  //       if (e.key === "Escape") {
  //         handleClose();
  //       }
  //     });
  //     fetchTodos();
  //   } else {
  //     onClose(); // Notify parent about closure
  //   }

  //   // Cleanup: remove event listeners when the modal is closed or component unmounts
  //   // return () => {
  //   //   document.removeEventListener("click", handleOutsideClick);
  //   // };
  // }, [isOpen, onClose]);

  // const handleClose = () => {
  //   dialogRef.current?.close(); // Close the modal
  //   onClose(); // Notify parent about closure
  // };

  // return (
  //   <StyledModalDialog
  //     ref={dialogRef}
  //     onClose={handleClose}
  //     onCancel={handleClose}
  //     // onClick={(e) => e.stopPropagation()} // Prevent event bubbling inside modal
  //   >
  //     <h1>Todo</h1>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>Id</th>
  //           <th>Title</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {todos.map((todo) => (
  //           <tr key={todo.id}>
  //             <td>{todo.id}</td>
  //             <td>{todo.title}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //     <br />
  //     <button onMouseDown={handleClose}>Close</button>
  //   </StyledModalDialog>
  // );


    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        const data = await response.json();
        const filtered = data.filter((todo) => todo.id < 10);
        setTodos(filtered);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        handleClose();
      }
    };
  
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
  
    if (isOpen) {
      dialogRef.current?.showModal();
      setTimeout(() => {
        // Add listener after the modal is open
        document.addEventListener("click", handleOutsideClick);
      }, 0);
      document.addEventListener("keydown", handleKeydown);
      fetchTodos();
    } else {
      dialogRef.current?.close();
    }
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen]);
  
  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };
  
  return (
    <StyledModalDialog
      ref={dialogRef}
      onClose={handleClose}
      onCancel={handleClose}
      onClick={handleClose} // Prevent event bubbling inside modal
    >
      <StyledModalInnerDiv onClick={(evt)=>evt.stopPropagation()}>
      <h1>Todo</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onMouseDown={handleClose}>Close</button>
      </StyledModalInnerDiv>
    </StyledModalDialog>
  );
}
