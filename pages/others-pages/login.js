import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import LoginWithSocial from "../../components/common/LoginWithSocial";
import LoginForm from "../../components/common/LoginForm";
import { useState } from "react";

const LogIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    // Perform authentication logic here
    setIsAuthenticated(true);
  };

  return (
    <>
      <Seo pageTitle="Login" />
      <div className="header-margin"></div>
      <DefaultHeader />
      
      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <LoginForm />
                <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                    <div className="text-center">或使用以下方式登录</div>
                  </div>
                  <LoginWithSocial />
                  <div className="col-12">
                    <div className="text-center px-30">
                      透過建立帳戶，您同意我們的服務條款和隱私聲明.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActions />
      <DefaultFooter />
      
      {isAuthenticated ? (
        // Render content when authenticated
        <div>
          {/* Add content for authenticated users here */}
          <p>You are authenticated. Welcome to the authenticated section.</p>
        </div>
      ) : (
        // Render content for non-authenticated users
        <div>
          <p>You are not authenticated. Please log in to access the authenticated section.</p>
          {/* You can also include a login button or a link to the login page */}
        </div>
      )}
    </>
  );
};

export default LogIn;
