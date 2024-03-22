import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

const Login = () => {
  return (
    <div>
      <div className="mb-space600">
        <h1 className="text-[1.5rem] text-primary font-bold">Welcome back</h1>
        <p className="text-[0.6rem] text-gray002">
          Login to your account to continue
        </p>
      </div>
      <form className="flex flex-col justify-between h-[70vh]">
        <div className="flex flex-col gap-space200">
          <Input placeholder="Email or Phone number" type="text" />
          <Input placeholder="6-digit pin" type="password" />
          <a className="text-[0.6rem]">Forgot pin?</a>
        </div>
        <div className="flex flex-col text-center gap-space100">
          <Button className="w-full">Login</Button>
          <Button className="w-full" variant="outline">
            Continue as Guest
          </Button>
          <span className="text-[0.6rem]">
            New user? <a>Sign up</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
