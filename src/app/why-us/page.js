"use client";
import React from 'react';
import WhyUs from '../../components/WhyUs';
import PageHeader from '../../components/PageHeader';

export default function WhyUsPage() {
    return (
        <div>
            <PageHeader
                title="Why Choose Us"
                subtitle="Proven technology, unmatched support, and guaranteed results."
                curveColor="fill-slate-900"
            />
            <div className="-mt-10 relative z-20">
                <WhyUs />
            </div>
        </div>
    );
}
