import React from 'react';
import { useTranslation } from 'react-i18next';
import './tabTable.css'
import {
  Card, CardBody, Col, Badge, Table,
} from 'reactstrap';
import BasicTableData from './BasicTableData';
import ReactTableCustomizerToggle from '../components/ReactTableCustomizerToggle';


const { tableHeaderResponsiveData, tableRowsData } = BasicTableData();

const TableDoctor = (item) => {
  const { t } = useTranslation('common');

  let items = item.item;
  console.log("doctor item===", items)
  return (
    <Col md={12} lg={12} xl={12} >
      <Card>
        <CardBody>
          {/* <div className="card__title">
            <h5 className="bold-text">{t('tables.basic_tables.responsive_table')}</h5>
            <h5 className="subhead">Use default table with property <span className="red-text">responsive</span></h5>
          </div> */}
          {/* <Table responsive className="ViewDoctorTable table--bordered">
            <thead>
              <tr>
                {tableHeaderResponsiveData.map(item => (
                  <th key={item.id} style={{width: 380}}>{item.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRowsData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><Badge color={item.status_resp}>{item.badge_resp}</Badge></td>
                </tr>
              ))}
            </tbody>
          </Table> */}

          <ul className="ulViewDoctor pl-0">
            <div>
              <li class="MuiListItem-root MuiListItem-gutters pb-10">
                <p class="head pt-20" >Profile Image</p>
                <div class="MuiListItemText-root image"  ><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">
                  {items.avatar === undefined || items.avatar === null ? "None"
                    : <img className="profileImg" src={items.avatar} alt="" />
                  }
                </span>

                </div>
                <div className="toggleBtn">
                  <p>Is Approve</p>
                  <ReactTableCustomizerToggle
                    key={item.id}
                    text={item.text}
                    handleClick={item.func}
                    isChecked={item.isChecked}
                    isDisabled={item.isDisabled}
                  />
                </div>
              </li>
              <hr class="MuiDivider-root" />
            </div>

            {/* {console.log("items.degrees", items.degrees)} */}
            <ListData title="Name" value={items.doctorName === null ? "None" : items.doctorName} />
            <ListData title="About" value={items.about === null ? "None" : items.about} />
            <ListData title="Email" value={items.email === null ? "None" : items.email} />
            <ListData title="Full Address" value={items.full_address === null ? "None" : items.full_address} />
            <ListData title="Mobile Number" value={items.mobile === null ? "None" : items.mobile} />
            <ListData title="Gender" value={items.gender === null ? "None" : items.gender} />
            <ListData title="DOB" value={items.dob === null ? "None" : items.dob} />
            <ListData title="Aadhar Number" value="None" />
            <ListData title="Marital Status" value="None" />
            <ListData title="Education" value={items.degrees === null || items.degrees === undefined ? "None" : items.degrees} />
            <ListData title="Blood Group" value="None" />
            <ListData title="Id Proof" value="None" />
            <ListData title="Years Of Experience" value={items.total_experience === null ? "None" : items.total_experience} />
            <ListData title="Is Profile Completed" value={items.isProfileComplete === null || items.isProfileComplete === false ? "No" : "Yes"} />
            <ListData title="Is Email Verified" value="None" />
            <ListData title="Is Mobile Verified" value={items.isMobileVerified === null || items.isMobileVerified === false ? "No" : "Yes"} />
            <ListData title="Rating" value={items.rating === null ? "None" : items.rating} />
            <ListData title="Speciality" value={items.speciality === null ? "None" : items.speciality} />


            {/* total_experience,
          isMobileVerified,
          isCompleteBasicProfile,
          isProfileComplete,
          sub_specialities,
          consultation_fee,
          blog_interests,
          is_approved_by_admin,
          work_experiences, */}

          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

const ListData = (props) => {
  const { title, value } = props
  return (
    <div>
      <li class="MuiListItem-root MuiListItem-gutters">
        <p class="head" >{title}</p>
        <div class="MuiListItemText-root"  ><span class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock">{value}</span></div>
      </li>
      <hr class="MuiDivider-root" />
    </div>
  )
}

export default TableDoctor;
