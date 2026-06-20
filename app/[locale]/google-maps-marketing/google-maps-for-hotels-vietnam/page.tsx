import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/google-maps-marketing/google-maps-for-hotels-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
