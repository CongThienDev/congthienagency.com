import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/thiet-ke-website");

export const generateMetadata = route.generateMetadata;
export default route.Page;
