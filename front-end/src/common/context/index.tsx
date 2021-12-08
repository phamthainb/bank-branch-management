import { ReactNode } from "react";
import AuthProvider from "./AuthContext";
import GLProvider from "./GlobalLoadingContext";
import NavigatorProvider from "./NavigatorContext";
import CustomThemeProvider from "./ThemeContext";
import ToggleSidebarProvider from "./ToggleSidebarContext";
import ReactsProvider from "./ReactContext";
import SidebarStaffProvider from "./SidebarStaffContext";
import SidebarCustomerProvider from "./SidebarCustomerContext";
import SidebarAdminProvider from "./SidebarAdminContext";
import RoleProvider from "./RoleContext";

export default function MyProvider({ children }: { children: ReactNode }) {
  return (
    <CustomThemeProvider>
      <GLProvider>
        <AuthProvider>
          <RoleProvider>
            <NavigatorProvider>
              <SidebarAdminProvider>
                <SidebarStaffProvider>
                  <SidebarCustomerProvider>
                    <ToggleSidebarProvider>
                      <ReactsProvider>
                        {children}
                      </ReactsProvider>
                    </ToggleSidebarProvider>
                  </SidebarCustomerProvider>
                </SidebarStaffProvider>
              </SidebarAdminProvider>
            </NavigatorProvider>
          </RoleProvider>
        </AuthProvider>
      </GLProvider>
    </CustomThemeProvider>
  );
}
