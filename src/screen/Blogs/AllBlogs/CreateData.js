import React from 'react'
import '../Blogs.css'
// const drImgA = "http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png"
import {
  PlaceholderImage,
  CustomPlaceholder,
  PhotoPlaceholder,
} from 'react-placeholder-image'
import Button from '@material-ui/core/Button'
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon'
import AccountEditIcon from 'mdi-react/AccountEditIcon'
import AccountEditOutlineIcon from 'mdi-react/AccountEditOutlineIcon'
import AccountMultipleRemoveIcon from 'mdi-react/AccountMultipleRemoveIcon'
import AccountRemoveIcon from 'mdi-react/AccountRemoveIcon'
import EyeCircleIcon from 'mdi-react/EyeCircleIcon'
import DeleteIcon from 'mdi-react/DeleteIcon'
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon'
import EyeCheckOutlineIcon from 'mdi-react/EyeCheckOutlineIcon'
import ModalEditBlog from '../Modal/ModalEditBlog'
import { deleteBlogList } from '../../../utils/api/APIServices'
import { useDispatch, useSelector } from 'react-redux'
import { blogsUpdate } from '../../../redux/actions/authActions'

const CreateTableData = (data) => {
  const token = useSelector((state) => state.user.token)
  const dispatch = useDispatch()

  console.log('____data', data)
  const deleteHandler = async (data1) => {
    var id = data1.id
    console.log('___id', data1)
    // setShowLoader(true)
    const { response, error } = await deleteBlogList(token, id)
    // setShowLoader(false)
    if (response.status) {
      dispatch(blogsUpdate())
      // setSnackBarLabel(response.message)
      // setSnackBarVisible(true)
      // loadBlogs()
    }
  }
  const columns = React.useMemo(
    () => [
      // {
      //   Header: '#',
      //   accessor: 'id',
      //   Footer: 'Middle age:',
      //   disableGlobalFilter: true,
      //   width: 70,
      // },
      // {
      //   Header: 'Image',
      //   accessor: 'featured_image',
      //   Cell: (props) => (
      //     <>
      //       {console.log('props111', props.cell)}
      //       <PhotoPlaceholder
      //         className="TableProfileImg"
      //         {...props}
      //         width={60}
      //         height={60}
      //         src={props.cell.value}
      //       />
      //     </>
      //   ),
      // },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Total BookMarks',
        accessor: 'totalBookMarks',
      },
      {
        Header: 'Total Likes',
        accessor: 'totalLikes',
      },
      {
        Header: 'Created Date',
        accessor: 'createdDate',
      },
      {
        Header: 'Action',
        Cell: (props) => (
          <div style={{ display: 'flex', flexFlow: 'row' }}>
            {/* <Button className="btn view" ><p><EyeCheckOutlineIcon /> View</p></Button> */}

            {/* {console.log('props11', props.row.index)} */}
            {console.log('props11', props)}

            <ModalEditBlog
              item={props}
              modalClass="blogAddCate_modal"
              color="success"
              title="Edit Blog"
              header
            />

            {/* <Button className="btn edit">
              <p>
                <AccountEditOutlineIcon /> Edit
              </p>
            </Button> */}
            <Button
              className="btn delete"
              onClick={() => deleteHandler(data[props.row.index])}

              // disabled
            >
              <p>
                <DeleteForeverIcon /> Delete
              </p>
            </Button>
          </div>
        ),
      },
    ],
    [],
  )

  // const data = []

  // const rows = () => {
  //   for (let i = 1; i < 36; i += 1) {
  //     data.push({
  //       id: i,
  //       imageUrl: [
  //         'http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png',
  //       ][Math.floor(Math.random() * 3)],
  //       blogName: [
  //         'Health & Wellness',
  //         'Cardiac Health',
  //         'Diabetes and Endocrinology',
  //       ][Math.floor(Math.random() * 3)],
  //       createdDate: ['05-10-2021', '05-10-2021', '05-10-2021'][
  //         Math.floor(Math.random() * 3)
  //       ],
  //       updatedDate: ['05-10-2021', '05-10-2021', '05-10-2021'][
  //         Math.floor(Math.random() * 3)
  //       ],
  //     })
  //   }
  // }

  // rows()
  // const reactTableData = { tableHeaderData: columns, tableRowsData: data }
  // return reactTableData

  console.log('Blog Response data interestList', { data })

  const reactTableData = {
    tableHeaderData: columns,
    tableRowsData: data,
  }
  return reactTableData
}

export default CreateTableData
