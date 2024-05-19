import React, { useState } from 'react';
import LaptopComparison from './laptopCamparision'; // Ensure correct import path
import laptops from './data';
import './deviceSelector.css';
function LaptopDeviceSelector() {
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

    const selectedDevices = laptops.filter(device => selectedIds.includes(device.id));

    return (
        <div className='device-selector-container'>
            <h1 className='laptop-heading'>laptop</h1>
            <button onClick={() => setShowList(!showList)} className="toggle-button">
                {showList ? 'Hide laptops' : 'Show laptops'}
            </button>
            {showList && (
                <ul>
                    {laptops.map(device => (
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
                        <LaptopComparison key={device.id} laptop={device} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default LaptopDeviceSelector;
