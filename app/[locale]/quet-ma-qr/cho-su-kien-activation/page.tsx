import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/quet-ma-qr/cho-su-kien-activation");

export const generateMetadata = route.generateMetadata;
export default route.Page;
