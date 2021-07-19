import React, { useMemo } from 'react'

const CreateTableData = ({ history }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Image',
        accessor: 'image',
      },
      {
        Header: 'Doctor Name',
        accessor: 'doctorName',
      },
      {
        Header: 'Speciality',
        accessor: 'speciality',
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
      },
      {
        Header: 'Action',
      },

      //   {
      //     Header: 'Age',
      //     accessor: 'age',
      //     disableGlobalFilter: true,
      //     Footer: (info) => {
      //       const { rows, flatRows } = info;
      //       const totalAge = useMemo(
      //         () => rows.reduce((sum, row) => Number(row.values.age) + sum, 0),
      //         [rows],
      //       );
      //       const age = Math.round(totalAge / flatRows.length);
      //       return <span>{age}</span>;
      //     },
      //   },
      //   {
      //     Header: 'Work',
      //     accessor: 'work',
      //     disableGlobalFilter: true,
      //     disableSortBy: true,
      //   },
    ],
    []
  )

  const getRandomDate = (start, end) =>
    new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    ).toLocaleDateString()

  const data = []

  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: i,
        // image: [`<img src=${drImgA} alt="" />`][Math.floor((Math.random() * 3))],
        doctorName: ['Dr. Chander', 'Dr. K. D.', 'Dr. Anubhav'][
          Math.floor(Math.random() * 3)
        ],
        speciality: ['Dental', 'Radiology', 'Orthopaedics'][
          Math.floor(Math.random() * 3)
        ],
        mobile: ['8527187950', '8527187951', '8527187952'][
          Math.floor(Math.random() * 3)
        ],
      })
    }
  }

  rows()
  const reactTableData = { tableHeaderData: columns, tableRowsData: data }
  return reactTableData
}

export default CreateTableData
