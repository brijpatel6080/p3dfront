import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'reactstrap'
import DataReactTable from './DataReactTable'
import CreateTableData from './CreateData'
import { Button, ButtonToolbar } from 'reactstrap'
import { getBlogsList } from '../../../utils/api/APIServices'
import { useSelector } from 'react-redux'
import moment from 'moment'

const AllBlogs = () => {
  const [interestList, setInterestList] = useState([])
  const userInfo = useSelector((state) => state.user)
  const blogs = useSelector((state) => state.user.blogs)

  console.log('blogs123', blogs)
  const token = userInfo.token

  async function loadInterest() {
    // setShowLoader(true)
    const { response, error } = await getBlogsList(token)
    // setShowLoader(false)
    console.log('Blog Response', { response, error })
    if (error) {
      console.log(error)
    }
    if (response && response.status) {
      const data = response.data.map((interest) => {
        console.log('interest', interest)
        // createdAt
        // totalBookMarks
        // totalLikes
        const {
          _id,
          title,
          name,
          author,
          featured_image,
          createdAt,
          description,
          totalBookMarks,
          totalLikes,
          tags,
          source_url,
        } = interest
        return {
          id: _id,
          // imageUrl:
          //   'http://briotechno.com/img/services/mobile_app/orderKingResto/orderKingResto.png',

          title: title,
          totalBookMarks: totalBookMarks.toString(),
          totalLikes: totalLikes.toString(),
          createdDate: moment(createdAt).format('MM-DD-YYYY'),
          description,
          featured_image,
          author,
          name,
          categorie: tags,
          source_url,
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
    <Container className="allBlogs">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.blogs_all.title')}</h3>
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

export default AllBlogs
