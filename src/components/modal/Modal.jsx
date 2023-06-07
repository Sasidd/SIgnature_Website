import { useState } from "react";
import "./Modal.scss";
import { RxCross1 } from "react-icons/rx";

const Modal = (props) => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display ? (
        <div className="modal-overlay">
          <div className="modal-overlay-index">
            <div className="modal_container">
              <div className="modal">
                <div className="modal-cross">
                  <RxCross1 onClick={() => setDisplay(!display)} />
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Modal;
