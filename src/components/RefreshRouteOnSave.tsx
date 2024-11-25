'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation.js'
import React from 'react'

const baseUrl = process.env.NODE_ENV === 'production'
    ? process.env.URL!
    : 'http://localhost:3000';

export const RefreshRouteOnSave: React.FC = () => {
    const router = useRouter()

    return (
        <PayloadLivePreview
            refresh={() => router.refresh()}
            serverURL={baseUrl}
        />
    )
}