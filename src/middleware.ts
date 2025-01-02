import { NextRequest, NextResponse } from "next/server"
import { getMe } from "./services/AuthService"
import { IUser } from "./types"


const AuthRoutes = ["/login", "/register"];
type Role = keyof typeof roleBasedRoutes;
const roleBasedRoutes = {
    user: [/^\//, /^\/profile/],
    admin: [/^\/dashboard/],
  };

 
export async function middleware(request: NextRequest) {

    const user = await getMe() as IUser;
    if(!user){
        if(AuthRoutes.includes(request.nextUrl.pathname)){
            return NextResponse.next()
        }else{
            return NextResponse.redirect(
                new URL(`/login?redirect=${request.nextUrl.pathname}`, request.url),
              );
        }
    }

    if (user?.role && roleBasedRoutes[user?.role as keyof typeof roleBasedRoutes]) {
        const routes = roleBasedRoutes[user?.role as Role];
    
        if (routes.some((route) => request.nextUrl.pathname.match(route))) {
          return NextResponse.next();
        }
      }
    
      return NextResponse.redirect(new URL("/", request.url));
    }

   
  

  // See "Matching Paths" below to learn more
  export const config = {
    matcher: ["/profile", "/profile/:page*", "/dashboard","/dashboard/:page*" ,"/login", "/register","/"],
  }