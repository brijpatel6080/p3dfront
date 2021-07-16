import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [
  { id: 0, name: 'Page A', amt: 487 },
  { id: 1, name: 'Page B', amt: 300 },
  { id: 2, name: 'Page C', amt: 329 },
  { id: 3, name: 'Page D', amt: 300 },
  { id: 4, name: 'Page E', amt: 318 },
  { id: 5, name: 'Page F', amt: 350 },
  { id: 6, name: 'Page G', amt: 210 },
  { id: 7, name: 'Page H', amt: 229 },
  { id: 8, name: 'Page I', amt: 200 },
  { id: 9, name: 'Page J', amt: 218 },
];

const Patients = () => {
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
            <h5 className="bold-text">{t('online_marketing_dashboard.patients')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {activeItem.amt}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="amt" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#70bbfd'}
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

export default Patients;
