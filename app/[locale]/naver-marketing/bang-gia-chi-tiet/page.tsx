import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/bang-gia-chi-tiet");

export const generateMetadata = route.generateMetadata;
export default route.Page;
