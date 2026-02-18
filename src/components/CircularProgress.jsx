import React from "react";

const CircularProgress = ({ percentage = 75, size = 120, stroke = 10, color }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = (percentage / 100) * circumference;
  const dashOffset = circumference - progress;

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        {/* Progress Circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transition: "stroke-dashoffset 0.5s ease",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-gray-700 font-bold text-lg"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
