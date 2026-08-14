import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const floatingIcons = [
  { icon: "🐍", label: "Python",     top: "10%",  left: "10%", delay: "0s",   size: "2.5rem" },
  { icon: "🤖", label: "AI",         top: "20%",  left: "70%", delay: "0.5s", size: "2.8rem" },
  { icon: "🧠", label: "ML",         top: "60%",  left: "15%", delay: "1s",   size: "2.5rem" },
  { icon: "👁️", label: "OpenCV",     top: "40%",  left: "85%", delay: "0.8s", size: "2.5rem" },
  { icon: "⚡", label: "FastAPI",    top: "80%",  left: "40%", delay: "0.3s", size: "2.2rem" },
  { icon: "🌐", label: "Django",     top: "15%",  left: "40%", delay: "1.2s", size: "2.4rem" },
  { icon: "🐳", label: "Docker",     top: "50%",  left: "5%",  delay: "0.7s", size: "2.3rem" },
  { icon: "🔥", label: "PyTorch",    top: "30%",  left: "55%", delay: "1.8s", size: "2.2rem" },
  { icon: "📊", label: "Data",       top: "85%",  left: "60%", delay: "0.4s", size: "2.1rem" },
  { icon: "🔬", label: "RAG",        top: "70%",  left: "75%", delay: "1.5s", size: "2.3rem" },
];

