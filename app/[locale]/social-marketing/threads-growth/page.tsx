import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/social-marketing/threads-growth");

export const generateMetadata = route.generateMetadata;
export default route.Page;
