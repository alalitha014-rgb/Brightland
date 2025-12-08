export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', gap: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <div style={{ width: '24px', height: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                <div style={{ backgroundColor: '#14B8A6' }}></div>
                <div style={{ backgroundColor: '#14B8A6' }}></div>
                <div style={{ backgroundColor: '#14B8A6' }}></div>
                <div style={{ backgroundColor: '#14B8A6' }}></div>
              </div>
              <span style={{ fontSize: '20px', fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}>BRIGHTCONE</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexGrow: 1, justifyContent: 'center' }}>
              {['Solutions', 'Products', 'Industries', 'Case studies', 'Ecosystem', 'About us'].map((item, idx) => (
                <a key={idx} href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500, whiteSpace: 'nowrap' }}
                   onMouseOver={(e) => e.currentTarget.style.color = '#0d9488'}
                   onMouseOut={(e) => e.currentTarget.style.color = '#374151'}>
                  <span>{item}</span>
                  {(item === 'Solutions' || item === 'Products' || item === 'About us') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ padding: '80px 24px 20px 24px', textAlign: 'center', backgroundColor: '#f9fafb' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#111827', marginBottom: '16px', lineHeight: 1.2 }}>From AI Complexity to</h1>
        <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#14B8A6', marginBottom: '32px', lineHeight: 1.2 }}>Clarity. Focus. Impact.</h2>
        <p style={{ color: '#6b7280', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.6, fontSize: '16px', padding: '0 16px' }}>
          Most AI projects stall at the pilot stage - too complex, too generic, too risky to scale. Brightcone AI helps enterprises move beyond experiments to impact with secure, role-aware AI platforms and tailored services.
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '0 16px', marginBottom: '20px' }}>
          <button style={{ backgroundColor: '#0d9488', color: 'white', padding: '12px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0f766e'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0d9488'}>
            Book a Demo
          </button>
          <button style={{ backgroundColor: 'white', color: '#111827', padding: '12px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, border: '1px solid #d1d5db', cursor: 'pointer' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>
            Talk to an Expert
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', padding: '0 16px' }}>
          {[
            { value: '98%', label: 'Client Satisfaction' },
            { value: '1M+', label: 'End Users Reached' },
            { value: '30+', label: 'Enterprise Clients' },
            { value: '50%', label: 'Faster Time-to-Impact' }
          ].map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#14B8A6', marginBottom: '0px' }}>{stat.value}</div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '0px 24px 60px 24px', textAlign: 'center', marginTop: '0px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#111827', letterSpacing: '1px', margin: '0 0 40px 0', textTransform: 'uppercase' }}>
          TRUSTED BY INDUSTRY LEADERS
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '48px', maxWidth: '1200px', margin: '0 auto' }}>
          {['Census', 'epsor', 'figures', 'pennylane', 'airfocus', 'GetAccept'].map((company, idx) => (
            <div key={idx} style={{ opacity: 0.5, fontSize: '18px', fontWeight: 600, color: '#4B5563' }}>
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#111827', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Solutions That Deliver Business Impact
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              Most enterprises are stuck in endless pilots. Brightcone's solutions cut through the noise, reduce risk, and deliver measurable business impact in weeks, not years.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Advisory & Strategy',
                desc: 'We guide enterprises from curiosity to clarity with structured adoption roadmaps.',
                items: ['Use Case Discovery & ROI Modeling', 'MVP Roadmaps with success criteria', 'De-Risked Adoption for governance'],
                outcome: 'Clear, executable AI adoption plans.',
                bg: '#e0f2f1',
                img: 'https://cdn-icons-png.flaticon.com/512/2913/2913152.png'
              },
              {
                title: 'AI Engineering',
                desc: 'Building the technical foundation for reliable, scalable AI.',
                items: ['Agentic Platforms & Voice Agents', 'Predictive AI and Agentic RAG', 'Custom LLMs for specific needs'],
                outcome: 'Production-ready, secure, and scalable AI.',
                bg: '#fef3c7',
                img: 'https://cdn-icons-png.flaticon.com/512/2872/2872516.png'
              },
              {
                title: 'Industry-Specific Services',
                desc: 'Deep expertise in regulated and operationally complex domains.',
                items: ['Healthcare: Clinical insights, claims automation', 'Transportation: Predictive scheduling', 'Enterprise Ops: Knowledge copilots'],
                outcome: 'Tailored AI that understands your challenges.',
                bg: '#dbeafe',
                img: 'https://cdn-icons-png.flaticon.com/512/3050/3050159.png'
              }
            ].map((solution, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: solution.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <img src={solution.img} alt={solution.title} style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', margin: '0 0 12px 0' }}>{solution.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 24px 0', lineHeight: 1.6 }}>{solution.desc}</p>
                <div style={{ marginBottom: '24px' }}>
                  {solution.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                      <span style={{ fontSize: '14px', color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#111827', margin: 0 }}>
                    <span style={{ color: '#6b7280', fontWeight: 500 }}>Outcome:</span> {solution.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Platforms Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#111827', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Enterprise-Ready AI Platforms
            </h2>
            <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
              We don't just deliver software—we co-create scalable AI platforms tailored for secure AI deployment, while our product suite solves severe business challenges.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Bright Bot - AI Help Desk', desc: 'AI-powered help desk for instant responses, automated routing, and employee self-service.', bg: '#fef2f2', img: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png' },
              { title: 'Bright Insights - Document Intelligence', desc: 'Transforms research, SOPs, and reports in seconds with natural language insights.', bg: '#eff6ff', img: 'https://cdn-icons-png.flaticon.com/512/942/942751.png' },
              { title: 'Bright Connect - AI Contact Center', desc: 'Omnichannel AI for employee, customer, and supplier engagement at scale.', bg: '#ecfeff', img: 'https://cdn-icons-png.flaticon.com/512/726/726623.png' },
              { title: 'Bright Product - Workforce Intelligence', desc: 'Empower workforce needs, forecast attrition, and align roles with business objectives.', bg: '#f0fdf4', img: 'https://cdn-icons-png.flaticon.com/512/942/942748.png' },
              { title: 'Bright Schedule - AI-Driven Operations', desc: 'Smart scheduling to optimize resource usage, reduce no-shows, and cut distribution leakage.', bg: '#fef3c7', img: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png' },
              { title: 'Bright Notes - Clinical Assistant', desc: 'AI assistant for clinicians to automate notes, diagnoses, and summaries, reducing burnout.', bg: '#f0fdf4', img: 'https://cdn-icons-png.flaticon.com/512/4345/4345643.png' },
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '32px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: item.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <img src={item.img} alt={item.title} style={{ width: 28, height: 28, objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', margin: '0 0 12px 0' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div style={{ backgroundColor: "#f9fafb", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "42px", fontWeight: 700, color: "#111827", margin: '0 0 16px 0', lineHeight: 1.2 }}>
              Secure, Flexible, and Integrated
            </h2>
            <p style={{ fontSize: "16px", color: "#6b7280", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
              Brightcone works across your enterprise stack without the skill-replace. Integrating seamlessly with the tools you already deeply rely on.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
            {[
              { title: "Cloud Infrastructure", desc: "AWS, Azure, GCP", icon: "☁️" },
              { title: "Identity & Security", desc: "Okta, Azure AD", icon: "🔒" },
              { title: "AI Governance", desc: "Arize AI, Salesforce", icon: "📊" },
              { title: "Applications", desc: "ServiceNow", icon: "📱" },
              { title: "Collaboration", desc: "Teams, Slack, Outlook", icon: "👥" },
              { title: "Multi Model AI", desc: "No lock-in, LLM Agility", icon: "⚡" },
            ].map((feature, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{feature.icon}</div>
                <h4 style={{ fontSize: "16px", fontWeight: 600, color: "#111827", margin: "0 0 8px 0" }}>{feature.title}</h4>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.2 }}>
              Why Choose Brightcone
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {[
              { title: 'Enterprise-Grade security & compliance', desc: 'Role-Based Access Control (RBAC) with tenant isolation. Built-in PII/PHI redaction and encrypted memory. Audit logging and observability aligned with enterprise standards.' },
              { title: 'ROI in 90 Days', desc: 'Our agile delivery approach focuses on rapid prototyping and iterative deployment, ensuring you see measurable business value in the first quarter.' },
              { title: 'Outcome-oriented Methodology', desc: 'We begin with your business goals and work backward, ensuring every AI solution is tied to a clear, measurable outcome that matters to your bottom line.' }
            ].map((item, idx) => (
              <div key={idx} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: '0 0 12px 0' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}

            <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>Still have questions?</p>
              <button style={{ backgroundColor: '#ffffff', color: '#111827', padding: '10px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, border: '1px solid #d1d5db', cursor: 'pointer', whiteSpace: 'nowrap' }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}>
                Talk to an Expert →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#f9fafb', padding: '60px 24px 80px' }}>
       <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)', borderRadius: '24px', padding: '60px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0', lineHeight: 1.2, position: 'relative', zIndex: 1 }}>
              Let's Turn AI Into Impact.
            </h2>
            <p style={{ fontSize: '16px', color: '#ffffff', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6, opacity: 0.95, position: 'relative', zIndex: 1 }}>
              Brightcone partners with enterprises to deliver clarity, focus, and outcomes— moving beyond pilots to scale with confidence.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <button style={{ backgroundColor: '#ffffff', color: '#0d9488', padding: '14px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, border: 'none', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                      onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f0fdfa'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Book a Demo
              </button>
              <button style={{ backgroundColor: 'transparent', color: '#ffffff', padding: '14px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 600, border: '2px solid #ffffff', cursor: 'pointer' }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', padding: '60px 24px 40px', color: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '24px', height: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                  <div style={{ backgroundColor: '#14B8A6' }}></div>
                  <div style={{ backgroundColor: '#14B8A6' }}></div>
                  <div style={{ backgroundColor: '#14B8A6' }}></div>
                  <div style={{ backgroundColor: '#14B8A6' }}></div>
                </div>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>BRIGHTCONE</span>
              </div>
              <p style={{ fontSize: '14px', color: '#9ca3af', margin: '0 0 20px 0', fontStyle: 'italic' }}>
                "Clarity. Focus. Impact."
              </p>
            </div>

            {[
              { title: 'Company', links: ['Home', 'Solutions', 'Products', 'FAQ'] },
              { title: 'Resources', links: ['Case studies', 'Ecosystem', 'Insights'] },
              { title: 'About', links: ['Terms of Service', 'Privacy Policy', 'Careers', 'Contact'] }
            ].map((section, idx) => (
              <div key={idx}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', margin: '0 0 16px 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {section.title}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {section.links.map((link, i) => (
                    <a key={i} href="#" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}
                       onMouseOver={(e) => e.currentTarget.style.color = '#14B8A6'}
                       onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #374151', paddingTop: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
              ©Brightcone 2024. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}