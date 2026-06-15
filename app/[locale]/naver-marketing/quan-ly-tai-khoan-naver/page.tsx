import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/naver-marketing/quan-ly-tai-khoan-naver");

export const generateMetadata = route.generateMetadata;
export default route.Page;
