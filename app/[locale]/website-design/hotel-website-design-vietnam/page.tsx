import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/website-design/hotel-website-design-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
