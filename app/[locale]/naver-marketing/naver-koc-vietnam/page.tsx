import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/naver-marketing/naver-koc-vietnam");

export const generateMetadata = route.generateMetadata;
export default route.Page;
