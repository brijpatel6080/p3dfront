import React from 'react'
import './Table.css'
// const drImgA = "http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png"
import { PlaceholderImage, CustomPlaceholder, PhotoPlaceholder  } from 'react-placeholder-image'
// import Button from '@material-ui/core/Button';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import AccountEditIcon from 'mdi-react/AccountEditIcon';
import AccountEditOutlineIcon from 'mdi-react/AccountEditOutlineIcon';
import AccountMultipleRemoveIcon from 'mdi-react/AccountMultipleRemoveIcon';
import AccountRemoveIcon from 'mdi-react/AccountRemoveIcon';
import EyeCircleIcon from 'mdi-react/EyeCircleIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import EyeCheckOutlineIcon from 'mdi-react/EyeCheckOutlineIcon';

import { useTranslation } from 'react-i18next';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';

const CreateDataFeedback = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 70,
      },
      {
        Header: 'Patient Name',
        accessor: 'patientName',
      },
      {
        Header: 'Comment',
        accessor: 'comment',
      },
      {
        Header: 'Approved',
        accessor: 'approved',
      },
      {
        Header: 'Action',
        Cell: props => <div style={{display:'flex',flexFlow:'row'}}>
        <Button className="mb-0" color="primary" outline size="sm">Show Details</Button>
      </div>
      },

    ],
    []
  )

  const data = []

  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: i,
        imageUrl: ['http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png' ][Math.floor((Math.random() * 3))],
        patientName: ['R K Gupta	', 'Faisalk Khan', 'Mudit Gupta'][
          Math.floor(Math.random() * 3)
        ],
        comment: ['Comment here..', 'Comment here..', 'Comment here..'][
          Math.floor(Math.random() * 3)
        ],
        approved: ['No', 'Yes', 'No'][
          Math.floor(Math.random() * 3)
        ],
      })
    }
  }

  rows()
  const reactTableData = { tableHeaderData: columns, tableRowsData: data }
  return reactTableData
}

export default CreateDataFeedback
