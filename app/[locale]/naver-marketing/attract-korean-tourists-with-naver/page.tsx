import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/attract-korean-tourists-with-naver");

export const generateMetadata = route.generateMetadata;
export default route.Page;
