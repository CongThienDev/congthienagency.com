import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/social-marketing");

export const generateMetadata = route.generateMetadata;
export default route.Page;
