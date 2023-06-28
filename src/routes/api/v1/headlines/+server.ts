import { json } from "@sveltejs/kit";
import headlineLib from "$lib/headlines";

export async function GET() {
    const headlines = await headlineLib.generate();
    
    return json({ status: 'ok', data: headlines });
}
