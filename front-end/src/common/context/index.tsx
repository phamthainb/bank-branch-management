import { ReactNode } from "react";
import AuthProvider from "./AuthContext";
import GLProvider from "./GlobalLoadingContext";
import NavigatorProvider from "./NavigatorContext";
import CustomThemeProvider from "./ThemeContext";
import CallboxInfoProvider from "./CallboxInfoContext";
import ToggleSidebarProvider from "./ToggleSidebarContext";
import ReactsProvider from "./ReactContext";
import ReplyingProvider from "./ReplyingContext";

export default function MyProvider({ children }: { children: ReactNode }) {
  return (
    <CustomThemeProvider>
      <GLProvider>
        <AuthProvider>
          <NavigatorProvider>
            <ToggleSidebarProvider>
              <CallboxInfoProvider>
                <ReactsProvider>
                  <ReplyingProvider>{children}</ReplyingProvider>
                </ReactsProvider>
              </CallboxInfoProvider>
            </ToggleSidebarProvider>
          </NavigatorProvider>
        </AuthProvider>
      </GLProvider>
    </CustomThemeProvider>
  );
}
