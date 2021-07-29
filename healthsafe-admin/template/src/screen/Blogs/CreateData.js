import React, { useEffect, useState } from "react";
import "./Blogs.css";
// const drImgA = "http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png"
import {
  PlaceholderImage,
  CustomPlaceholder,
  PhotoPlaceholder,
} from "react-placeholder-image";
import Button from "@material-ui/core/Button";
import CloseCircleOutlineIcon from "mdi-react/CloseCircleOutlineIcon";
import AccountEditIcon from "mdi-react/AccountEditIcon";
import AccountEditOutlineIcon from "mdi-react/AccountEditOutlineIcon";
import AccountMultipleRemoveIcon from "mdi-react/AccountMultipleRemoveIcon";
import AccountRemoveIcon from "mdi-react/AccountRemoveIcon";
import EyeCircleIcon from "mdi-react/EyeCircleIcon";
import DeleteIcon from "mdi-react/DeleteIcon";
import DeleteForeverIcon from "mdi-react/DeleteForeverIcon";
import EyeCheckOutlineIcon from "mdi-react/EyeCheckOutlineIcon";
import ModalEditCategories from "./Modal/ModalEditCategories";
import {
  blogsUpdate,
  user_error_action,
} from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { deleteInterestsList } from "../../utils/api/APIServices";
import DeleteModals from "./Modal/DeleteModals";

const CreateTableData = (data) => {
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const deleteHandler = async (item) => {
    // setShowLoader(true)
    const { response, error } = await deleteInterestsList(token, item.id);
    console.log("response, error", response, error);
    // setShowLoader(false)
    if (response.status) {
      dispatch(blogsUpdate());
      dispatch(
        user_error_action({
          show: true,
          msg: response.message,
          type: "success",
        })
      );
      // setSnackBarLabel(response.message)
      // setSnackBarVisible(true)
      // loadInterest()
    }
  };

  console.log("____data", data);
  const columns = React.useMemo(
    () => [
      // {
      //   Header: '#',
      //   accessor: 'id',
      //   Footer: 'Middle age:',
      //   disableGlobalFilter: true,
      //   width: 70,
      // },
      {
        Header: "Name",
        accessor: "name",
        // width: '25%',
      },
      {
        Header: "Created Date",
        accessor: "createdDate",
      },
      {
        Header: "Updated Date",
        accessor: "updatedDate",
      },
      {
        Header: "Action",
        Cell: (props) => (
          <div style={{ display: "flex", flexFlow: "row" }}>
            {/* {console.log('props', props.row.index)} */}

            {/* <Button className="btn view" ><p><EyeCheckOutlineIcon /> View</p></Button> */}

            <ModalEditCategories
              item={data[props.row.index]}
              modalClass="blogAddCate_modal"
              color="success"
              title="Edit Categories"
              header
            />

            <DeleteModals
              color="danger"
              title="confirm delete!"
              header
              btn="Delete"
              message="Are you sure you want to delete this?"
              onConfirm={() => deleteHandler(data[props.row.index])}
            />

            {/* <Button className="btn edit">
              <p>
                <AccountEditOutlineIcon /> Edit
              </p>
            </Button> */}
            {/* <Button
              onClick={() => deleteHandler(data[props.row.index])}
              className="btn delete"
              // disabled
            >
              <p>
                <DeleteForeverIcon /> Delete
              </p>
            </Button> */}
          </div>
        ),
      },
    ],
    []
  );

  // const data = []

  // const rows = () => {
  //   for (let i = 1; i < 36; i += 1) {
  //     data.push({
  //       id: i,
  //       imageUrl: [
  //         'http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png',
  //       ][Math.floor(Math.random() * 3)],
  //       name: [
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
  console.log("Blog Response data interestList", { data });

  const reactTableData = {
    tableHeaderData: columns,
    tableRowsData: data,
  };
  return reactTableData;
};

export default CreateTableData;
