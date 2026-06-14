import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/social-marketing/xac-minh-fanpage");

export const generateMetadata = route.generateMetadata;
export default route.Page;
