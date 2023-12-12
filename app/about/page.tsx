import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return(
        <main className="bg-gray-100">

                <div className="container mx-auto p-6 pb-80">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <Image src="/about.png" alt="Medical Image" width={332} height={221} className="w-full h-auto rounded-lg shadow-lg" />
                        </div>

                        <div className="md:w-1/2 text-left p-4">
                            <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
                            <p className="mb-4 text-lg text-gray-700">
    Welcome to our Medical Prescription Website, a hub for accurate and up-to-date information on medical prescriptions. Our team, comprising healthcare professionals and technology experts, is committed to enhancing patient care by bridging the gap between medicine and digital innovation.

Our platform delves into a comprehensive range of medications, detailing their uses, side effects, and prescription best practices. We prioritize empowering patients and healthcare providers with accessible, easy-to-understand information, ensuring informed decisions in medication management.

We're more than just an informational resource; we're a community fostering collaboration and knowledge-sharing. Our commitment extends to digitalizing medical prescriptions, streamlining processes for healthcare providers and patients alike, and paving the way for a more integrated healthcare system."
</p>
                            <p className="text-lg text-gray-700">
                                Our platform offers insights into various medications, their uses, side effects, and best practices for prescriptions. We believe in empowering patients and healthcare providers with reliable and accessible information.
                            </p>
                        </div>
                    </div>
                </div>
        </main>
    )
}