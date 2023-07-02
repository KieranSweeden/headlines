import { json } from "@sveltejs/kit";
import headlineLib from "$lib/headlines";

export async function GET() {
    const headlines = await headlineLib.get();
    
    return json({ status: 'ok', data: headlines });
}
