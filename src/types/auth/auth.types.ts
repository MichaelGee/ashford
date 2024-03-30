interface RegisterType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pin: string;
  confirmPin: string;
}

interface LoginType {
  email: string;
  pin: string;
}

interface GuestLoginType {
  email: string;
}
interface forgotPinType {
  email: string;
}
interface forgotPinType {
  email: string;
}
interface resetPinType {
  pin: string;
  confirmPin: string;
}

interface RefreshTokenType {
  refreshToken: string;
}

export { RegisterType, LoginType, GuestLoginType, RefreshTokenType, forgotPinType, resetPinType };
