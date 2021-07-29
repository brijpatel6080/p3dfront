import React from "react";
import "./Table.css";
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
import { getDoctorsList } from "../../utils/api/APIServices";
import ModalEditDoctor from "./Modal/ModalEditDoctor";
import ModalViewDoctor from "./Modal/ModalViewDoctor";
import { NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const CreateTableData = (data) => {
  const columns = React.useMemo(
    () => [
      // {
      //   Header: "#",
      //   accessor: "id",
      //   Footer: "Middle age:",
      //   disableGlobalFilter: true,
      //   width: 70,
      // },
      // {
      //   Header: "Image",
      //   accessor: "imageUrl",
      //   Cell: (props) => (
      //     <PhotoPlaceholder
      //       className="TableProfileImg"
      //       {...props}
      //       width={60}
      //       height={60}
      //     />
      //   ),
      // },
      {
        Header: "Doctor Name",
        accessor: "doctorName",
      },
      {
        Header: "Speciality",
        accessor: "speciality",
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "Action",
        Cell: (props) => (
          <div style={{ display: "flex", flexFlow: "row" }}>
            {/* <Button className="btn edit">
              <p>
                <AccountEditOutlineIcon /> Edit
              </p>
            </Button> */}

            {/* <ModalViewDoctor
              modalClass="blogAddCate_modal"
              color="primary"
              title="View Doctor"
              header
              btn="View Doctor"
              // message="Extremely we promotion  "
            /> */}
            {/* <Button className="btn view" onClick={routeChange}>
              <p>
                <EyeCheckOutlineIcon /> View
              </p>
            </Button> */}

            {/* {console.log("props Doctor", props.row.index)} */}

            <Link
              // item={data[props.row.index]}
              // to="/ViewDoctors"
              to={{
                pathname: "/ViewDoctors",
                item: data[props.row.index],
              }}
              className="btn view mr-10"
            >
              <p>
                <EyeCheckOutlineIcon /> View
              </p>
            </Link>
            <ModalEditDoctor
              modalClass="blogAddCate_modal"
              color="success"
              title="Edit Doctor"
              header
              btn="Edit Doctor"
              // message="Extremely we promotion  "
            />

            {/* <Link className="btn delete" disabled>
              <p>
                <DeleteForeverIcon /> Delete
              </p>
            </Link> */}
          </div>
        ),
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
  );

  // const getRandomDate = (start, end) =>
  //   new Date(
  //     start.getTime() + Math.random() * (end.getTime() - start.getTime())
  //   ).toLocaleDateString()

  // const data = [];

  // const rows = () => {
  //   for (let i = 1; i < 36; i += 1) {
  //     data.push({
  //       id: i,
  //       imageUrl: [
  //         "http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png",
  //       ][Math.floor(Math.random() * 3)],
  //       doctorName: ["Dr. Chander", "Dr. K. D.", "Dr. Anubhav"][
  //         Math.floor(Math.random() * 3)
  //       ],
  //       speciality: ["Dental", "Radiology", "Orthopaedics"][
  //         Math.floor(Math.random() * 3)
  //       ],
  //       mobile: ["8527187950", "8527187951", "8527187952"][
  //         Math.floor(Math.random() * 3)
  //       ],
  //     });
  //   }
  // };
  // rows();

  // const reactTableData = { tableHeaderData: columns, tableRowsData: data };

  console.log("Doctor Response data interestList", { data });

  const reactTableData = {
    tableHeaderData: columns,
    tableRowsData: data,
  };

  return reactTableData;
};

{
  /* <TableBody>
  {doctorsList
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    })}
</TableBody>; */
}

export default CreateTableData;
