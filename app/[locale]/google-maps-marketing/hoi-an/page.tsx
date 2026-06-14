import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/hoi-an");

export const generateMetadata = route.generateMetadata;
export default route.Page;
