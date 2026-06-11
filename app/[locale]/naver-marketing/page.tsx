import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing");

export const generateMetadata = route.generateMetadata;
export default route.Page;
