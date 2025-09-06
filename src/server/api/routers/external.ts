import { createTRPCRouter, publicProcedure } from "../trpc";
import { env } from "~/env";


export const externalRouter = createTRPCRouter({
    getWakatimeStats: publicProcedure.query(async () => {
        if (!env.WAKATIME_API_KEY) {
            return {
                hours: 0
            }
        }

        const response = await fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', {
            headers: {
                Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString('base64')}`
            }
        })

        const {
            data: { total_seconds }
        } = await response.json() as { data: { total_seconds: number } }

        return {
            hours: Math.round(total_seconds / 60 / 60)
        }
    })
})