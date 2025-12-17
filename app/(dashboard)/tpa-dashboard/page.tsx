import Header from "@/app/components/dashboard/header";
import TPADashboardInteractive from "@/app/components/dashboard/tpa-dashboard/TPADashBoardInteractive";

export default function TpaDashboard() {
    return (
        <>
            <Header userRole="tpa" userName="Admin User" notificationCount={3} />
            <TPADashboardInteractive />
        </>
    );
}