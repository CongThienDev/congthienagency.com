import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/quet-ma-qr");

export const generateMetadata = route.generateMetadata;
export default route.Page;
