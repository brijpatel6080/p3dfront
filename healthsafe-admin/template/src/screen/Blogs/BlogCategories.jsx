import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'reactstrap'
import DataReactTable from './DataReactTable'
import CreateTableData from './CreateData'
import { Button, ButtonToolbar } from 'reactstrap'
import moment from 'moment'
import {
  getInterestsList,
  deleteInterestsList,
} from '../../utils/api/APIServices'
import { useSelector } from 'react-redux'
import Notifications from '../Blogs/Modal/Notification'

const BlogCategories = () => {
  const [interestList, setInterestList] = useState([])
  const userInfo = useSelector((state) => state.user)
  const blogs = useSelector((state) => state.user.blogs)
  console.log('blogs', blogs)
  const token = userInfo.token

  async function loadInterest() {
    // setShowLoader(true)
    const { response, error } = await getInterestsList(token)
    // setShowLoader(false)
    console.log('Blog Response', { response, error })
    if (error) {
      console.log(error)
    }
    if (response && response.status) {
      const data = response.data.map((interest) => {
        const { _id, name, createdAt, updatedAt } = interest
        return {
          id: _id,
          imageUrl:
            'http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png',
          name: name,
          createdDate: moment(createdAt).format('MM-DD-YYYY'),
          updatedDate: moment(updatedAt).format('MM-DD-YYYY'),
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
    <Container>
      <Notifications />
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.blogs_categories.title')}</h3>
          {/* <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3> */}
          {/* <Button color="primary">Primary</Button> */}
        </Col>
      </Row>
      <Row>
        <RenderTable />
      </Row>
    </Container>
  )
}

export default BlogCategories
