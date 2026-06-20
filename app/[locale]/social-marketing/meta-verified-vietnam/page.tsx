import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/social-marketing/meta-verified-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
