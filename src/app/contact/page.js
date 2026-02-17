"use client";
import React from 'react';
import ContactSection from '../../components/ContactSection';
import PageHeader from '../../components/PageHeader';

export default function ContactPage() {
    return (
        <div>
            <PageHeader
                title="Get in Touch"
                subtitle="Ready to start your biodiesel journey? We are here to help."
                curveColor="fill-slate-900"
            />
            <div className="-mt-10 relative z-20">
                <ContactSection />
            </div>
        </div>
    );
}
