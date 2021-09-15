import React from 'react';



// Screen Start
// ============================================================
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Projects = React.lazy(() => import('./screen/projects/Projects'));

const routes = [

// -------------------------------------------------------


  { path: '/Projects', name: 'Projects', component: Projects },
  { path: '/Dashboard', name: 'Dashboard', component: Dashboard },
  

// Screen End
// ============================================================


  
];

export default routes;
