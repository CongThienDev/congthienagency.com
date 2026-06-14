import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/social-marketing/tang-truong-kenh");

export const generateMetadata = route.generateMetadata;
export default route.Page;
