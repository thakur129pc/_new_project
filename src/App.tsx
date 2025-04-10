import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Ecommerce from './pages/Dashboard/Ecommerce';
import Stocks from './pages/Dashboard/Stocks';
import Crm from './pages/Dashboard/Crm';
import Marketing from './pages/Dashboard/Marketing';
import Analytics from './pages/Dashboard/Analytics';
import AuthLayout from './layout/AuthLayout';
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';
import NotFound from './pages/OtherPage/NotFound';
import UserProfiles from './pages/UserProfiles';
import Carousel from './pages/UiElements/Carousel';
import Maintenance from './pages/OtherPage/Maintenance';
import FiveZeroZero from './pages/OtherPage/FiveZeroZero';
import FiveZeroThree from './pages/OtherPage/FiveZeroThree';
import Videos from './pages/UiElements/Videos';
import Images from './pages/UiElements/Images';
import Alerts from './pages/UiElements/Alerts';
import Badges from './pages/UiElements/Badges';
import Pagination from './pages/UiElements/Pagination';
import Avatars from './pages/UiElements/Avatars';
import Buttons from './pages/UiElements/Buttons';
import ButtonsGroup from './pages/UiElements/ButtonsGroup';
import Notifications from './pages/UiElements/Notifications';
import LineChart from './pages/Charts/LineChart';
import BarChart from './pages/Charts/BarChart';
import PieChart from './pages/Charts/PieChart';
import Invoices from './pages/Invoices';
import ComingSoon from './pages/OtherPage/ComingSoon';
import FileManager from './pages/FileManager';
import Calendar from './pages/Calendar';
import BasicTables from './pages/Tables/BasicTables';
import DataTables from './pages/Tables/DataTables';
import PricingTables from './pages/PricingTables';
import Faqs from './pages/Faqs';
import Chats from './pages/Chat/Chats';
import FormElements from './pages/Forms/FormElements';
import FormLayout from './pages/Forms/FormLayout';
import Blank from './pages/Blank';
import EmailInbox from './pages/Email/EmailInbox';
import EmailDetails from './pages/Email/EmailDetails';
import TaskList from './pages/Task/TaskList';
import TaskKanban from './pages/Task/TaskKanban';
import BreadCrumb from './pages/UiElements/BreadCrumb';
import Cards from './pages/UiElements/Cards';
import Dropdowns from './pages/UiElements/Dropdowns';
import Links from './pages/UiElements/Links';
import Lists from './pages/UiElements/Lists';
import Popovers from './pages/UiElements/Popovers';
import Progressbar from './pages/UiElements/Progressbar';
import Ribbons from './pages/UiElements/Ribbons';
import Spinners from './pages/UiElements/Spinners';
import Tabs from './pages/UiElements/Tabs';
import Tooltips from './pages/UiElements/Tooltips';
import EmailLayout from './components/email/EmailLayout';
import Modals from './pages/UiElements/Modals';
import ResetPassword from './pages/AuthPages/ResetPassword';
import TwoStepVerification from './pages/AuthPages/TwoStepVerification';
import Success from './pages/OtherPage/Success';
import AppLayout from './layout/AppLayout';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Ecommerce />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/stocks" element={<Stocks />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/invoice" element={<Invoices />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/pricing-tables" element={<PricingTables />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/form-layout" element={<FormLayout />} />

            {/* Applications */}
            <Route path="/chat" element={<Chats />} />

            <Route path="/task-list" element={<TaskList />} />
            <Route path="/task-kanban" element={<TaskKanban />} />
            <Route path="/file-manager" element={<FileManager />} />

            {/* Email */}
            <Route element={<EmailLayout />}>
              <Route path="/inbox" element={<EmailInbox />} />
              <Route path="/inbox-details" element={<EmailDetails />} />
            </Route>

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/data-tables" element={<DataTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/breadcrumb" element={<BreadCrumb />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/buttons-group" element={<ButtonsGroup />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/dropdowns" element={<Dropdowns />} />
            <Route path="/images" element={<Images />} />
            <Route path="/links" element={<Links />} />
            <Route path="/list" element={<Lists />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/popovers" element={<Popovers />} />
            <Route path="/progress-bar" element={<Progressbar />} />
            <Route path="/ribbons" element={<Ribbons />} />
            <Route path="/spinners" element={<Spinners />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/tooltips" element={<Tooltips />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/pie-chart" element={<PieChart />} />
          </Route>

          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/two-step-verification" element={<TwoStepVerification />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/success" element={<Success />} />
          <Route path="/five-zero-zero" element={<FiveZeroZero />} />
          <Route path="/five-zero-three" element={<FiveZeroThree />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}
