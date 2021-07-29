import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import Modal from '@/shared/components/Modal';

const HeaderModals = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={4}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.modals.header_modals')}</h5>
            <h5 className="subhead">Use default progress with property <span className="red-text">header</span></h5>
          </div>
          <ButtonToolbar>
            <Modal
              color="primary"
              title="Congratulations!"
              header
              btn="Default"
              message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
               brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
               Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
               avoid six yet table china. And bed make say been then dine mrs. To household rapturous
               fulfilled attempted on so. "
              // message={ 
              //   <>
              //   <div class="card"><div class="card-body"><div class="card__title"><button type="button" class="addCategory btn btn-primary">View All Categories</button></div><form class="form false"><div class="form__form-group"><span class="form__form-group-label">Name</span><div class="form__form-group-field"><div class="form__form-group-input-wrap "><input name="category" rules="[object Object]" placeholder="Name" value="" /></div></div></div><div role="toolbar" class="form__button-toolbar btn-toolbar"><button type="submit" class="btn btn-primary">Add Category</button><button type="button" class="btn btn-secondary">Cancel</button></div></form></div></div>
              //   </>

              //  }
            />
            <Modal
              color="success"
              title="Well Done!"
              header
              btn="Success"
              message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
               brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
               Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
               avoid six yet table china. And bed make say been then dine mrs. To household rapturous
               fulfilled attempted on so. "
            />
            <Modal
              color="warning"
              title="Attention!"
              header
              btn="Warning"
              message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
               brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
               Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
               avoid six yet table china. And bed make say been then dine mrs. To household rapturous
               fulfilled attempted on so. "
            />
            <Modal
              color="danger"
              title="Stop!"
              header
              btn="Danger"
              message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
              brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
              Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
              avoid six yet table china. And bed make say been then dine mrs. To household rapturous
              fulfilled attempted on so. "
            />
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeaderModals;
