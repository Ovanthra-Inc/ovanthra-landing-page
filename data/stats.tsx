import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "50K+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Automations powered daily by Ovanthra’s intelligent systems, helping businesses work smarter."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Average user rating across our platforms, trusted by teams and innovators worldwide."
    },
    {
        title: "100+",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Integrations with top platforms for seamless AI-driven collaboration and workflow automation."
    }
];