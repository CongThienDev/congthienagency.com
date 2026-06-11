import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing");

export const generateMetadata = route.generateMetadata;
export default route.Page;
