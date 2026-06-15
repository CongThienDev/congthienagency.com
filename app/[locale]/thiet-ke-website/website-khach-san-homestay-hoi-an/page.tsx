import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/thiet-ke-website/website-khach-san-homestay-hoi-an");

export const generateMetadata = route.generateMetadata;
export default route.Page;
