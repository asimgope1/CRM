import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Chart from "react-apexcharts";
import moment from "moment";
import { IconCircleMinus, IconClockHour8, IconHeadset, IconMoodCheck, IconMoodSmile, IconPhone } from "@tabler/icons-react";

const agents = [
	{
		name: "John Doe",
		empId: "EMP001",
		metrics: [
			{
				date: "2025-07-01",
				callsHandled: 120,
				aht: 370,
				fcr: 80,
				abandonRate: 5.5,
				csat: 90,
				sentiment: { positive: 90, neutral: 20, negative: 10 },
			},
			{
				date: "2025-07-15",
				callsHandled: 150,
				aht: 360,
				fcr: 85,
				abandonRate: 4.9,
				csat: 93,
				sentiment: { positive: 110, neutral: 25, negative: 15 },
			},
		],
	},
	{
		name: "Jane Smith",
		empId: "EMP002",
		metrics: [
			{
				date: "2025-07-01",
				callsHandled: 140,
				aht: 345,
				fcr: 87,
				abandonRate: 4.2,
				csat: 94,
				sentiment: { positive: 120, neutral: 15, negative: 5 },
			},
			{
				date: "2025-07-15",
				callsHandled: 160,
				aht: 355,
				fcr: 90,
				abandonRate: 3.8,
				csat: 96,
				sentiment: { positive: 130, neutral: 20, negative: 10 },
			},
		],
	},
];