const stats = [
  { number: "98.92%", label: "OMR Accuracy"       },
  { number: "2,127",  label: "Questions Graded"   },
  { number: "400+",   label: "Automated Tests"    },
  { number: "70K+",   label: "Lines of Code"      },
];

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #0f0a00 50%, #0a0a0a 100%)",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* BACKGROUND GRID */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }} />

      {/* GLOW ORBS */}
      <div style={{
        position: "absolute", width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
        top: "-100px", left: "-100px", zIndex: 0,
      }} />
      <div style={{
        position: "absolute", width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
        bottom: "-50px", right: "200px", zIndex: 0,
      }} />

      {/* MAIN CONTENT */}
      <div style={{
        maxWidth: "1280px", margin: "0 auto", width: "100%",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "4rem",
        position: "relative", zIndex: 1,
        paddingTop: "80px",
      }}>

        {/* LEFT SIDE — TEXT */}
        <div style={{ flex: 1, maxWidth: "600px" }}>

          {/* BADGE */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "50px", padding: "6px 16px",
            marginBottom: "1.5rem",
            animation: "fadeInUp 0.6s ease forwards",
          }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%",
              background: "#c9a84c", display: "inline-block",
              boxShadow: "0 0 8px #c9a84c", animation: "pulse 2s infinite" }} />
            <span style={{ color: "#c9a84c", fontSize: "0.85rem", fontWeight: 600 }}>
              Available for Work
            </span>
          </div>

          {/* NAME */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800,
            color: "#f0e6c8", lineHeight: 1.1, marginBottom: "0.5rem",
            animation: "fadeInUp 0.6s ease 0.1s both",
          }}>
            Hi, I'm{" "}
            <span style={{
              background: "linear-gradient(135deg, #c9a84c, #f0e6c8, #c9a84c)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Sunil Kumar
            </span>
          </h1>

          {/* TYPING ANIMATION */}
          <div style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 600,
            color: "#c9a84c", marginBottom: "1.5rem", minHeight: "2.5rem",
            animation: "fadeInUp 0.6s ease 0.2s both",
          }}>
            <Typewriter options={{
              strings: [
                "Python Backend Developer 🐍",
                "AI/ML Engineer 🤖",
                "Computer Vision Expert 👁️",
                "Django & FastAPI Developer ⚡",
                "CS Teacher & Mentor 👨‍🏫",
              ],
              autoStart: true, loop: true, delay: 60, deleteSpeed: 30,
            }} />
          </div>

          {/* DESCRIPTION */}
          <p style={{
            color: "#a89060", fontSize: "1rem", lineHeight: 1.8,
            marginBottom: "2rem", maxWidth: "500px",
            animation: "fadeInUp 0.6s ease 0.3s both",
          }}>
            Enthusiastic AI/ML developer with a strong backend foundation
            (Django/FastAPI) and applied computer vision expertise. Built a
            template-independent OMR engine reaching 98.92% accuracy with 400+
            automated tests — production-deployed. Currently building a RAG
            system from first principles. 🚀
          </p>

          {/* BUTTONS */}
          <div style={{
            display: "flex", gap: "1rem", flexWrap: "wrap",
            marginBottom: "3rem",
            animation: "fadeInUp 0.6s ease 0.4s both",
          }}>
            <Link to="/projects" style={{
              padding: "0.8rem 2rem", borderRadius: "8px", fontWeight: 700,
              background: "linear-gradient(135deg, #c9a84c, #8b6914)",
              color: "#0a0a0a", textDecoration: "none", fontSize: "0.95rem",
              transition: "all 0.3s ease", display: "inline-block",
              boxShadow: "0 0 20px rgba(201,168,76,0.3)",
            }}
            onMouseOver={e => e.target.style.boxShadow = "0 0 35px rgba(201,168,76,0.6)"}
            onMouseOut={e => e.target.style.boxShadow = "0 0 20px rgba(201,168,76,0.3)"}
            >
              View My Work 🎯
            </Link>
            <Link to="/contact" style={{
              padding: "0.8rem 2rem", borderRadius: "8px", fontWeight: 700,
              background: "transparent",
              border: "1px solid rgba(201,168,76,0.5)",
              color: "#c9a84c", textDecoration: "none", fontSize: "0.95rem",
              transition: "all 0.3s ease", display: "inline-block",
            }}
            onMouseOver={e => { e.target.style.background = "rgba(201,168,76,0.1)"; e.target.style.borderColor = "#c9a84c"; }}
            onMouseOut={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(201,168,76,0.5)"; }}
            >
              Let's Talk 💬
            </Link>
          </div>

          {/* STATS */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem", animation: "fadeInUp 0.6s ease 0.5s both",
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{
                textAlign: "center", padding: "0.8rem",
                background: "rgba(201,168,76,0.05)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "8px", transition: "all 0.3s ease",
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = "#c9a84c"; e.currentTarget.style.background = "rgba(201,168,76,0.1)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; e.currentTarget.style.background = "rgba(201,168,76,0.05)"; }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#c9a84c" }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#a89060", marginTop: "2px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — FLOATING AI ICONS */}
        <div style={{
          flex: 1, position: "relative", height: "550px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>

          {/* CENTER CIRCLE */}
          <div style={{
            width: "220px", height: "220px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.15), rgba(201,168,76,0.03))",
            border: "2px solid rgba(201,168,76,0.3)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            position: "relative", zIndex: 2,
            boxShadow: "0 0 60px rgba(201,168,76,0.2), inset 0 0 60px rgba(201,168,76,0.05)",
            animation: "pulse-gold 3s ease-in-out infinite",
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
            transition: "transform 0.1s ease",
          }}>
            {/* ORBIT RING 1 */}
            <div style={{
              position: "absolute", width: "280px", height: "280px",
              borderRadius: "50%", border: "1px solid rgba(201,168,76,0.15)",
              animation: "orbit1 8s linear infinite",
            }}>
              <div style={{
                position: "absolute", top: "-10px", left: "50%",
                width: "20px", height: "20px", borderRadius: "50%",
                background: "#c9a84c", boxShadow: "0 0 10px #c9a84c",
                transform: "translateX(-50%)",
              }} />
            </div>
            {/* ORBIT RING 2 */}
            <div style={{
              position: "absolute", width: "360px", height: "360px",
              borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)",
              animation: "orbit2 12s linear infinite reverse",
            }}>
              <div style={{
                position: "absolute", bottom: "-8px", left: "50%",
                width: "16px", height: "16px", borderRadius: "50%",
                background: "#8b6914", boxShadow: "0 0 8px #8b6914",
                transform: "translateX(-50%)",
              }} />
            </div>
            <span style={{ fontSize: "3.5rem" }}>🤖</span>
            <span style={{ color: "#c9a84c", fontWeight: 700, fontSize: "1rem", marginTop: "0.3rem" }}>
              AI & ML
            </span>
          </div>

          {/* FLOATING ICONS */}
          {floatingIcons.map((item, i) => (
            <div key={i} style={{
              position: "absolute",
              top: item.top, left: item.left,
              fontSize: item.size,
              animation: `float${(i % 3) + 1} ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: item.delay,
              filter: "drop-shadow(0 0 8px rgba(201,168,76,0.4))",
              transform: `translate(${mousePos.x * (0.02 * (i + 1))}px, ${mousePos.y * (0.02 * (i + 1))}px)`,
              transition: "transform 0.1s ease",
              cursor: "default",
              zIndex: 1,
            }}
            title={item.label}
            >
              {item.icon}
              <div style={{
                textAlign: "center", fontSize: "0.55rem",
                color: "#c9a84c", fontWeight: 600, marginTop: "2px",
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-20px); }
        }
        @keyframes orbit1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 60px rgba(201,168,76,0.2), inset 0 0 60px rgba(201,168,76,0.05); }
          50%       { box-shadow: 0 0 100px rgba(201,168,76,0.4), inset 0 0 80px rgba(201,168,76,0.1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};
export default Home;
