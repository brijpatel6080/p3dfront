import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Col } from 'reactstrap'
import ReactTableBase from '@/shared/components/table/ReactTableBase'
import ReactTableCustomizer from '@/shared/components/table/components/ReactTableCustomizer'
import {
  Button, ButtonToolbar
} from 'reactstrap';
import { useHistory } from "react-router-dom";
// import ModalAddBlog from '../Modal/ModalAddBlog'
// import ModalAddCategories from './Modal/ModalAddCategories';

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DataReactTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData)
  const [isEditable, setIsEditable] = useState(false)
  const [isResizable, setIsResizable] = useState(false)
  const [isSortable, setIsSortable] = useState(true)
  const [isDisabledDragAndDrop, setIsDisabledDragAndDrop] = useState(false)
  const [isDisabledEditable, setIsDisabledEditable] = useState(false)
  const [isDisabledResizable, setIsDisabledResizable] = useState(false)
  const [withDragAndDrop, setWithDragAndDrop] = useState(false)
  const [withPagination, setWithPaginationTable] = useState(true)
  const [withSearchEngine, setWithSearchEngine] = useState(true)

  const handleClickIsEditable = () => {
    if (!withDragAndDrop) setIsDisabledResizable(!isDisabledResizable)
    setIsResizable(false)
    setIsEditable(!isEditable)
  }
  const handleClickIsResizable = () => {
    setIsEditable(false)
    setWithDragAndDrop(false)
    setIsDisabledDragAndDrop(!isDisabledDragAndDrop)
    setIsDisabledEditable(!isDisabledEditable)
    setIsResizable(!isResizable)
  }
  const handleClickIsSortable = () => {
    setIsSortable(!isSortable)
  }
  const handleClickWithDragAndDrop = () => {
    if (!isEditable) setIsDisabledResizable(!isDisabledResizable)
    setIsResizable(false)
    setWithDragAndDrop(!withDragAndDrop)
  }
  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination)
  }
  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine)
  }

  const updateDraggableData = result => {
    const items = reorder(rows, result.source.index, result.destination.index)
    setData(items)
  }

  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old =>
      old.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return item
      })
    )
  }

  const tableConfig = {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination,
    withSearchEngine,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search by Name...',
  }

  const history = useHistory();

  const routeChange = () => {
    let path = `AddSubSpecialities`;
    history.push(path);
  }

  return (
    <Col md={12} lg={12} id="blog">
      <Card>
        <CardBody>
          {/* <div className="react-table__wrapper">
            <div className="card__title">
              <h5 className="bold-text">List Of Doctors</h5>
              <h5 className="subhead">Use table with&nbsp;
                <span className="red-text">table customizer</span>
              </h5>
            </div>
            
          </div> */}




          {/* Model Button Start */}
          {/* <ModalAddBlog
              modalClass="blogAddCate_modal"
              color="primary"
              title="Add Blog"
              header
              btn="Add Blog"
              message="Extremely we promotion  "
            /> */}
          {/* Model Button end */}
          <Button onClick={routeChange} className="addCategory" color="primary">Add</Button>

          <ReactTableBase
            key={
              withSearchEngine || isResizable || isEditable
                ? 'modified'
                : 'common'
            }
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateEditableData={updateEditableData}
            updateDraggableData={updateDraggableData}
            tableConfig={tableConfig}
          />


        </CardBody>
      </Card>
    </Col>
  )
}

DataReactTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
}

export default DataReactTable
