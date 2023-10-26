import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import LoginWithSocial from "../../components/common/LoginWithSocial";
import LoginForm from "../../components/common/LoginForm";
import { useState } from "react"; // Import the useState hook

const LogIn = () => {
  // Manage authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle authentication
  const handleAuthentication = () => {
    // Perform authentication logic here
    // Set isAuthenticated to true if authentication is successful
    setIsAuthenticated(true);
  };

  return (
    <>
      <Seo pageTitle="Login" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <LoginForm />
                {/* End .Login */}

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
                {/* End .row */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End login section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
      
      {isAuthenticated ? (
        // Render DynamicHome when authenticated
        <DynamicHome />
      ) : (
        // Display a message or redirect to the login page when not authenticated
        <div>
          <p>You are not authenticated. Please log in to access DynamicHome.</p>
          {/* You can also include a login button or a link to the login page */}
        </div>
      )}
    </>
  );
};

export default dynamic(() => Promise.resolve(LogIn), { ssr: false });
