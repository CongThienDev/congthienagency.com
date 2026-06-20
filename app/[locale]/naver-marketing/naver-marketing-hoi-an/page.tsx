import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/en/naver-marketing/naver-marketing-hoi-an");

export const generateMetadata = route.generateMetadata;
export default route.Page;
