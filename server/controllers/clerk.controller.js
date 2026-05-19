import { verifyWebhook } from "@clerk/express/webhooks"
import { prisma } from "../configs/prisma.js"

const clerkWebhooks = async(request, response) => {
    try {
        const event = await verifyWebhook(request)
    const { data, type } = event

    if(type === "user.created"){
        await prisma.user.create({data: {
            id: data.id,
            email: data?.email_addresses[0].email_address,
            name: data?.first_name + " " + data?.last_name,
            image: data?.image_url
        }})
    }

    else if(type === "user.updated"){
        await prisma.user.update({
            where: {id: data.id},
            data: {
            email: data?.email_addresses[0].email_address,
            name: data?.first_name + " " + data?.last_name,
            image: data?.image_url
        }})
    }

    else if(type === "user.deleted"){
        await prisma.user.delete({where: { id: data.id }})
    }

    else if(type === "paymentAttempt.updated"){
        if(data.status==="paid" && (data.charge_type==="recurring" || data.charge_type==="checkout")){
            const credits = {pro: 80, premium: 240}
            const clerkUserId = data?.payer?.user_id
            const planId = data?.subscription_items?.[0]?.plan?.slug

            await prisma.user.update({
                where: { id: clerkUserId },
                data: { credits: {increment: credits[planId]} }
            })
        }
    }

    return response.json({message: "Webhooks Received: ", type})
    } catch (error) {
        response.status(500).json({message: "Internal Server Error"})
    }
}

export default clerkWebhooks