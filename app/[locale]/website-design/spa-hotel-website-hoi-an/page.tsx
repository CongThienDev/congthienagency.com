import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/website-design/spa-hotel-website-hoi-an");

export const generateMetadata = route.generateMetadata;
export default route.Page;
