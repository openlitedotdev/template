export default function AboutPage() {
  const stack = [
    { title: 'Next.js', description: 'File-based routing, React 18, Fast Refresh, Image Optimization, and more.' },
    { title: 'TailwindCSS', description: 'TailwindCSS can be extended or replaced with an alternative CSS solution.' },
    { title: 'Open UI', description: 'Open UI . A modern design system built with Shadcn UI and Tailwind CSS' },
    { title: 'Tank Stack Ecosystem', description: 'High-quality open-source software for web developers.' },
  ]

  const modules = [
    { title: 'Rest API', description: 'Built in Python and its popular FastAPI framework' },
    { title: 'Dashboard', description: 'Built in react and the Open UI library' },
    { title: 'Ui', description: 'Built on next with a modern, customizable interface and scalable architecture' },
  ]
  return (
    <div className="mx-auto max-w-7xl p-8 pb-16">
      <h1 className="text-5xl font-bold py-5">About</h1>
      <div className="prose">
        <div>
          <p>
            Starter pack for building performant e-commerce experiences with&nbsp;
            <a href="https://github.com/saleor/saleor">Saleor</a>
            .
          </p>
        </div>
        <h2 className="font-bold text-2xl py-3">Stack tech</h2>
        <ul>
          {stack.map((tech, i) => (
            <li key={i} className="py-2">
              <b className="text-primary font-semibold py-2">
                {tech.title}
              </b>
              <p>{tech.description}</p>
            </li>
          ))}
        </ul>
        <h2 className="font-bold text-2xl py-3">Modules</h2>
        <ul>
          {modules.map((module, i) => (
            <li key={i} className="py-2">
              <b className="text-primary font-semibold py-2">
                {module.title}
              </b>
              <p>{module.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
