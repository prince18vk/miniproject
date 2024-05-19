import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './component/phone/data';
import './index.css';
import PhoneComparison from './component/phone';
import DeviceSelector from './component/phone/deviceSelector';
const root = ReactDOM.createRoot(document.getElementById('root'));
import LaptopDeviceSelector from './component/laptop/deviceSelector';
import TabletDeviceSelector from './component/tablets/deviceSelector';
root.render(
  <React.StrictMode>
    {/* <PhoneComparison key={data[0].id} phone={data[0]} />
    <PhoneComparison key={data[1].id} phone={data[1]} /> */}
    <div className='main-container'>

      <h1 className='heading'>Gadget Comparison</h1>
      <h2>Welcome to Gadget Comparison</h2>
    <div className='AllComponent'>
   
    <DeviceSelector />
    <LaptopDeviceSelector />
    <TabletDeviceSelector />
    </div>
    </div>
    
  </React.StrictMode>
);
