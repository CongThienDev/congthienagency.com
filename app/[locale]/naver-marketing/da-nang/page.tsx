import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/da-nang");

export const generateMetadata = route.generateMetadata;
export default route.Page;
