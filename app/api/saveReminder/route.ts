export async function POST(req: Request) {
  try {
    const body = await req.json();
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
