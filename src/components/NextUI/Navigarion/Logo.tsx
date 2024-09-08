'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Logo() {
    const [companyName, setCompanyName] = useState('Loading...')

    useEffect(() => {
        setCompanyName(process.env.NEXT_PUBLIC_COMPANY_NAME || 'Loading...')
    }, [])

    return (
        <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{companyName}</span>
            <Image
                title={companyName}
                width={100}
                height={100}
                alt={`${companyName} logo`}
                src="/logo.svg"
                className="h-14 w-auto"
            />
        </a>
    )
}