const AgentPerformance = () => {
	const [selectedAgentId, setSelectedAgentId] = useState("EMP001");
	const [fromDate, setFromDate] = useState("2025-07-01");
	const [toDate, setToDate] = useState("2025-07-22");
	const [filteredData, setFilteredData] = useState([]);

	const handleFilter = () => {
		const agent = agents.find((a) => a.empId === selectedAgentId);
		const from = new Date(fromDate);
		const to = new Date(toDate);
		const filtered = agent.metrics.filter((m) => {
			const d = new Date(m.date);
			return d >= from && d <= to;
		});
		setFilteredData(filtered);
	};

	const selectedAgent = agents.find((a) => a.empId === selectedAgentId);

	React.useEffect(() => {
		handleFilter(); // filter data when agent or date changes
	}, [selectedAgentId, fromDate, toDate]);

	const sum = (key) =>
		filteredData.reduce((acc, val) => acc + (val[key] || 0), 0);

	const avg = (key) => {
		const total = sum(key);
		return filteredData.length ? total / filteredData.length : 0;
	};

	const totalSentiment = filteredData.reduce(
		(acc, val) => {
			acc.positive += val.sentiment.positive;
			acc.neutral += val.sentiment.neutral;
			acc.negative += val.sentiment.negative;
			return acc;
		},
		{ positive: 0, neutral: 0, negative: 0 },
	);

	const totalCallsHandled = sum("callsHandled");
	const averageAHT = `${Math.floor(avg("aht") / 60)
		.toString()
		.padStart(2, "0")}:${Math.floor(avg("aht") % 60)
		.toString()
		.padStart(2, "0")}`;
	const averageFCR = `${avg("fcr").toFixed(1)}%`;
	const averageAbandonRate = `${avg("abandonRate").toFixed(1)}%`;
	const averageCSAT = `${avg("csat").toFixed(1)}%`;

	const ahtChartData = {
		series: [
			{
				name: "AHT (in seconds)",
				data: filteredData.map((m) => m.aht),
			},
		],
		options: {
			chart: { type: "line" },
			xaxis: {
				categories: filteredData.map((m) => moment(m.date).format("MMM D")),
			},
		},
	};

	const pieChartData = {
		series: [
			totalSentiment.positive,
			totalSentiment.neutral,
			totalSentiment.negative,
		],
		options: {
			labels: ["Positive", "Neutral", "Negative"],
			colors: ["#4CAF50", "#FFC107", "#F44336"],
		},
	};

	return (
		<Layout>
			<div className='container-xl'>
				<div className='d-flex flex-wrap justify-content-between align-items-center my-3'>
					<h2>Agent KPI Report</h2>
					<div className='d-flex gap-2 align-items-center'>
						<select
							className='form-select'
							value={selectedAgentId}
							onChange={(e) => setSelectedAgentId(e.target.value)}>
							{agents.map((a) => (
								<option key={a.empId} value={a.empId}>
									{a.name}
								</option>
							))}
						</select>
						<input
							type='date'
							value={fromDate}
							onChange={(e) => setFromDate(e.target.value)}
							className='form-control'
						/>
						<input
							type='date'
							value={toDate}
							onChange={(e) => setToDate(e.target.value)}
							className='form-control'
						/>
						<button className='btn btn-primary' onClick={handleFilter}>
							Apply
						</button>
					</div>
				</div>

				<div className='row g-3 mb-4'>
					<Card
						title='Total Calls Handled'
						value={totalCallsHandled}
						color='primary'
						Icon={IconPhone}
						percentage={12}
					/>
					<Card
						title='Average Handling Time'
						value={averageAHT}
						color='warning'
						Icon={IconClockHour8}
						percentage={-5}
					/>
					<Card
						title='First Call Resolution (FCR)'
						value={averageFCR}
						color='success'
						Icon={IconHeadset}
						percentage={3}
					/>
					<Card
						title='Call Abandonment Rate'
						value={averageAbandonRate}
						color='danger'
						Icon={IconCircleMinus}
						percentage={-2}
					/>
					<Card
						title='Customer Satisfaction Score (CSAT)'
						value={averageCSAT}
						color='info'
						Icon={IconMoodSmile}
						percentage={7}
					/>
					<Card
						title='Sentiment Analysis (Positive%)'
						value={`${Math.round(
							(totalSentiment.positive /
								(totalSentiment.positive +
									totalSentiment.neutral +
									totalSentiment.negative)) *
								100,
						)}%`}
						color='secondary'
						Icon={IconMoodCheck}
						percentage={5}
					/>
				</div>

				<div className='row g-4'>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-header'>AHT Trend</div>
							<div className='card-body'>
								<Chart
									options={ahtChartData.options}
									series={ahtChartData.series}
									type='line'
									height={300}
								/>
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-header'>Sentiment Distribution</div>
							<div className='card-body'>
								<Chart
									options={pieChartData.options}
									series={pieChartData.series}
									type='pie'
									height={300}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

// Card.jsx
const Card = ({
  title,
  value,
  color = "primary",
  Icon = null,
  percentage = null,
  subtitle = "from last period",
}) => (
  <div className='col-xl-3 col-sm-6 d-flex'>
    <div className='card flex-fill mb-0 position-relative overflow-hidden'>
      <div className='card-body position-relative z-1'>
        <div className='d-flex align-items-start justify-content-between'>
          <div>
            <p className='fs-14 mb-1'>{title}</p>
            <h2 className='mb-1 fs-16'>{value}</h2>
            {percentage !== null && (
              <p className={`mb-0 fs-13 text-${percentage < 0 ? "danger" : "success"}`}>
                <i
                  className={`ti ${
                    percentage < 0 ? "ti-arrow-bar-down" : "ti-arrow-bar-up"
                  } me-1`}
                ></i>
                {Math.abs(percentage)}%
                <span className='text-body ms-1'>{subtitle}</span>
              </p>
            )}
          </div>
          <div className='d-flex align-items-center justify-content-between'>
            <span
              className={`avatar avatar-md rounded-circle bg-soft-${color} border border-${color}`}>
              {Icon && <Icon size={20} className={`text-${color}`} />}
            </span>
          </div>
        </div>
      </div>
      <div
        className='img-fluid position-absolute top-0 start-0 bg-light'
        style={{ width: "60px", height: "60px" }}
      ></div>
    </div>
  </div>
);



export default AgentPerformance;
