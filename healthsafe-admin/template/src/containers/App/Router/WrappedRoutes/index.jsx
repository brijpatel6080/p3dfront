import React from 'react'
import '../../../../assets/css/Star.css'
import '../../../../assets/css/Custom.css'
import { Route } from 'react-router-dom'
import Layout from '../../../Layout/index'
import Commerce from './Commerce'
import Finance from './Finance'
import OnLineMarketingDashboard from '../../../Dashboards/OnLineMarketing/index'
import AppDashboard from '../../../Dashboards/App/index'
import BookingDashboard from '../../../Dashboards/Booking/index'
import FitnessDashboard from '../../../Dashboards/Fitness/index'
import UI from './UI'
import Mail from '../../../Mail/index'
import Chat from '../../../Chat/index'
import Todo from '../../../Todo/index'
import Forms from './Forms'
import Tables from './Tables'
import Charts from './Charts'
import Maps from './Maps'
import Account from './Account'
import ECommerce from './ECommerce'
import DefaultPages from './DefaultPages'
import Documentation from './Documentation'

import DoctorsViewList from '../../../../screen/Doctors/DoctorsViewList'
import Feedback from '../../../../screen/Doctors/Feedback'
import BlogCategories from '../../../../screen/Blogs/BlogCategories'
import AddBlogCategories from '../../../../screen/Blogs/AddBlogCategories'
import AddBlog from '../../../../screen/Blogs/AddBlog'
import AllBlogs from '../../../../screen/Blogs/AllBlogs/AllBlogs'
import ViewDoctors from '../../../../screen/Doctors/View/ViewDoctors'
import SpecialitiesList from '../../../../screen/Specialities/View/SpecialitiesList'
import AddSpecialities from '../../../../screen/Specialities/Add/AddSpecialities'
import EditSpecialities from '../../../../screen/Specialities/edit/EditSpecialities'
import SubSpecialitiesList from '../../../../screen/SubSpecialities/View/SubSpecialitiesList'
import AddSubSpecialities from '../../../../screen/SubSpecialities/Add/AddSubSpecialities'
import EditSubSpecialities from '../../../../screen/SubSpecialities/edit/EditSubSpecialities'


export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/e_commerce_dashboard" component={Commerce} />
      <Route
        path="/online_marketing_dashboard"
        component={OnLineMarketingDashboard}
      />

      {/* Screen  */}
      <Route exact path="/app_dashboard" component={AppDashboard} />
      <Route exact path="/DoctorsViewList" component={DoctorsViewList} />
      <Route exact path="/ViewDoctors" component={ViewDoctors} />
      <Route exact path="/Feedback" component={Feedback} />
      <Route exact path="/BlogCategories" component={BlogCategories} />
      <Route exact path="/AddBlogCategories" component={AddBlogCategories} />
      <Route exact path="/AddBlog" component={AddBlog} />
      <Route exact path="/AllBlogs" component={AllBlogs} />
      <Route exact path="/SpecialitiesList" component={SpecialitiesList} />
      <Route exact path="/AddSpecialities" component={AddSpecialities} />
      <Route exact path="/EditSpecialities" component={EditSpecialities} />
      <Route exact path="/SubSpecialitiesList" component={SubSpecialitiesList} />
      <Route exact path="/AddSubSpecialities" component={AddSubSpecialities} />
      <Route exact path="/EditSubSpecialities" component={EditSubSpecialities} />




      <Route path="/booking_dashboard" component={BookingDashboard} />
      <Route path="/finance_dashboard" component={Finance} />
      <Route path="/fitness_dashboard" component={FitnessDashboard} />
      <Route path="/ui" component={UI} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/todo" component={Todo} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
      <Route path="/maps" component={Maps} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      <Route path="/documentation" component={Documentation} />
    </div>
  </div>
)
