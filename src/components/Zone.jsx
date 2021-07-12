import TableCell from '@material-ui/core/TableCell';

function Zone( { name, td, rh, ws } ) {
    return <>
        <TableCell className='wa-table_cell wa-table_cell--bold'>{name}</TableCell>
        <TableCell className='wa-table_cell'>{td}</TableCell>
        <TableCell className='wa-table_cell'>{rh}</TableCell>
        <TableCell className='wa-table_cell'>{ws}</TableCell>
    </>
}

export default Zone;