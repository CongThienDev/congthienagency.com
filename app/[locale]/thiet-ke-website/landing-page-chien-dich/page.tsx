import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/thiet-ke-website/landing-page-chien-dich");

export const generateMetadata = route.generateMetadata;
export default route.Page;
