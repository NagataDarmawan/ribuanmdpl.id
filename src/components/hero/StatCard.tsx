"use client";

import React from "react";
import { HeroStat } from "@/data/heroData";
import { useCounter } from "@/hooks/useCounter";
import { formatNumber } from "@/utils/formatters";

interface StatCardProps {
  stat: HeroStat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const count = useCounter(stat.value);

  return (
    <div className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-[#121715]/60 border border-[#232d28] backdrop-blur-md">
      <span className="text-2xl sm:text-3xl font-extrabold text-[#00ff87]">
        {formatNumber(count)}{stat.suffix}
      </span>
      <span className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
        {stat.label}
      </span>
    </div>
  );
};