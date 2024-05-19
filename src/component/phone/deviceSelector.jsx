import React, { useState } from 'react';
import PhoneComparison from '.';  // Ensure correct import path
import data from './data';
import './deviceSelector.css';
function DeviceSelector() {
    const [selectedIds, setSelectedIds] = useState([]);
    const [showList, setShowList] = useState(false);  // State to control the visibility of the list

    const toggleDeviceSelection = (id) => {
        setSelectedIds(prev => {
            const isAlreadySelected = prev.includes(id);
            if (isAlreadySelected) {
                return prev.filter(item => item !== id);
            } else {
                if (prev.length === 2) {
                    return [prev[0], id];
                } else {
                    return [...prev, id];
                }
            }
        });
    };

    const selectedDevices = data.filter(device => selectedIds.includes(device.id));

    return (
        <div className='device-selector-container'>
            <h1 className='phone-heading'>Phone</h1>
            <button onClick={() => setShowList(!showList)} className="toggle-button">
                {showList ? 'Hide Phones' : 'Show Phones'}
            </button>
            {showList && (
                <ul>
                    {data.map(device => (
                        <li key={device.id} onClick={() => toggleDeviceSelection(device.id)}
                            style={{ cursor: 'pointer', color: selectedIds.includes(device.id) ? 'red' : 'black' }}>
                            {device.brand} {device.model}
                        </li>
                    ))}
                </ul>
            )}
            {selectedIds.length === 2 && (
                <div className='comparison-container'>
                 
                    {selectedDevices.map(device => (
                        <PhoneComparison key={device.id} phone={device} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default DeviceSelector;
