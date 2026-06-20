import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/google-maps-marketing/google-business-profile-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
