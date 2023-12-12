import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return(
        <main>
    <main className="bg-gray-100">
    <section className="container mx-auto p-6">
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:w-3/4 p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-blue-600 mb-3">Latest Insights in Medical Prescriptions</h2>
                <h5 className="text-gray-500 mb-4">Aug 1, 2023</h5>
                <img src="post-img.png" className="w-full h-1/3 mb-4" alt="Medical Prescription Insights" />
                <p className="mb-4">Explore the latest trends, advancements, and insights in medical prescriptions. Our articles provide in-depth analysis and expert opinions on the most effective prescription practices and emerging medical technologies.</p>
                <p className="mb-4">Stay informed with our comprehensive guides on various prescription drugs, their appropriate usage, and potential side effects. Our aim is to educate and empower patients and healthcare professionals alike in the realm of prescription medicine.</p>
                <p className="mb-4">Join us in our commitment to enhancing healthcare through better understanding and use of medical prescriptions.</p>

                <div className="mt-6">
                    <h3 className="font-semibold mb-2">Leave a Comment</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Enter Name" className="w-full p-2 border border-gray-300 rounded" required />
                        <input type="email" placeholder="Enter Email" className="w-full p-2 border border-gray-300 rounded" required />
                        <textarea rows= {5} placeholder="Your Comment" className="w-full p-2 border border-gray-300 rounded"></textarea>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Post Comment</button>
                    </form>
                </div>
            </div>

            <div className="md:w-1/4 p-4">
                <h3 className="font-semibold mb-3">Post Categories</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>Pharmacology</span>
                        <span className="text-gray-500">12</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Healthcare Technology</span>
                        <span className="text-gray-500">29</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Clinical Research</span>
                        <span className="text-gray-500">15</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Prescription Safety</span>
                        <span className="text-gray-500">22</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Drug Development</span>
                        <span className="text-gray-500">20</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="bg-white p-6 mt-6">
        <hr className="mb-4"/>
        <h4 className="text-xl mb-2">About Us</h4>
        <p className="mb-4">Dedicated to enhancing healthcare through innovation and knowledge. Join us on our mission to improve medical prescriptions and patient care.</p>
        <p className="mb-4">Copyright © 2023 <a href="/" className="text-blue-600 hover:text-blue-800">Learn Hub</a>. All Rights Reserved</p>
        <div className="flex space-x-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
        </div>
    </section>
</main>

        </main>
    )
}