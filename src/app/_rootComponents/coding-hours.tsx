'use client'
import { ClockIcon } from 'lucide-react'
import { api } from "~/trpc/react"

const CodingHours = () => {
    const { isSuccess, isLoading, isError, data } = api.external.getWakatimeStats.useQuery()

    return (
        <div className='flex flex-col gap-6 rounded-xl p-4 shadow-feature-card lg:p-6'>
            <div className='flex items-center gap-2'>
                <ClockIcon className='size-[18px]' />
                <h2 className='text-sm'>Coding Hours</h2>
            </div>
            <div className='flex grow items-center justify-center text-4xl font-semibold'>
                {isSuccess && `${data.hours} hrs`}
                {isLoading && '--'}
                {isError && ""}
            </div>
        </div>
    )
}

export default CodingHours
