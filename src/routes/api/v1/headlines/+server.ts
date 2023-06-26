import { json } from "@sveltejs/kit";
import Guardian from "guardian-js";
import { GUARDIAN_OP_KEY } from "$env/static/private";

const guardianClient = new Guardian(GUARDIAN_OP_KEY, true);

export async function POST({ request }) {

    const res = await guardianClient.content.search("football", {
        starRating: 5
    });

    

    return json({ success: true, data: res });
}