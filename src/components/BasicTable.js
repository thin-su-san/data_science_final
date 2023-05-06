import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns';
import CLUSTER_DATA from "/Users/thinsusan/Desktop/react-app/src/assets/cluster_with_colleges.json";


const BasicTable = (props) => {

    console.log('props in basic table');
    console.log(props);

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props, [])

    console.log(data);
    // Brown University

    const tableInstance = useTable({
        columns: columns,
        data: data
    })

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        <th></th>
                    </tr>
                    ))}
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })
                            }
                            <td></td>
                        </tr>
                    )
                })}
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default BasicTable;