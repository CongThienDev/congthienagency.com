import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/quet-ma-qr/tuyen-cong-tac-vien");

export const generateMetadata = route.generateMetadata;
export default route.Page;
