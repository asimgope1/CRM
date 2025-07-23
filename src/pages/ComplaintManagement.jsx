import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Chart from "react-apexcharts";
import moment from "moment";
import { IconAlertTriangle, IconArrowUpCircle, IconClock, IconClockCheck, IconClockPause, IconHeadset, IconMoodSmile, IconRefresh, IconRotate, IconSearch } from "@tabler/icons-react";

const dummyComplaints = [
	{
		date: "2025-07-01",
		total: 120,
		resolved: 90,
		escalated: 10,
		reopened: 5,
		pending: 15,
		avgResolutionTime: 36,
		firstContactResolution: 60,
		categoryDistribution: { service: 40, technical: 50, behavior: 30 },
		feedbackScore: 4.2,
		repeatRate: 6,
		responseTime: 3.2,
		aging: { lt24: 20, bt24_72: 10, gt72: 5 },
		rootCauseAnalyzed: 8,
	},
	{
		date: "2025-07-15",
		total: 150,
		resolved: 120,
		escalated: 12,
		reopened: 7,
		pending: 18,
		avgResolutionTime: 30,
		firstContactResolution: 68,
		categoryDistribution: { service: 60, technical: 55, behavior: 35 },
		feedbackScore: 4.5,
		repeatRate: 5,
		responseTime: 2.8,
		aging: { lt24: 25, bt24_72: 12, gt72: 7 },
		rootCauseAnalyzed: 10,
	},
];

const ComplaintManagement = () => {
	const [selectedDate, setSelectedDate] = useState("2025-07-01");
	const [data, setData] = useState(null);
	const [selectedDepartment, setSelectedDepartment] = useState("");
	const [selectedIssueType, setSelectedIssueType] = useState("");

	useEffect(() => {
		const match = dummyComplaints.find(
			(d) => moment(d.date).format("YYYY-MM-DD") === selectedDate,
		);
		setData(match || null);
	}, [selectedDate]);

	const agingChart = {
		series: data ? [data.aging.lt24, data.aging.bt24_72, data.aging.gt72] : [],
		options: {
			labels: ["<24 hrs", "24–72 hrs", ">72 hrs"],
			colors: ["#00c292", "#ffb22b", "#e46a76"],
		},
	};

	const categoryChart = {
		series: data
			? [
					data.categoryDistribution.service,
					data.categoryDistribution.technical,
					data.categoryDistribution.behavior,
			  ]
			: [],
		options: {
			labels: ["Service", "Technical", "Behavior"],
			colors: ["#36a2eb", "#9966cc", "#ff6384"],
		},
	};

	return (
		<Layout>
			<div className='container-xl'>
				<div className='d-flex flex-wrap justify-content-between align-items-center my-3'>
					<h2>Complaint Management KPIs</h2>
					<div className='d-flex gap-2'>
						<select
							className='form-select'
							value={selectedDepartment}
							onChange={(e) => setSelectedDepartment(e.target.value)}>
							<option value=''>All Departments</option>
							<option value='Support'>Support</option>
							<option value='Sales'>Sales</option>
							<option value='Technical'>Technical</option>
							<option value='Billing'>Billing</option>
						</select>

						<select
							className='form-select'
							value={selectedIssueType}
							onChange={(e) => setSelectedIssueType(e.target.value)}>
							<option value=''>All Issue Types</option>
							<option value='Service Issue'>Service Issue</option>
							<option value='Product Defect'>Product Defect</option>
							<option value='Delay in Delivery'>Delay in Delivery</option>
							<option value='Miscommunication'>Miscommunication</option>
							<option value='Other'>Other</option>
						</select>

						<input
							type='date'
							value={selectedDate}
							onChange={(e) => setSelectedDate(e.target.value)}
							className='form-control'
						/>
					</div>
				</div>

				{data ? (
					<>
						<div className='row g-3 mb-4'>
							<Card
								title='Total Complaints Logged'
								value={data.total}
								color='primary'
								Icon={IconAlertTriangle}
							/>
							<Card
								title='First Contact Resolution'
								value={`${data.firstContactResolution}%`}
								color='success'
								Icon={IconHeadset}
							/>
							<Card
								title='Pending Complaints'
								value={data.pending}
								color='secondary'
								Icon={IconClockPause}
							/>
							<Card
								title='Reopened Complaints'
								value={data.reopened}
								color='info'
								Icon={IconRotate}
							/>
							<Card
								title='Avg. Resolution Time'
								value={`${data.avgResolutionTime} hrs`}
								color='warning'
								Icon={IconClock}
							/>

							<Card
								title='Escalated Complaints'
								value={data.escalated}
								color='danger'
								Icon={IconArrowUpCircle}
							/>

							<Card
								title='Feedback Score'
								value={data.feedbackScore.toFixed(2)}
								color='success'
								Icon={IconMoodSmile}
							/>
							<Card
								title='Root Cause Analyses'
								value={data.rootCauseAnalyzed}
								color='primary'
								Icon={IconSearch}
							/>
							<Card
								title='Avg. Response Time'
								value={`${data.responseTime} hrs`}
								color='info'
								Icon={IconClockCheck}
							/>
							<Card
								title='Repeat Complaint Rate'
								value={`${data.repeatRate}%`}
								color='danger'
								Icon={IconRefresh}
							/>
						</div>

						<div className='row g-4'>
							<div className='col-md-6'>
								<div className='card'>
									<div className='card-header'>
										Complaint Aging Distribution
									</div>
									<div className='card-body'>
										<Chart
											options={agingChart.options}
											series={agingChart.series}
											type='pie'
											height={300}
										/>
									</div>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='card'>
									<div className='card-header'>
										Complaint Category Breakdown
									</div>
									<div className='card-body'>
										<Chart
											options={categoryChart.options}
											series={categoryChart.series}
											type='donut'
											height={300}
										/>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className='alert alert-warning'>
						No complaint data found for this date.
					</div>
				)}
			</div>
		</Layout>
	);
};

// Card.jsx or inline component
const Card = ({ title, value, color = "primary", Icon }) => (
  <div className='col-xl-3 col-sm-6 d-flex'>
    <div className='card flex-fill mb-0'>
      <div className='card-body'>
        <div className='d-flex align-items-start justify-content-between'>
          <div>
            <p className='fs-14 mb-1'>{title}</p>
            <h2 className='mb-1 fs-16'>{value}</h2>
          </div>
          <span className={`avatar avatar-md rounded-circle bg-soft-${color} border border-${color}`}>
            <Icon size={20} className={`text-${color}`} />
          </span>
        </div>
      </div>
    </div>
  </div>
);


export default ComplaintManagement;
