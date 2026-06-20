import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/google-maps-marketing/negative-review-management-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
