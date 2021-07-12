import { useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Zone from './Zone.jsx';
import { AreaContext } from './AlarmingAreas.jsx';

function AreaTable() {
    let areaContext;
    areaContext = useContext(AreaContext);
    const { meteoData } = areaContext;

    return <div className="App">
    <TableContainer component={Paper} className='wa-table wa-table-meteo'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className='wa-table_cell wa-table_cell--bold'>Area Name</TableCell>
            <TableCell className='wa-table_cell wa-table_cell--bold'>Area Ground Temprature</TableCell>
            <TableCell className='wa-table_cell wa-table_cell--bold'>Area Humidity</TableCell>
            <TableCell className='wa-table_cell wa-table_cell--bold'>Area Wind Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {meteoData && meteoData.map((zone, key) => {
          const { name, td, rh, ws } = zone;
          return <TableRow {...{ key }}>
              <Zone {...{ name, td, rh, ws }} />
            </TableRow>
        })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
}

export default AreaTable;