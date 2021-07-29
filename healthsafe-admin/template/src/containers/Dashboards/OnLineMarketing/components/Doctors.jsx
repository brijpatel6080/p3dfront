import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  BarChart, Bar, Cell, ResponsiveContainer,
} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [
  { id: 0, name: 'Page A', uv: 168 },
  { id: 1, name: 'Page B', uv: 100 },
  { id: 2, name: 'Page C', uv: 100 },
  { id: 3, name: 'Page D', uv: 78 },
  { id: 4, name: 'Page E', uv: 89 },
  { id: 5, name: 'Page F', uv: 39 },
  { id: 6, name: 'Page G', uv: 49 },
  { id: 7, name: 'Page H', uv: 100 },
  { id: 8, name: 'Page I', uv: 78 },
  { id: 9, name: 'Page J', uv: 89 },
];

const Doctors = () => {
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
            <h5 className="bold-text">{t('online_marketing_dashboard.doctors')}</h5>
          </div>
          <div className="dashboard__total">
            <TrendingUpIcon className="dashboard__trend-icon" />
            <p className="dashboard__total-stat">
              {activeItem.uv}
            </p>
            <div className="dashboard__chart-container">
              <ResponsiveContainer height={50}>
                <BarChart data={data}>
                  <Bar dataKey="uv" onClick={handleClick}>
                    {data.map((entry, index) => (
                      <Cell
                        key={entry.id}
                        cursor="pointer"
                        fill={index === activeIndex ? '#4ce1b6' : '#ff4861'}
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

export default Doctors;
