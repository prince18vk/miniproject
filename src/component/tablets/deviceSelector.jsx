import React, { useState } from 'react';
import TabletComparison from './tabletCamparision'; // Ensure correct import path
import tablets from './data';
import './deviceSelector.css';
function TabletDeviceSelector() {
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

    const selectedDevices = tablets.filter(device => selectedIds.includes(device.id));

    return (
        <div className='device-selector-container'>
            <h1 className='tablet-heading'>tablet</h1>
            <button onClick={() => setShowList(!showList)} className="toggle-button">
                {showList ? 'Hide tablets' : 'Show tablets'}
            </button>
            {showList && (
                <ul>
                    {tablets.map(device => (
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
                        <TabletComparison key={device.id} tablet={device} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TabletDeviceSelector;
