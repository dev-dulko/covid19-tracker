import React from 'react'
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css' 

export default function Table({tableData}) {
    const columns = [
        {
            Header: 'Country',
            accessor: 'country',
            filterable: true
        },
        {
            Header: '...Tests',
            accessor: 'tests',
            style:{ textAlign:'center'}
        },
        {
            Header: 'Cases',
            columns: [
                {
                    Header:'Active',
                    accessor: 'active',
                    style:{ textAlign:'center'}

                },
                {
                    Header: 'Critical',
                    accessor: 'critical',
                    style:{ textAlign:'center'}

                }
            ]
        },
    ]
    
    return (
        <ReactTable
        columns={columns}
        data={tableData}
        noDataText={'Fuck Coronavirus'}
        >
        </ReactTable>
    )
}

