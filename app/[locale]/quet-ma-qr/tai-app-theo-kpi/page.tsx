import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/quet-ma-qr/tai-app-theo-kpi");

export const generateMetadata = route.generateMetadata;
export default route.Page;
