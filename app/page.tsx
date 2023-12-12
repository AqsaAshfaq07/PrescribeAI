import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center" style={{ backgroundImage: 'url(background3.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container mx-auto p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <header className="text-center mb-6">
            <h1 className="text-3xl text-blue-600 font-bold">AI-Based Medical Prescription System</h1>
        </header>
        <div className="flex justify-center items-center">
            <input type="text" id="prescription-input" placeholder="Enter your symptoms or query here" className="form-input px-4 py-3 w-1/2 border rounded-l-lg focus:outline-none focus:shadow-outline" />
            <button id="microphone-btn" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-r-lg">
                <img src="microphoneicon.png" alt="Microphone" className="w-6 h-6" />
            </button>
        </div>
    </div>
</div>

    </main>
  )
}
