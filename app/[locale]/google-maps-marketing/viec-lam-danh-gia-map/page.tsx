import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/viec-lam-danh-gia-map");

export const generateMetadata = route.generateMetadata;
export default route.Page;
