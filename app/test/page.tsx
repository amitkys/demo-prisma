import { GetServerSessionHere } from "@/auth.config";

export default async function Page() {
  const session = await GetServerSessionHere();

  console.log(session);

  return null;
}
