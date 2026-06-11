import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/booking-blogger-han");

export const generateMetadata = route.generateMetadata;
export default route.Page;
