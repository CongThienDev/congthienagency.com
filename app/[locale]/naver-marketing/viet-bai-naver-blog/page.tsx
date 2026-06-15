import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/viet-bai-naver-blog");

export const generateMetadata = route.generateMetadata;
export default route.Page;
