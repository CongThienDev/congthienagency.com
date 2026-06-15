import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/quan-ly-review-tieu-cuc");

export const generateMetadata = route.generateMetadata;
export default route.Page;
