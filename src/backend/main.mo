import Text "mo:core/Text";

actor {
  public type BusinessInfo = {
    name : Text;
    tagline : Text;
    phone : Text;
    address : Text;
  };

  let businessInfo : BusinessInfo = {
    name = "MAA GAURI TRADING";
    tagline = "Your go-to trading partner";
    phone = "+91 12345 67890";
    address = "123 Business Street, Mumbai, Maharashtra, India";
  };

  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    businessInfo;
  };
};
