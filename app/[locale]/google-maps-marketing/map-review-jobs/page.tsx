import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/google-maps-marketing/map-review-jobs");

export const generateMetadata = route.generateMetadata;
export default route.Page;
