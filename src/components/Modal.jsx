
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Modal from 'react-modal';

const modal = ({ isOpen, onRequestClose, onConfirm }) => {
return (
<Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Delete Confirmation"
    ariaHideApp={false}
    className="w-full fixed top-10 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg max-w-md z-40"
    overlayClassName="fixed bg-black bg-opacity-50 inset-0 z-30">
    <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this product?</h2>
    <div className="mt-4 flex justify-end">
    <button 
        onClick={onRequestClose} 
        className="text-black bg-gray-300 py-2 px-4 rounded mr-2">
        No
    </button>
    <button 
        onClick={onConfirm} 
        className="text-white bg-red-500 py-2 px-4 rounded">
        Yes
    </button>
    </div>
</Modal>
);
};

export default modal;
