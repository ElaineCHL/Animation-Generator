const AboutPage = () => {
  return (
    <div>
      <section className="min-h-screen bg-white text-gray-800 px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">About This Project</h1>

          <p className="text-lg mb-6 leading-relaxed">
            This is the demo site for my Final Year Project (FYP), titled <b>"The Development of LLM Tools for Generating Educational Animations in Mathematics</b>", which is done
            in partial fulfilment of the requirements for the degree of Bachelor of Computer Science (Honours) at UTAR.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            This project explores how artificial intelligence and animation can be combined to make math education more engaging and accessible.
          </p>

          <p className="text-lg mb-6 leading-relaxed">
            The system enables users to generate animated educational videos from simple text prompts like
            <span className="italic"> “Explain the Fibonacci sequence.”</span> These animations aim to help students visualize and better understand complex mathematical concepts.
          </p>

          <div className="bg-gray-100 rounded-xl p-6 mb-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              <li><span className="font-medium">AI-Powered Content Generation:</span> Automatically breaks down prompts into animation steps using a Large Language Model (LLM).</li>
              <li><span className="font-medium">Custom Animation Engine:</span> Built with TypeScript and HTML Canvas, supporting basic shapes, movements, scaling, and fading.</li>
              <li><span className="font-medium">Manim-Inspired Visuals:</span> Styled similarly to 3Blue1Brown videos for clarity and visual appeal.</li>
              <li><span className="font-medium">Voice-Over Support:</span> Uses text-to-speech to narrate explanations alongside the animations.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            This tool is built to support secondary school math education by making abstract topics easier to visualize and understand.
          </p>

          <p className="text-lg leading-relaxed mt-6">
            Thank you for exploring my project!
          </p>
          <br />
          <a
            href="https://fict.utar.edu.my/Final-Year-Project.php"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Learn more about UTAR FICT FYP
          </a>
        </div>
      </section>

    </div>
  )
}

export default AboutPage
