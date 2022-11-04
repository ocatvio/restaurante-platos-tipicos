import { Dashboard } from "./admin/page/Dashboard";
import { AuthProvider } from "./auth";
import { RestProvider } from "./restaurant/context/RestProvider";
import { AppRouter } from "./router/AppRouter";



export const RestaurantApp = () => {
  return (
    <AuthProvider>
      <RestProvider>

    
     <AppRouter />
    {/* <Dashboard/> */}
        
      </RestProvider>
    </AuthProvider>
  );
};
