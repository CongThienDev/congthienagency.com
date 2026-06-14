import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/cho-khach-san");

export const generateMetadata = route.generateMetadata;
export default route.Page;
