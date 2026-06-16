import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/quet-ma-zalo-thu-lead");

export const generateMetadata = route.generateMetadata;
export default route.Page;
