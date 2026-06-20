import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/website-design/website-booking-system-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
