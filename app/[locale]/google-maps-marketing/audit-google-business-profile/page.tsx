import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/audit-google-business-profile");

export const generateMetadata = route.generateMetadata;
export default route.Page;
