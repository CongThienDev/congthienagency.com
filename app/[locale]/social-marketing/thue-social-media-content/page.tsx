import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/social-marketing/thue-social-media-content");

export const generateMetadata = route.generateMetadata;
export default route.Page;
