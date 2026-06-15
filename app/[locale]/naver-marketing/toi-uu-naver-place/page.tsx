import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/toi-uu-naver-place");

export const generateMetadata = route.generateMetadata;
export default route.Page;
