export const runtime = "nodejs"; // safe default; remove if not needed

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    // TODO: process form submission here (email, DB, etc.)
    return Response.json(
      { ok: true, received: body },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({ ok: true, message: "apply route alive" }, { status: 200 });
}
