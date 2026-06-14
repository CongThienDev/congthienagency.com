import { serviceRoute } from "@/lib/serviceRoute";

const route = serviceRoute("/vi/social-marketing/khoi-phuc-tai-khoan-facebook");

export const generateMetadata = route.generateMetadata;
export default route.Page;
