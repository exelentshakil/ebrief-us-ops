hi Stephen, i built a working US case compliance engine and federal redactor for eBrief US so you can test live: https://ebrief-us-ops.vercel.app
code: https://github.com/exelentshakil/ebrief-us-ops | portfolio: https://shakilhq.com

it handles raw us filing ingestion, federal rule 5.2 redaction, and medical hipaa scrubbing. the codebase is ready in the github link above.

while my main background is years of senior Laravel development, the concepts of active record, database migrations, and MVC are second nature to me. the ruby transition is just a minor syntax translation—with ai leverage, i am fully operational on your rails codebase in hours.

to solve the reliability issue that broke your previous vapi integration, i set up a dual-provider routing pipeline with active gpt-4o-mini and gemini 2.0 failovers alongside a deterministic verification layer. it intercepts prompt injection jailbreaks and handles compliance checks before the llm is even exposed.

at $75/hr for 30+ hours/week, i run autonomous weekly sprints with daily github commits, nix builds, and zero handholding:
• week 1: audit current schema, map state jurisdictions, and connect basic mcp document indexers
• week 2: production-ready us federal RAG pipeline and inline nist ai security firewalls
• week 4: graphql api endpoints, nix docker container packages, and pixel-perfect react cockpit interfaces

which us federal court jurisdiction are you targeting for the initial state rollout (option a: sdny, option b: cdcal, or option c: court of chancery)?

happy to hop on a quick 10-minute call to walk you through the codebase.

best,
Shak