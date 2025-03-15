# Vibe

Welcome to **Vibe**, an ecosystem of modern tools designed to breathe new life into legacy projects. Inspired by the elegance of [Charm.sh](https://charm.sh) and the identity of Shadcnui, Vibe combines robust backend services with CLI and REST interfaces, built to tackle challenges like observability, caching, storage, and more — all in environments where Docker or Linux might not be available.

Crafted with ❤️ in **TypeScript/Bun** and **Go**, Vibe is open-source and designed to be lightweight, portable, and powerful.

---

## Why Vibe?

Legacy projects often face challenges such as:
- Outdated infrastructure without container support.
- Lack of observability (logs, metrics, tracing).
- Compromised performance due to missing caching.
- Reliance on local storage instead of cloud solutions.
- Difficulty integrating with modern systems.

Vibe exists to bridge these gaps with simple, modular, and accessible tools, empowering you to modernize without rewriting everything.

---

## Projects

The Vibe ecosystem consists of standalone tools, each with a backend, CLI, and (soon) interactive TUIs. Here’s what we’re building:

### Vibe Glow
**Complete observability for legacy systems.**
- **What it does**: Logs events, collects metrics (technical and business), and provides tracing to map flows.
- **How to use**:
  - CLI: `vibe glow log "Error X" --level=error`
  - REST: `POST /log`
- **Status**: In development (MVP focused on logging).

### Vibe Hush
**Simple and efficient caching.**
- **What it does**: Stores data in memory or on disk to speed up slow systems.
- **How to use**:
  - CLI: `vibe hush set key "data" --ttl=300`
  - REST: `PUT /cache/key`
- **Status**: Planned.

### Vibe Drop
**Flexible storage, local or cloud.**
- **What it does**: Abstracts file access, with syncing to services like S3.
- **How to use**:
  - CLI: `vibe drop upload ./file.txt`
  - REST: `POST /store/upload`
- **Status**: Planned.

### Vibe Drift
**Deployments on legacy infrastructure.**
- **What it does**: Automates builds and deploys via SSH/FTP on old servers.
- **How to use**:
  - CLI: `vibe drift deploy --target=server`
  - REST: `POST /deploy`
- **Status**: Planned.

### Vibe Wave
**Asynchronous queues for background tasks.**
- **What it does**: Manages persistent queues with integrated workers.
- **How to use**:
  - CLI: `vibe wave add "process-data"`
  - REST: `POST /queue`
- **Status**: Planned (to explore later).

### Vibe Shade
**Security for vulnerable systems.**
- **What it does**: Scans dependencies and suggests fixes.
- **How to use**:
  - CLI: `vibe shade scan`
  - REST: `GET /scan`
- **Status**: Planned.

### Vibe Swarm
**Simplified local scalability.**
- **What it does**: Manages local instances to distribute load.
- **How to use**:
  - CLI: `vibe swarm up --instances=3`
  - REST: `POST /scale`
- **Status**: Planned.

### Vibe Link
**Integration with the modern world.**
- **What it does**: Facilitates calls to REST/gRPC APIs.
- **How to use**:
  - CLI: `vibe link call --url="api.com"`
  - REST: `POST /api/call`
- **Status**: Planned.

---

## How it works

Each Vibe tool is a standalone service with:
- **Backend**: REST API for programmatic integration.
- **CLI**: Intuitive commands for terminal use.
- **TUI**: Visual terminal interfaces (coming soon).
- **Portability**: Runs on Windows, macOS, Linux, without Docker.

Built with **Go** for lightweight binaries and **TypeScript/Bun** for JavaScript ecosystem integration.

---

## Installation

(Note: Replace with specific instructions once available.)

```bash
go install github.com/gabrielalmir/vibe-glow@latest
```

## How to contribute

Vibe is a open-source ecosystem, and we’d love your help! Here’s how to get started:

1. Fork the repository: github.com/gabrielalmir/vibe-glow.
2. Choose a project (e.g., vibe-glow) and clone:
    ```bash
    git clone https://github.com/gabrielalmir/vibe-glow.git
    cd vibe-glow
    ```

Develop and submit a PR!
Check out our Contribution Guide (coming soon) for more details.


## Roadmap

- [ ] Launch MVP of Vibe Glow (logging).
- [ ] Add metrics and tracing to Glow.
- [ ] Develop Vibe Hush (caching).
- [ ] Expand to other projects.
- [ ] Add interactive TUIs with Bubble Tea.

## License

Licensed under MIT — use, modify, and share freely.

## Contact

Questions? Ideas? Join the conversation on [LinkedIn](https://br.linkedin.com/in/gabrielalmir) or find me on Twitter/X (@momentoalmir).
