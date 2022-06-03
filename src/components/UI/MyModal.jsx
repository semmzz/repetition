import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, active, setActive}) => {

    const rootClass = [cl.modal]

    if(active){
        rootClass.push(cl.active)
    }

    return (
        <div className={rootClass.join(' ')}
        onClick={_=> setActive(false)}
        >
            <div className={cl.modalContent} onClick={e=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;