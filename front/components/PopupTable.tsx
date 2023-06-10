import React, { useState } from 'react';
import axios from 'axios';

const PopupTable = ({ onClose, country }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const openPopup = async () => {
    try {
      const result = await axios.get(`http://localhost:8004/api/v1/disasters-by-country?pais=${country}&year_min=1970&year_max=1980`);
      setData(result.data);
      setIsOpen(true);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    onClose();
  };


  return (
    <div className="relative">
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={openPopup}>
        Mas información
      </button>
      {isOpen && data && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold mb-4">Ventana emergente</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Categoría</th>
                  <th className="px-4 py-2">Geophysical</th>
                  <th className="px-4 py-2">Hydrological</th>
                  <th className="px-4 py-2">Meteorological</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((category, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{category}</td>
                    {Object.values(data[category]).map((value, i) => (
                      <td key={i} className="border px-4 py-2">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded" onClick={closePopup}>
              Cerrar ventana emergente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupTable;