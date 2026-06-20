import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/google-maps-marketing/review-reputation-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
