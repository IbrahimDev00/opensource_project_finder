import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-6 md:p-10">
      {/* Text Section */}
      <div className="w-full max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-heading font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Find your perfect 
          <span className="text-red-500"> Open-Source</span> match
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Discover repositories, contribute to meaningful projects, and make an
          impact in the open-source community.
        </p>
      </div>

      {/* Login Form Section */}
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
