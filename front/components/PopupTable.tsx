import React, { useState } from 'react';

const PopupTable = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    onClose(); // Llama a la función onClose para notificar que se cerró la ventana emergente
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={openPopup}
      >
        Abrir ventana emergente
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold mb-4">Ventana emergente</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Encabezado 1</th>
                  <th className="px-4 py-2">Encabezado 2</th>
                  <th className="px-4 py-2">Encabezado 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Dato 1</td>
                  <td className="border px-4 py-2">Dato 2</td>
                  <td className="border px-4 py-2">Dato 3</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Dato 4</td>
                  <td className="border px-4 py-2">Dato 5</td>
                  <td className="border px-4 py-2">Dato 6</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Dato 7</td>
                  <td className="border px-4 py-2">Dato 8</td>
                  <td className="border px-4 py-2">Dato 9</td>
                </tr>
              </tbody>
            </table>
            <button
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded"
              onClick={closePopup}
            >
              Cerrar ventana emergente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupTable;