import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/cho-nha-hang");

export const generateMetadata = route.generateMetadata;
export default route.Page;
