"use client";

import React from "react";
import { Card, CardBody, CardHeader, Divider, Progress } from "@nextui-org/react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Icon } from "@iconify/react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Monthly Sales Performance',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: [4000, 3000, 2000, 2780, 1890, 2390],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Revenue',
            data: [2400, 1398, 9800, 3908, 4800, 3800],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
    ],
};

export default function Dashboard() {
    return (
        <div className="p-2 sm:p-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardBody>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Total Revenue</p>
                                <p className="text-xl sm:text-2xl font-semibold">$45,231.89</p>
                            </div>
                            <Icon icon="solar:dollar-minimalistic-bold" className="text-green-500" width={20} height={20} />
                        </div>
                        <Progress color="success" aria-label="Loading..." value={60} className="mt-2" />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">New Customers</p>
                                <p className="text-xl sm:text-2xl font-semibold">+2,350</p>
                            </div>
                            <Icon icon="solar:users-group-rounded-bold" className="text-blue-500" width={20} height={20} />
                        </div>
                        <Progress color="primary" aria-label="Loading..." value={45} className="mt-2" />
                    </CardBody>
                </Card>
                <Card className="sm:col-span-2 lg:col-span-1">
                    <CardBody>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Active Now</p>
                                <p className="text-xl sm:text-2xl font-semibold">+573</p>
                            </div>
                            <Icon icon="solar:user-rounded-bold" className="text-purple-500" width={20} height={20} />
                        </div>
                        <Progress color="secondary" aria-label="Loading..." value={80} className="mt-2" />
                    </CardBody>
                </Card>
            </div>
            <Card className="mt-4">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-sm sm:text-md">Sales Overview</p>
                        <p className="text-xs sm:text-small text-default-500">Monthly sales performance</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <div className="w-full h-[200px] sm:h-[300px]">
                        <Bar options={options} data={data} />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}