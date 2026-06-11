import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/thiet-ke-website/cooking-class-hoi-an");

export const generateMetadata = route.generateMetadata;
export default route.Page;
