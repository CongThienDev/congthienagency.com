import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/thiet-ke-website/website-cafe-bar-hoi-an");

export const generateMetadata = route.generateMetadata;
export default route.Page;
