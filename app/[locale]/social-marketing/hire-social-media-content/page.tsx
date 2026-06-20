import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/social-marketing/hire-social-media-content");

export const generateMetadata = route.generateMetadata;
export default route.Page;
