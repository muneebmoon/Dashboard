import React from "react";
import { Input, grid,Menu, notification, avatar } from "Central.js";
import CircularProgress from "../../components/CircularProgress";

function Dashboard() {
    const users = JSON.parse(localStorage.getItem("currentUser")) || [];

    const revenueData = [
        { month: "Jan", revenue: 5000 },
        { month: "Feb", revenue: 7000 },
        { month: "Mar", revenue: 6000 },
        { month: "Apr", revenue: 8000 },
        { month: "May", revenue: 9000 },
        { month: "Jun", revenue: 7500 },
        { month: "Jul", revenue: 8500 },
        { month: "Aug", revenue: 9500 },
        { month: "Sep", revenue: 10000 },
        { month: "Oct", revenue: 11000 },
        { month: "Nov", revenue: 12000 },
        { month: "Dec", revenue: 13000 },
    ];

    const totalRevenue = revenueData.reduce(
        (acc, item) => acc + item.revenue,
        0
    );

    const maxRevenue = Math.max(
        ...revenueData.map((item) => item.revenue)
    );

    return (
        <div className="main-container p-10 bg-gray-100 min-h-screen">

            <div className="navigation-container flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold text-gray-700">
                    Overview
                </h1>

                <div className="w-1/3">
                    <Input placeholder="Search" />
                </div>

                <div className="flex items-center gap-4">
                    <img src={Menu} alt="menu" />
                    <img src={notification} alt="notification" />

                    <div className="flex items-center gap-2">
                        <img
                            src={avatar}
                            alt="profile"
                            className="w-8 h-8 rounded-full"
                        />
                        <span>{users.fullname}</span>
                    </div>
                </div>
            </div>

            <div className="total-revenue-container flex gap-10">

                <div className=" bg-white p-8 rounded-lg shadow w-2/3">
                    <h2 className="text-2xl font-bold text-gray-600">
                        Total Revenue
                    </h2>

                    <p className="text-3xl font-semibold mt-2">
                        PKR {totalRevenue.toLocaleString()}
                    </p>

                    <div className="mt-10 h-64 flex items-end gap-4">
                        {revenueData.map((item, index) => {
                            const height =
                                (item.revenue / maxRevenue) * 100;

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center flex-1 h-full"
                                >

                                    <div className="flex items-end h-full w-full justify-center">
                                        <div
                                            className="bg-[#FFC029] w-6 rounded-t-md"
                                            style={{ height: `${height}%` }}
                                        />
                                    </div>

                                    <span className="text-xs mt-2 text-gray-600">
                                        {item.month}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="customer-container w-1/3">
                    <div className="bg-white p-8 rounded-lg shadow w-full">
                        <h2 className="text-2xl font-bold text-gray-600">
                            Total Customers
                        </h2>
                        <div className="customers-data grid grid-cols-2 gap-5 mt-10 place-items-center">
                            <div className="current-customer">
                                <CircularProgress percentage={85} size={120} stroke={10} color="#5F27CD" />
                                <p className="text-center mt-2 text-gray-600">Active Customers</p>
                            </div>
                            <div className="current-customer">
                                <CircularProgress percentage={66} size={120} stroke={10} color="#FFC029" />
                                <p className="text-center mt-2 text-gray-600">Retargeted Customers</p>
                            </div>
                            <div className="current-customer">
                                <CircularProgress percentage={90} size={120} stroke={10} color="#FF8918" />
                                <p className="text-center mt-2 text-gray-600">New Customers</p>
                            </div>
                            <div className="current-customer">
                                <CircularProgress percentage={30} size={120} stroke={10} color="#FF6B6B" />
                                <p className="text-center mt-2 text-gray-600">Returning Customers</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
