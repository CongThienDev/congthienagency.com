import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/naver-map-optimization-restaurants-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
