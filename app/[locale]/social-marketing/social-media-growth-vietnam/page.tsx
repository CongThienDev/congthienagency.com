import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/social-marketing/social-media-growth-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
