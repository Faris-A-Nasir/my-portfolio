import { useEffect, useRef, useState } from "react";
import { personal } from "../../data/portfolio";
import "./Hero.css";

const floatingIcons = ["🤖", "⚡", "🧠", "🎙️", "🔗", "🌐"];

export default function Hero() {
  const videoRef   = useRef(null);
  const sectionRef = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted]     = useState(true);
  const hasInteracted = useRef(false);

  // Listen for the first user interaction anywhere on the page,
  // then unmute the hero video (browsers block unmuted autoplay
  // until the user has interacted with the page at least once).
  useEffect(() => {
    const unmuteOnInteract = () => {
      if (hasInteracted.current) return;
      hasInteracted.current = true;

      const video = videoRef.current;
      if (video && isInHeroView()) {
        video.muted = false;
        setMuted(false);
      }

      window.removeEventListener("click", unmuteOnInteract);
      window.removeEventListener("scroll", unmuteOnInteract);
      window.removeEventListener("keydown", unmuteOnInteract);
      window.removeEventListener("touchstart", unmuteOnInteract);
    };

    const isInHeroView = () => {
      if (!sectionRef.current) return false;
      const rect = sectionRef.current.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    window.addEventListener("click", unmuteOnInteract);
    window.addEventListener("scroll", unmuteOnInteract, { passive: true });
    window.addEventListener("keydown", unmuteOnInteract);
    window.addEventListener("touchstart", unmuteOnInteract, { passive: true });

    return () => {
      window.removeEventListener("click", unmuteOnInteract);
      window.removeEventListener("scroll", unmuteOnInteract);
      window.removeEventListener("keydown", unmuteOnInteract);
      window.removeEventListener("touchstart", unmuteOnInteract);
    };
  }, []);

  // Pause + mute when scrolling away; resume playing (and unmuted,
  // if the user has already interacted once) when scrolling back in.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setPlaying(true);
          if (hasInteracted.current) {
            video.muted = false;
            setMuted(false);
          }
        } else {
          video.pause();
          video.muted = true;
          setPlaying(false);
          setMuted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      {/* Floating icons (left dark zone) */}
      <div className="floating-icons" aria-hidden="true">
        {floatingIcons.map((icon, i) => (
          <span
            key={i}
            className="floating-icon"
            style={{
              top: `${12 + i * 14}%`,
              left: `${5 + (i % 3) * 8}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3.5 + i * 0.3}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Video constrained to right-side panel */}
      <div className="hero-video-panel">
        <video
          ref={videoRef}
          className="hero-bg-video"
          src="/videos/intro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-video-blend" />

        {/* Controls anchored to the video panel */}
        <div className="video-controls">
          <button className="video-btn" onClick={togglePlay} aria-label="Play/Pause">
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>
          <button className="video-btn" onClick={toggleMute} aria-label="Mute/Unmute">
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Content overlay */}
      <div className="hero-overlay-content">
        <span className="hero-eyebrow animate-fade-up">
          AI Automation Engineer · Full Stack Developer
        </span>

        <h1 className="hero-name animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="hero-name-line1">Faris</span>
          <span className="hero-name-line2">Ahmad</span>
          <span className="hero-name-italic">Nasir</span>
        </h1>

        <p className="hero-tagline animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {personal.tagline}
        </p>

        <div className="hero-overlay-ctas animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            View Work
          </a>
          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll label */}
      <div className="hero-scroll-label animate-fade-up" style={{ animationDelay: "0.5s" }}>
        SCROLL
      </div>
    </section>
  );
}