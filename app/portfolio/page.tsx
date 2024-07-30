'use client'

import { Suspense } from 'react';
import { Portfolio } from './Portfolio'

export default function PortfolioPage() {
    const Loading = <div>Loading...</div>

    return (
        <Suspense fallback={Loading}>
            <Portfolio />
        </Suspense>
    )
}