import React from 'react';
import Seo from '../../components/common/Seo';
import DashboardCard from './db-dashboard/components/DashboardCard';
import Sidebar from './common/Sidebar';
import Header from '../../components/header/dashboard-header';
import ChartSelect from './db-dashboard/components/ChartSelect';
import ChartMain from './db-dashboard/components/ChartMain';
import Link from 'next/link';
import RercentBooking from './db-dashboard/components/RercentBooking';
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
                <h1 className="text-30 lh-14 fw-600">Wellcome</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
            </div>

            <DashboardCard />

            <div className="row y-gap-30 pt-20 chart_responsive">
              <div className="col-xl-7 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="d-flex justify-between items-center">
                    <h2 className="text-18 lh-1 fw-500">Earning Statistics</h2>
                    <ChartSelect />
                  </div>
                  <div className="pt-30">
                    <ChartMain />
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-md-6">
                <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                  <div className="d-flex justify-between items-center">
                    <h2 className="text-18 lh-1 fw-500">Recent Bookings</h2>
                    <div>
                      <Link href="#" className="text-14 text-blue-1 fw-500 underline">
                        View All
                      </Link>
                    </div>
                  </div>

                  <RercentBooking />
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
