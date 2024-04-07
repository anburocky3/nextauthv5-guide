import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingPage = async () => {
  const session = await auth();
  return (
    <div className="space-y-4 p-10 bg-gray-50 rounded">
      <div>SettingPage</div>
      <pre>{JSON.stringify(session)}</pre>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign Out</Button>
      </form>
    </div>
  );
};

export default SettingPage;
