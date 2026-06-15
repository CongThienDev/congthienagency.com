import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/naver-koc");

export const generateMetadata = route.generateMetadata;
export default route.Page;
