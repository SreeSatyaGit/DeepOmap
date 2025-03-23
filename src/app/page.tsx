import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <header className="w-full bg-[#001f3f] bg-opacity-80 text-white p-6 fixed top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/logo/logoDeepOmap.png" alt="DeepOMAP Logo" width={50} height={50} />
            <h1 className="text-2xl font-bold">DeepOMAP</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#team" className="hover:underline">Team</a></li>
              <li><a href="#tool" className="hover:underline">AI Tool</a></li>
              <li><a href="#research" className="hover:underline">Research</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with limited-height background video */}
      <section className="relative h-[75vh] overflow-hidden pt-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/videos/BGV.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#fffaf0] drop-shadow-lg">
            Revolutionizing Cancer Care with AI
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-lg">
            Our AI-powered diagnostic tool assists oncologists in early detection and personalized treatment planning.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="bg-[#50C878] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#45b76a] transition">
              Request a Demo
            </a>
            <a href="#about" className="border border-[#50C878] text-[#50C878] px-8 py-4 rounded-full font-semibold hover:bg-[#50C878] hover:text-white transition">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <main className="relative z-10">
        {/* About Section */}
        <section id="about" className="py-20 bg-[#fffaf0]">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">About DeepOMAP</h3>
              <p className="text-gray-700">
                DeepOMAP leverages advanced AI to revolutionize oncology diagnostics—delivering earlier detection and tailored treatment insights to improve patient outcomes.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/about.jpg" alt="About DeepOMAP" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {['Jane Doe','John Smith','Emily White'].map((name, idx) => (
                <div key={idx} className="text-center">
                  <Image src={`/images/team${idx+1}.jpg`} alt={name} width={240} height={240} className="rounded-full mx-auto" />
                  <h4 className="mt-4 font-semibold text-xl">{name}</h4>
                  <p className="text-gray-600">{idx === 0 ? 'Chief Medical Officer' : idx === 1 ? 'CTO & Lead Data Scientist' : 'Lead Engineer'}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tool Section */}
        <section id="tool" className="py-20 bg-[#f9fafb]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Our AI Tool</h3>
            <p className="mb-8 text-gray-700">
              DeepOMAP’s platform analyzes medical imaging to detect tumors, predict progression, and recommend personalized treatments—streamlining oncology workflows.
            </p>
            <Image src="/images/tool-dashboard.png" alt="AI Tool Dashboard" width={800} height={450} className="rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-8 text-center">Research & Validation</h3>
            <ul className="space-y-6">
              <li className="border-l-4 border-[#50C878] pl-4">
                <h4 className="font-semibold">Early Detection Study</h4>
                <p className="text-gray-600">Jan 2025 — 15% improvement in detection accuracy.</p>
              </li>
              <li className="border-l-4 border-[#50C878] pl-4">
                <h4 className="font-semibold">Clinical Workflow Integration</h4>
                <p className="text-gray-600">Nov 2024 — 30% faster diagnosis turnaround time.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[#fffaf0]">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
            <form className="grid grid-cols-1 gap-6">
              {['Name','Email','Organization','Message'].map((field, i) => (
                <input key={i} type={field==='Email'?'email':'text'} placeholder={field} className="p-4 border rounded-lg w-full" required />
              ))}
              <button type="submit" className="bg-[#50C878] text-white py-3 rounded-full font-semibold hover:bg-[#45b76a] transition">Submit</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 bg-opacity-80 text-gray-600 p-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} DeepOMAP. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#privacy" className="text-sm hover:underline">Privacy Policy</a>
              <a href="#terms" className="text-sm hover:underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
