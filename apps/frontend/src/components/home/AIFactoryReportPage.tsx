"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, registerables, Chart, TooltipItem } from 'chart.js';

// Register all Chart.js components
ChartJS.register(...registerables);

// <!-- Chosen Palette: Earthy Neutral -->
// <!-- Application Structure Plan: The component is structured as a top-to-bottom narrative, guiding the user from the core problem of GPU inefficiency to the solution of a multi-tenant AI platform. This structure is more intuitive and engaging than a direct report translation. Key interactions include a tabbed interface to compare GPU sharing strategies without cluttering the UI, and dynamic charts that visualize key data points at each stage of the narrative. The user flow is designed to be linear and educational. -->
// <!-- Visualization & Content Choices:
// - Report Info: GPU underutilization -> Goal: Inform -> Viz: Doughnut Chart (Chart.js). Justification: Immediately quantifies the core problem.
// - Report Info: MIG vs. Time-Slicing -> Goal: Compare -> Viz: Interactive Tabs with Radar Charts (Chart.js). Justification: Allows focused comparison of multi-attribute strategies. Interaction is handled by React state.
// - Report Info: Platform Architecture -> Goal: Organize -> Viz: HTML/CSS Diagram. Justification: A clean, semantic way to show system layers without external libraries or SVG.
// - Report Info: Developer Workflow -> Goal: Organize/Change -> Viz: Vertical Timeline (HTML/CSS). Justification: Clearly illustrates a sequential process.
// - Report Info: Monitoring Metrics -> Goal: Inform -> Viz: Line/Bar Charts (Chart.js). Justification: Provides a tangible view of the platform's benefits.
// - Library/Method: All charts use Chart.js (Canvas). All diagrams use structured HTML and Tailwind CSS.
// -->
// <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

