import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/naver-blog-tieng-anh");

export const generateMetadata = route.generateMetadata;
export default route.Page;
