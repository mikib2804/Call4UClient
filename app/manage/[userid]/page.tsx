export default async function Manage({
  params,
}: {
  params: Promise<{ userid: string }>;
}) {
  const paramsValue = await params;
  console.log(paramsValue.userid);

  return null;
}
