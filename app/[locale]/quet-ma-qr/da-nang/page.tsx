import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/quet-ma-qr/da-nang");

export const generateMetadata = route.generateMetadata;
export default route.Page;
