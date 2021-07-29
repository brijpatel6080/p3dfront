import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { RTLProps } from '@/shared/prop-types/ReducerProps';

import Patients from './components/Patients';
import Appointments from './components/Appointments';
import Revenue from './components/Revenue';
import ABTestingAnalytics from './components/ABTestingAnalytics';
import BounceRateArea from './components/BounceRateArea';
import VisitorsSessions from './components/VisitorsSessions';
import SalesStatistic from './components/SalesStatistic';
import BudgetStatistic from './components/BudgetStatistic';
import AudienceByCountry from './components/AudienceByCountry';
import BestSellingRegions from './components/BestSellingRegions';
import GoalsCompletion from './components/GoalsCompletion';
import Doctors from './components/Doctors';

const OnLineMarketingDashboard = ({ rtl }) => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('online_marketing_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <Doctors />
        {/* <Visits /> */}
        <Patients />
        <Appointments />
        <Revenue />
      </Row>
      <Row>
        <ABTestingAnalytics dir={rtl.direction} />
        <BounceRateArea dir={rtl.direction} />
        <VisitorsSessions dir={rtl.direction} />
        <SalesStatistic />
        <BudgetStatistic />
        <AudienceByCountry />
        <BestSellingRegions />
        <GoalsCompletion />
      </Row>
    </Container>
  );
};

OnLineMarketingDashboard.propTypes = {
  rtl: RTLProps.isRequired,
};

export default compose(connect(state => ({
  rtl: state.rtl,
})))(OnLineMarketingDashboard);
