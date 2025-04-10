import React from 'react';
import PageBreadcrumb from '../../components/common/PageBreadCrumb';
import ComponentCard from '../../components/common/ComponentCard';
import BarChartOne from '../../components/charts/bar/BarChartOne';
import BarChartTwo from '../../components/charts/bar/BarChartTwo';
import PageMeta from '../../components/common/PageMeta';

export default function BarChart() {
  return (
    <div>
      <PageMeta
        title="React.js Chart Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Chart Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
        <ComponentCard title="Bar Chart 2">
          <BarChartTwo />
        </ComponentCard>
      </div>
    </div>
  );
}
