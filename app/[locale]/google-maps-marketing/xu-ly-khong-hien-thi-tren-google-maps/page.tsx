import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/google-maps-marketing/xu-ly-khong-hien-thi-tren-google-maps");

export const generateMetadata = route.generateMetadata;
export default route.Page;
