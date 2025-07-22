import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import moment from "moment";
import { IconClock, IconPhoneCall, IconPhoneOff } from "@tabler/icons-react";

// Sample dummy data (can be replaced with real API data)
const dummyCallSupportData = [
	{
		date: "2025-07-01",
		avgWaitTime: 28, // in seconds
		abandonmentRate: 14.5, // in percentage
		callbackRate: 85.2, // in percentage
		transferredCallRate: 18.9, // in percentage
	},
	{
		date: "2025-07-22",
		avgWaitTime: 22,
		abandonmentRate: 12.3,
		callbackRate: 88.9,
		transferredCallRate: 20.1,
	},
];

const CallSupportManagement = () => {
	const [selectedDate, setSelectedDate] = useState("2025-07-01");
	const [data, setData] = useState(null);

	useEffect(() => {
		const match = dummyCallSupportData.find(
			(d) => moment(d.date).format("YYYY-MM-DD") === selectedDate,
		);
		setData(match || null);
	}, [selectedDate]);

	return (
		<Layout>
			<div className='container-xl'>
				<div className='d-flex flex-wrap justify-content-between align-items-center my-3'>
					<h2>Call Support Experience KPIs</h2>
					<div className='d-flex gap-2'>
						<input
							type='date'
							value={selectedDate}
							onChange={(e) => setSelectedDate(e.target.value)}
							className='form-control'
						/>
					</div>
				</div>

				{data ? (
					<div className='row g-3 mb-4'>
						<Card
							title='Average Wait Time'
							value={`${data.avgWaitTime} sec`}
							color='warning'
							Icon={IconClock}
						/>
						<Card
							title='Abandonment Rate'
							value={`${data.abandonmentRate}%`}
							color='danger'
							Icon={IconPhoneOff}
						/>
						<Card
							title='Callback Success Rate'
							value={`${data.callbackRate}%`}
							color='success'
							Icon={IconPhoneCall}
						/>
						<Card
							title='Transferred Call Rate'
							value={`${data.transferredCallRate}%`}
							color='info'
							Icon={IconPhoneCall}
						/>
					</div>
				) : (
					<div className='alert alert-warning'>
						No support data found for this date.
					</div>
				)}
			</div>
		</Layout>
	);
};

// 🔄 Card Component (same design as ComplaintManagement)
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


export default CallSupportManagement;
