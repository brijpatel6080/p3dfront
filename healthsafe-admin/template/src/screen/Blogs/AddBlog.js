import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import Form from './components/FormAddBlog'
import VerticalForm from './components/AddBlogReduxForm'
import showResults from './components/Show'
const AddBlog = ({ onSuccess }) => {
  const { t } = useTranslation('common')

  return (
    <Container>
      {/* <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.blogs_add.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row> */}
      {/* <Row>
        <Form isHorizontal />
        <Form isHorizontal isAboveError />
      </Row> */}
      <Row>
        {/* <Form /> */}
        {/* <Form isAboveError /> */}
        <VerticalForm onSuccess={onSuccess} onSubmit={showResults} />
      </Row>
    </Container>
  )
}

export default AddBlog
