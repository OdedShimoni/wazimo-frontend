import socketIOClient from 'socket.io-client';
import { createContext, useEffect, useState } from 'react';
import AreaTable from './AreaTable.jsx';

let AreaContext;
let io;
function AlarmingAreas() {
    const [ meteoData, setMeteoData ] = useState([]);
    AreaContext = createContext([]);

    useEffect(() => {
        const ENDPOINT = process.env.REACT_APP_CHAT_SERVER_URI;
        io = socketIOClient(ENDPOINT);
        io.on('start', () => {
            setMeteoData([]);
        });
        io.on('data', (data) => {
            setMeteoData(prevData => [...prevData, data]);
        });
    }, []);

    return <div className="App">
        <AreaContext.Provider value={ { meteoData, setMeteoData } }>
            <AreaTable />
        </AreaContext.Provider>
  </div>
}

export { AreaContext };
export default AlarmingAreas;