const AIFactoryReportPage = () => {
  const [activeTab, setActiveTab] = useState('mig');

        const gpuIdleChartRef = useRef<HTMLCanvasElement | null>(null);
        const migRadarChartRef = useRef<HTMLCanvasElement | null>(null);
        const tsRadarChartRef = useRef<HTMLCanvasElement | null>(null);
        const utilizationChartRef = useRef<HTMLCanvasElement | null>(null);
        const costChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const chartInstances: Chart[] = [];

    const PALETTE = {
        dark: '#222222',
        accent1: '#22A699', // Green
        accent2: '#F24C3D', // Red-Orange
        accent3: '#F2BE22', // Yellow
        light: '#FDFBF8',
        gray: '#434242',
    };

    const commonTooltipCallback = {
                        title: function(tooltipItems: TooltipItem<'doughnut'>[]): string {
                                const item = tooltipItems[0];
                                const label = item.chart.data.labels?.[item.dataIndex];
                                            if (Array.isArray(label)) {
                                                return label.join(' ');
                                            }
                                            return typeof label === 'string' ? label : '';
        }
    };

    const commonChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleFont: { size: 14, weight: 'bold' as const },
                bodyFont: { size: 12, weight: 'normal' as const },
                padding: 10,
                cornerRadius: 4,
                callbacks: commonTooltipCallback,
            }
        },
        scales: {
            y: {
                ticks: { color: PALETTE.gray, font: { family: "'Inter', sans-serif"} },
                grid: { color: '#EEE' }
            },
            x: {
                ticks: { color: PALETTE.gray, font: { family: "'Inter', sans-serif"} },
                grid: { display: false }
            }
        }
    };

    if (gpuIdleChartRef.current) {
        const gpuIdleChart = new ChartJS(gpuIdleChartRef.current, {
            type: 'doughnut',
            data: {
                labels: ['Idle Time', 'Active Compute'],
                datasets: [{
                    data: [85, 15],
                    backgroundColor: [ '#e5e7eb', PALETTE.accent2 ],
                    borderColor: PALETTE.light,
                    borderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                   legend: {
                        position: 'bottom',
                        labels: {
                            color: PALETTE.gray,
                            padding: 20,
                            font: { size: 14, family: "'Inter', sans-serif"}
                        }
                    },
                   tooltip: commonChartOptions.plugins.tooltip
                }
            }
        });
        chartInstances.push(gpuIdleChart);
    }

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: commonChartOptions.plugins.tooltip
        },
        scales: {
            r: {
                angleLines: { color: '#EEE' },
                grid: { color: '#EEE' },
                pointLabels: {
                    font: { size: 14, weight: 'bold' as const, family: "'Inter', sans-serif" },
                    color: PALETTE.gray
                },
                ticks: { display: false, stepSize: 2 },
                min: 0,
                max: 10
            }
        }
    };

    if (migRadarChartRef.current) {
        const migRadarChart = new ChartJS(migRadarChartRef.current, {
            type: 'radar',
            data: {
                labels: ['Isolation', 'Performance', 'Flexibility', 'Density'],
                datasets: [{
                    label: 'MIG',
                    data: [9.5, 9, 4, 6],
                    backgroundColor: 'rgba(34, 166, 153, 0.2)',
                    borderColor: PALETTE.accent1,
                    pointBackgroundColor: PALETTE.accent1,
                }]
            },
            options: radarOptions
        });
        chartInstances.push(migRadarChart);
    }

    if (tsRadarChartRef.current) {
        const tsRadarChart = new ChartJS(tsRadarChartRef.current, {
            type: 'radar',
            data: {
                labels: ['Isolation', 'Performance', 'Flexibility', 'Density'],
                datasets: [{
                    label: 'Time-Slicing',
                    data: [3, 6, 9, 9],
                    backgroundColor: 'rgba(242, 190, 34, 0.2)',
                    borderColor: PALETTE.accent3,
                    pointBackgroundColor: PALETTE.accent3,
                }]
            },
            options: radarOptions
        });
        chartInstances.push(tsRadarChart);
    }

    if (utilizationChartRef.current) {
        const utilizationChart = new ChartJS(utilizationChartRef.current, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'GPU Utilization %',
                    data: [25, 45, 60, 85, 90, 55, 30],
                    borderColor: PALETTE.accent1,
                    backgroundColor: 'rgba(34, 166, 153, 0.1)',
                    fill: true,
                    tension: 0.4,
                }]
            },
            options: commonChartOptions
        });
       chartInstances.push(utilizationChart);
    }

    if (costChartRef.current) {
        const costChart = new ChartJS(costChartRef.current, {
            type: 'bar',
            data: {
                labels: ['Team A', 'Team B', 'Team C', 'Research'],
                datasets: [{
                    label: 'GPU Cost Allocation',
                    data: [4200, 5500, 2100, 1800],
                    backgroundColor: [PALETTE.accent1, PALETTE.accent3, PALETTE.accent2, '#cccccc'],
                    borderRadius: 4
                }]
            },
            options: commonChartOptions
        });
        chartInstances.push(costChart);
    }

    return () => {
      chartInstances.forEach(chart => chart.destroy());
    };
  }, [activeTab]); // Rerun effect if tab changes to re-init charts in new canvas elements if needed

  return (
    <>
      <div className="relative antialiased">
        <header className="sticky top-0 bg-[#FDFBF8]/80 backdrop-blur-md z-50 shadow-sm">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-[#222222]">AI Factory Blueprint</h1>
                <div className="hidden md:flex space-x-8">
                    <a href="#problem" className="nav-link text-gray-600">The Challenge</a>
                    <a href="#solution" className="nav-link text-gray-600">GPU Sharing</a>
                    <a href="#blueprint" className="nav-link text-gray-600">Architecture</a>
                    <a href="#workflow" className="nav-link text-gray-600">Workflow</a>
                    <a href="#payoff" className="nav-link text-gray-600">The Payoff</a>
                </div>
            </nav>
        </header>

        <main className="container mx-auto p-4 md:p-8">
            <section id="intro" className="text-center py-16 md:py-24">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#222222] tracking-tight">From Siloed AI to the Enterprise AI Factory</h2>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
                    This interactive report explores the strategic shift from isolated projects to a centralized, multi-tenant MLOps platform on Kubernetes, designed to maximize the value of scarce GPU resources and accelerate innovation.
                </p>
            </section>

            <div className="space-y-24 md:space-y-32">
                <section id="problem" className="scroll-mt-20">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#222222]">The Core Challenge: GPU Inefficiency</h3>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Standard Kubernetes allocates entire GPUs to single tasks, leading to profound underutilization and wasted capital on one of the most expensive assets in modern tech.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <div className="text-center md:text-left">
                            <p className="text-7xl lg:text-8xl font-extrabold text-[#F24C3D]">~85%</p>
                            <p className="mt-2 text-2xl font-semibold text-[#222222]">Potential GPU Idle Time</p>
                            <p className="mt-2 text-gray-500">For bursty development and inference workloads in non-shared environments, most of a GPU&#39;s lifecycle is spent waiting, representing a massive bottleneck and financial drain.</p>
                        </div>
                        <div>
                            <div className="chart-container">
                                <canvas ref={gpuIdleChartRef}></canvas>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="solution" className="scroll-mt-20">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#222222]">The Solution: Intelligent GPU Sharing</h3>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">The cornerstone of the AI Factory is implementing a GPU sharing strategy. The choice between hardware partitioning (MIG) and software multiplexing (Time-Slicing) is the most critical technical decision, dictating performance, isolation, and cost-effectiveness.</p>
                    </div>

                    <div className="mt-12">
                        <div className="flex justify-center mb-8 border border-gray-200 rounded-full p-1 max-w-md mx-auto">
                            <button onClick={() => setActiveTab('mig')} className={`w-1/2 p-3 rounded-full font-semibold transition ${activeTab === 'mig' ? 'active-tab' : ''}`}>Multi-Instance GPU (MIG)</button>
                            <button onClick={() => setActiveTab('ts')} className={`w-1/2 p-3 rounded-full font-semibold transition ${activeTab === 'ts' ? 'active-tab' : ''}`}>Time-Slicing</button>
                        </div>

                        {activeTab === 'mig' && (
                            <div id="mig-content" className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="radar-chart-container">
                                        <canvas ref={migRadarChartRef}></canvas>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-2xl font-bold text-[#22A699]">MIG: Hardware-Level Isolation</h4>
                                        <p className="text-gray-600">Carves a physical GPU into up to seven smaller, fully independent hardware partitions. It&#39;s the gold standard for secure, multi-tenant production environments.</p>
                                        <div>
                                            <h5 className="font-semibold text-green-600">✔ Pros</h5>
                                            <ul className="list-disc list-inside mt-2 text-gray-500">
                                                <li>Predictable performance & guaranteed QoS</li>
                                                <li>True hardware fault & memory isolation</li>
                                                <li>Ideal for production inference SLAs</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-red-500">✖ Cons</h5>
                                            <ul className="list-disc list-inside mt-2 text-gray-500">
                                                <li>Requires specific, newer hardware (Ampere+)</li>
                                                <li>Less flexible, fixed partition sizes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'ts' && (
                            <div id="ts-content" className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                    <div className="radar-chart-container">
                                        <canvas ref={tsRadarChartRef}></canvas>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-2xl font-bold text-[#F2BE22]">Time-Slicing: Software-Level Sharing</h4>
                                        <p className="text-gray-600">Allows multiple containers to share a single GPU by taking turns in rapid succession. Maximizes user density and flexibility for development and experimentation.</p>
                                        <div>
                                            <h5 className="font-semibold text-green-600">✔ Pros</h5>
                                            <ul className="list-disc list-inside mt-2 text-gray-500">
                                                <li>High flexibility and user density</li>
                                                <li>Supported on a wider range of GPUs</li>
                                                <li>Excellent for bursty, non-critical tasks</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-red-500">✖ Cons</h5>
                                            <ul className="list-disc list-inside mt-2 text-gray-500">
                                                <li>No performance guarantees (&#34;noisy neighbor&#34;)</li>
                                                <li>No memory or fault isolation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section id="blueprint" className="scroll-mt-20">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#222222]">Architectural Blueprint</h3>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">The AI Factory is a layered system of interoperable components, built on Kubernetes and designed to serve the entire MLOps lifecycle.</p>
                    </div>

                    <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex flex-col space-y-4">
                            <div className="text-center font-bold p-4 bg-gray-200 text-gray-700 rounded-lg">Infrastructure Layer</div>
                            <div className="self-center text-2xl">▲</div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                                <div className="p-4 bg-[#ECF8F9] rounded-lg border border-[#A6E3E9]">
                                    <h5 className="font-bold text-[#3d84a8]">Data & Feature Layer</h5>
                                    <p className="text-sm text-gray-600">Feast Feature Store</p>
                                </div>
                                <div className="p-4 bg-[#ECF8F9] rounded-lg border border-[#A6E3E9]">
                                    <h5 className="font-bold text-[#3d84a8]">MLOps Core Services</h5>
                                    <p className="text-sm text-gray-600">Experiment Tracking</p>
                                </div>
                                <div className="p-4 bg-[#ECF8F9] rounded-lg border border-[#A6E3E9]">
                                    <h5 className="font-bold text-[#3d84a8]">Serving Layer</h5>
                                    <p className="text-sm text-gray-600">KServe / Triton</p>
                                </div>
                                <div className="p-4 bg-[#ECF8F9] rounded-lg border border-[#A6E3E9]">
                                    <h5 className="font-bold text-[#3d84a8]">Monitoring</h5>
                                    <p className="text-sm text-gray-600">Prometheus, Grafana</p>
                                </div>
                            </div>
                            <div className="self-center text-2xl">▲</div>
                            <div className="text-center font-bold p-4 bg-[#22A699] text-white rounded-lg">Access & Orchestration (Flyte)</div>
                            <div className="self-center text-2xl">▲</div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div className="p-3 bg-yellow-100 rounded-lg"><p>👩‍💻 Data Scientist</p></div>
                                <div className="p-3 bg-yellow-100 rounded-lg"><p>🛠️ ML Engineer</p></div>
                                <div className="p-3 bg-yellow-100 rounded-lg"><p>📱 App Developer</p></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="workflow" className="scroll-mt-20">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#222222]">The Developer Workflow</h3>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">The platform provides a streamlined, automated path from idea to production, abstracting away infrastructure complexity.</p>
                    </div>

                    <div className="mt-12 relative">
                        <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-gray-200 hidden md:block" aria-hidden="true"></div>
                        <div className="space-y-12 md:space-y-0">
                            <div className="md:grid md:grid-cols-2 md:gap-x-12">
                                <div className="md:text-right"></div>
                                <div><div className="h-12 md:hidden"></div></div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center">
                                <div className="md:text-right md:pr-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                        <p className="font-bold text-lg text-[#22A699]">1. Define Features</p>
                                        <p className="text-sm text-gray-500 mt-1">Commit feature logic to the central Feast Git repository, making it discoverable, reusable, and version-controlled.</p>
                                    </div>
                                </div>
                                <div className="relative hidden md:block">
                                    <div className="absolute -left-4 h-8 w-8 rounded-full bg-[#22A699] border-4 border-[#FDFBF8] flex items-center justify-center text-white font-bold">1</div>
                                </div>
                                <div className="h-8 w-px bg-gray-200 mx-auto md:hidden"></div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center">
                                <div className="relative hidden md:block">
                                    <div className="absolute -left-4 h-8 w-8 rounded-full bg-[#22A699] border-4 border-[#FDFBF8] flex items-center justify-center text-white font-bold">2</div>
                                </div>
                                <div className="md:pl-8">
                                   <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                       <p className="font-bold text-lg text-[#22A699]">2. Create Pipeline</p>
                                       <p className="text-sm text-gray-500 mt-1">Author a training workflow in pure Python using the elegant and intuitive Flyte SDK, abstracting away Kubernetes complexity.</p>
                                   </div>
                                </div>
                                <div className="h-8 w-px bg-gray-200 mx-auto md:hidden"></div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center">
                                <div className="md:text-right md:pr-8">
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                        <p className="font-bold text-lg text-[#F24C3D]">3. Train on GPU</p>
                                        <p className="text-sm text-gray-500 mt-1">Declaratively request a GPU time-slice with a single line of code. The platform handles scheduling automatically.</p>
                                    </div>
                                </div>
                                <div className="relative hidden md:block">
                                    <div className="absolute -left-4 h-8 w-8 rounded-full bg-[#F24C3D] border-4 border-[#FDFBF8] flex items-center justify-center text-white font-bold">3</div>
                                </div>
                                <div className="h-8 w-px bg-gray-200 mx-auto md:hidden"></div>
                            </div>

                            <div className="md:grid md:grid-cols-2 md:gap-x-12 items-center">
                                <div className="relative hidden md:block">
                                    <div className="absolute -left-4 h-8 w-8 rounded-full bg-[#222222] border-4 border-[#FDFBF8] flex items-center justify-center text-white font-bold">4</div>
                                </div>
                                <div className="md:pl-8">
                                   <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                                       <p className="font-bold text-lg text-[#222222]">4. Deploy Model</p>
                                       <p className="text-sm text-gray-500 mt-1">The pipeline automatically versions the trained model in a registry and deploys it to a scalable inference service.</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="payoff" className="scroll-mt-20">
                    <div className="text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#222222]">The Payoff: Operational Excellence</h3>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">A well-architected platform provides deep visibility into resource usage and costs, enabling data-driven governance and FinOps.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h4 className="text-xl font-bold text-center mb-4 text-[#22A699]">Real-Time GPU Utilization</h4>
                            <p className="text-sm text-center text-gray-500 mb-6">Track GPU usage across nodes to identify bottlenecks and ensure efficiency.</p>
                            <div className="chart-container h-64">
                                <canvas ref={utilizationChartRef}></canvas>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h4 className="text-xl font-bold text-center mb-4 text-[#F2BE22]">Cost Attribution Per Team</h4>
                            <p className="text-sm text-center text-gray-500 mb-6">Assign costs back to the teams consuming resources, fostering accountability.</p>
                             <div className="chart-container h-64">
                                <canvas ref={costChartRef}></canvas>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <footer className="bg-gray-800 text-white mt-24 md:mt-32">
            <div className="container mx-auto p-8 text-center">
                <p>An Interactive Distillation of Enterprise AI Strategy</p>
            </div>
        </footer>
      </div>

      {/* For this component to look right, ensure your project's global styles
          (e.g., in globals.css) include a light background color on the body
          and set the font to Inter.
      */}
      <style jsx global>{`
        body {
            font-family: 'Inter', sans-serif;
            background-color: #FDFBF8;
            color: #434242;
        }
        html {
            scroll-behavior: smooth;
        }
        .chart-container {
            position: relative;
            margin: auto;
            height: 30vh;
            width: 100%;
            max-width: 450px;
            max-height: 350px;
        }
        .radar-chart-container {
            position: relative;
            margin: auto;
            height: 40vh;
            width: 100%;
            max-width: 500px;
            max-height: 400px;
        }
        .nav-link {
            transition: color 0.3s;
        }
        .nav-link:hover {
            color: #22A699;
        }
        .active-tab {
            background-color: #22A699 !important;
            color: #FFFFFF !important;
            border-color: #22A699 !important;
        }
      `}</style>
    </>
  );
};

export default AIFactoryReportPage;
