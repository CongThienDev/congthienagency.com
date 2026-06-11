import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/review-reputation");

export const generateMetadata = route.generateMetadata;
export default route.Page;
