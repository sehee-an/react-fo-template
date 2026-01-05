import { useState } from "react";
import Button from "~/components/ui/Button";
import Input from "~/components/ui/Input";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    console.log("Login attempt", {email, password});
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
}
