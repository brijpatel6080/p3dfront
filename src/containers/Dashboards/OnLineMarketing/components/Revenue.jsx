import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [
  { id: 0, name: 'Page A', pv: 8523 },
  { id: 1, name: 'Page B', pv: 3010 },
  { id: 2, name: 'Page C', pv: 5510 },
  { id: 3, name: 'Page D', pv: 4210 },
  { id: 4, name: 'Page E', pv: 8510 },
  { id: 5, name: 'Page F', pv: 4510 },
  { id: 6, name: 'Page G', pv: 2110 },
  { id: 7, name: 'Page H', pv: 5610 },
  { id: 8, name: 'Page I', pv: 6810 },
  { id: 9, name: 'Page J', pv: 3210 },
];

const Revenue = () => {
  const { t } = useTranslation('common');
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = (item) => {
    const index = data.indexOf(item.payload);
    setActiveIndex(index);
  };

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <CardBody className="dashboard__card-widget">
          <div className="card__title">
            <h5 className="bold-text">{t('online_marketing_dashboard.revenue')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              ${(activeItem.pv)}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="pv" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#f6da6e'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Revenue;
