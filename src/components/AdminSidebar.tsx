import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai"; 
import {
    FaChartBar,
    FaChartLine,
    FaChartPie,
    FaGamepad,
    FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
    RiCoupon3Fill,
    RiDashboardFill,
    RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation} from "react-router-dom";

const AdminSidebar = () => {
    const location = useLocation();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
        window.innerWidth < 1100
    );
    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    },
[]);

return (
    <>
    {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
            <HiMenuAlt4 />
        </button>
    )}

    <aside
    style={
        phoneActive
        ? {
            width: "20rem",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: showModal ? "0" : "-20rem",
            transition: "all 0.5s",
        }
        : {}
    }
    >
        <h2>Logo.</h2>
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />

        {phoneActive && (
            <button id="close-sidebar" onClick={() => setShowModal(false)}>
                Close
            </button>
        )}
    </aside>
    </>
);
};

const DivOne = ({location}:{ location: Location }) => (
    <div>
        <h5>Dashboard</h5>
        <ul>
            <Li
            url="/admin/dashboard"
            text="Dasboard"
            Icon={RiDashboardFill}
            location={location}
            />
            <Li
            url="/admin/product"
            text="product"
            Icon={RiShoppingBag3Fill}
            location={location}
            />
            <Li
            url="/admin/customer"
            text="Customer"
            Icon={IoIosPeople}
            location={location}
            />
            <Li
            url="/admin/transcation"
            text="Transaction"
            Icon={}AiFillFileText
            location={location}
            />
        </ul>
    </div>
);

const DivTwo = ({location}:{ location: Location}) => (
    <div>
        <h5>Charts</h5>
    </div>
)