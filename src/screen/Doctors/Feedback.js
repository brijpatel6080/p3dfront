import React from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'reactstrap'
import DataReactTableFeedback from './DataReactTableFeedback'
import CreateDataFeedback from './CreateDataFeedback'

const DoctorsViewList = () => {
  const { t } = useTranslation('common')
  const reactTableData = CreateDataFeedback()

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.feedback_data_table.title')}</h3>
        </Col>
      </Row>
      <Row>
        <DataReactTableFeedback reactTableData={reactTableData} />
      </Row>
    </Container>
  )
}

export default DoctorsViewList
