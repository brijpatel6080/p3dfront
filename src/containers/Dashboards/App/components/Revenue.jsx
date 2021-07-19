import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

const Revenue = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="mobile-app-widget">
            <div className="mobile-app-widget__top-line mobile-app-widget__top-line--turquoise">
              <p className="mobile-app-widget__total-stat">$8523</p>
              <TrendingDownIcon className="dashboard__trend-icon" />
            </div>
            <div className="mobile-app-widget__title">
              <h5>{t('app_dashboard.Revenue')}</h5>
            </div>
            <div className="progress-wrap progress-wrap--small
        progress-wrap--turquoise-gradient progress-wrap--label-top"
            >
              <Progress value={50}><p className="progress__label">.</p></Progress>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Revenue;
