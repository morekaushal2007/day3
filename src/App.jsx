import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const counterMessage =
    count > 0
      ? count === 1
        ? `You've increased the counter ${count} time.`
        : `You've increased the counter ${count} times.`
      : count < 0
        ? "The counter is below zero."
        : "Start interacting with the counter.";

  const features = [
    {
      icon: "⚡",
      title: "Fast Development",
      description:
        "Build modern React applications quickly with Vite and a smooth development workflow.",
    },
    {
      icon: "🎨",
      title: "Beautiful UI",
      description:
        "Create clean, responsive and interactive interfaces using modern CSS techniques.",
    },
    {
      icon: "⚛️",
      title: "React Powered",
      description:
        "Use reusable components and React state to create dynamic user experiences.",
    },
    {
      icon: "🚀",
      title: "Production Ready",
      description:
        "Turn your ideas into scalable applications that are ready to deploy.",
    },
  ];

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-logo">⚛</div>
          <span>ReactLab</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#counter">Counter</a>
          <a href="#connect">Connect</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* HERO */}
      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="badge">
              <span className="pulse"></span>
              React + Vite
            </div>

            <h1>
              Build Something
              <span> Amazing.</span>
            </h1>

            <p>
              A modern interactive React starter page built with components,
              state, animations and responsive CSS.
            </p>

            <div className="hero-buttons">
              <a href="#features" className="primary-btn">
                Explore Features →
              </a>

              <button
                className="secondary-btn"
                onClick={() =>
                  showMessage("🚀 Welcome to your React application!")
                }
              >
                Say Hello
              </button>
            </div>

            <div className="stats">
              <div>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Features</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Possibilities</span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="react-orb">
              <div className="react-symbol">⚛</div>
            </div>

            <div className="floating-card card-one">
              <span>⚡</span>
              <div>
                <strong>Fast</strong>
                <small>Development</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>🎨</span>
              <div>
                <strong>Modern</strong>
                <small>Design</small>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <div className="section-heading">
            <span>WHAT YOU GET</span>
            <h2>Everything you need to start</h2>
            <p>
              Explore the features below and click a card to interact with it.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={
                  activeCard === index ? "feature-card active" : "feature-card"
                }
                onClick={() => setActiveCard(index)}
              >
                <div className="feature-icon">{feature.icon}</div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveCard(index);
                    showMessage(feature.title + " selected!");
                  }}
                >
                  {activeCard === index ? "Selected ✓" : "Learn More →"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* COUNTER */}
        <section id="counter" className="counter-section">
          <div className="counter-box">
            <span className="section-label">INTERACTIVE STATE</span>

            <h2>React Counter</h2>

            <p>
              This value is controlled using React's <code>useState()</code>.
            </p>

            <div className="counter-number">{count}</div>

            <div className="counter-controls">
              <button
                onClick={() => setCount(count - 1)}
                className="counter-btn"
              >
                −
              </button>

              <button
                onClick={() => setCount(0)}
                className="reset-btn"
              >
                Reset
              </button>

              <button
                onClick={() => setCount(count + 1)}
                className="counter-btn"
              >
                +
              </button>
            </div>

            <p className="counter-message">{counterMessage}</p>
          </div>
        </section>

        {/* CONNECT */}
        <section id="connect" className="section connect-section">
          <div className="section-heading">
            <span>CONNECT</span>
            <h2>Explore the ecosystem</h2>
            <p>
              Learn more about the tools used to build this application.
            </p>
          </div>

          <div className="links-grid">
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>⚛️</span>

              <div>
                <h3>React</h3>
                <p>Learn React</p>
              </div>

              <strong>↗</strong>
            </a>

            <a
              href="https://vite.dev/"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>⚡</span>

              <div>
                <h3>Vite</h3>
                <p>Explore Vite</p>
              </div>

              <strong>↗</strong>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>🐙</span>

              <div>
                <h3>GitHub</h3>
                <p>Explore repositories</p>
              </div>

              <strong>↗</strong>
            </a>

            <a
              href="https://developer.mozilla.org/"
              target="_blank"
              rel="noreferrer"
              className="link-card"
            >
              <span>📚</span>

              <div>
                <h3>MDN</h3>
                <p>Web documentation</p>
              </div>

              <strong>↗</strong>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <span>⚛</span>
          ReactLab
        </div>

        <p>Built with React + Vite</p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Back to top ↑
        </button>
      </footer>

      {/* TOAST */}
      {message && <div className="toast">{message}</div>}
    </div>
  );
}

export default App;

