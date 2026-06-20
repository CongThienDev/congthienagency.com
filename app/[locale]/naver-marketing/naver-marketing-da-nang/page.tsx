import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/naver-marketing/naver-marketing-da-nang");

export const generateMetadata = route.generateMetadata;
export default route.Page;
