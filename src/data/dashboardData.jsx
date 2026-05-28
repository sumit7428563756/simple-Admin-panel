import {
    FaUsers,
    FaShoppingCart,
    FaDollarSign,
    FaChartLine
} from "react-icons/fa";

export const dashboardStats = [
    {
        title: "Users",
        value: "1,250",
        icon: <FaUsers size={28} />
    },
    {
        title: "Orders",
        value: "850",
        icon: <FaShoppingCart size={28} />
    },
    {
        title: "Revenue",
        value: "$12,500",
        icon: <FaDollarSign size={28} />
    },
    {
        title: "Growth",
        value: "22%",
        icon: <FaChartLine size={28} />
    }
];