import { NextResponse } from "next/server";
import getToken from "./services/getToken";

export const middleware = async (context) => {
  // try {
  //   const token = getToken();
  //   if (token) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect("/login");
  //   }
  // } catch (error) {
  //   console.error("Error in middleware:", error);
  //   return NextResponse.error(new Error("Internal Server Error"));
  // }
};

export const config = {
  matcher: ["/home/:path*", "/updateprofile/:path*"],
};
