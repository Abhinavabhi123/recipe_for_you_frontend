import React from "react";

interface Modal{
    modalHandler: () => void
}

export default function Recipe_Modal({modalHandler}: Modal) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="modal-container backdrop-blur-sm bg-white w-96 mx-auto rounded-lg shadow-lg">
      <div className="modal-content p-4">
        <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-700">Modal content goes here.</p>
        <button
          onClick={modalHandler}
          className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  );
}
