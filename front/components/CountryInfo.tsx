import React, { useState} from 'react';
import PopupTable from '@/components/PopupTable';


function CountryInfo({ selected }) {
const [isPopupOpen, setPopupOpen] = useState(false);

    const handleMoreInfo = () => {
      setPopupOpen(true);
    };

  return (
    <div>
      <h2 className="text-black">{selected.country}</h2>
      <table>
        <thead>
          <tr>
            <th className="text-black">Icono</th>
            <th className="text-black">Tipo</th>
            <th className="text-black">Conteo</th>
          </tr>
        </thead>
        <tbody>
          {selected.data.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={`/${item.icon}`} alt={item.type} width="20" height="20" />
              </td>
              <td className="text-black">{item.type}</td>
              <td className="text-black">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleMoreInfo} className="text-black">Más información</button>
      {/* {isPopupOpen && <PopupTable onClose={() => setPopupOpen(false)} />} */}
      {isPopupOpen && <PopupTable country={selected.country} onClose={() => setPopupOpen(false)} />}


    </div>
  );
}

export default CountryInfo;