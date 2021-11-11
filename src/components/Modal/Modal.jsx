import React, {useEffect} from "react";

import { PortalModal } from "./Portal/Portal";

import { Overlay, Dialog } from "./style";

const Modal = ({ children, open, onClose }) =>{
    useEffect(() =>{
        function onEsc(e) {
            if(e.keyCode === 27) onClose()
        }

        window.addEventListener('keydown', onEsc)

        return () => {
            window.removeEventListener('keydown', onEsc)
        }
    },[onClose])
    if(!open) return null

    function onOverlayClick() {
        onClose()
    }

    function onDialogeClick(e) {
        e.stopPropagation()
    }

    return(
        <PortalModal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogeClick}>
                    { children }
                </Dialog>
            </Overlay>
        </PortalModal>
    )
}

export default Modal;