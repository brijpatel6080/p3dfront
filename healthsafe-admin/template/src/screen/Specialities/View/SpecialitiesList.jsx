import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'reactstrap'
import DataReactTable from './DataReactTable'
import CreateTableData from './CreateData'
import { Button, ButtonToolbar } from 'reactstrap'
import { getAllSpecialities } from '../../../utils/api/APIServices'
import { useSelector } from 'react-redux'
import moment from 'moment'
import '../Specialities.css'
import Notification from "../../Blogs/Modal/Notification";

const SpecialitiesList = () => {
  const [interestList, setInterestList] = useState([])
  const userInfo = useSelector((state) => state.user)
  const blogs = useSelector((state) => state.user.blogs)

  console.log('blogs123', blogs)
  const token = userInfo.token

  async function loadInterest() {
    // setShowLoader(true)
    const { response, error } = await getAllSpecialities(token)
    // setShowLoader(false)
    console.log('Specialities Response error', { response, error })
    if (error) {
      console.log(error)
    }
    if (response && response.status) {
      const data = response.data.map((interest) => {
        console.log('interest', interest)

        const {
          _id,
          name,
          role,
          image,


        } = interest
        return {
          id: _id,
          name: name,
          role: role,
          image: image,

          // totalBookMarks: totalBookMarks.toString(),
          // updatedDate: moment(updatedAt).format('MM-DD-YYYY'),
        }
      })
      console.log('Blog Response data', { data })

      setInterestList(data)
    }
  }

  useEffect(() => {
    loadInterest()
  }, [blogs])

  const { t } = useTranslation('common')

  const RenderTable = () => {
    if (interestList.length == 0) return null
    const reactTableData = CreateTableData(interestList)
    return <DataReactTable reactTableData={reactTableData} />
  }

  return (
    <Container className="SpecialitiesList">
       <Notification />
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.specialities.title')}</h3>
          {/* <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3> */}
          {/* <Button color="primary">Primary</Button> */}
        </Col>
      </Row>
      <Row>
        {/* <DataReactTable reactTableData={reactTableData} /> */}
        <RenderTable />
      </Row>
    </Container>
  )
}




export default SpecialitiesList
