import React from 'react';
import Seo from '../../components/common/Seo';
import DashboardCard from './db-dashboard/components/DashboardCard';
import Sidebar from './common/Sidebar';
import Header from '../../components/header/dashboard-header';
import Footer from './common/Footer';

const Dashboard = () => {
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <div className="header-margin"></div>
      <Header />
      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
        </div>
        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Hello🏖️</h1>
                <div className="text-15 text-light-1">
                   從這裡踏上BayEcape精彩的旅程！
                </div>
              </div>
            </div>

            <DashboardCard />

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
