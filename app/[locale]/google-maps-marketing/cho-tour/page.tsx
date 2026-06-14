import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/cho-tour");

export const generateMetadata = route.generateMetadata;
export default route.Page;
