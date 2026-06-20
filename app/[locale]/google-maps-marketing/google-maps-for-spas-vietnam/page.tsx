import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/google-maps-marketing/google-maps-for-spas-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
