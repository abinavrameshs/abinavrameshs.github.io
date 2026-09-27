---
order: 0
caption: #what displays in the portfolio grid:
  title: Terminal Coding Agent
  subtitle: Coding Agents, LLMs, Python, MCP
  thumbnail: assets/img/portfolio/coding-agent.svg

#what displays when the item is clicked:
title: Terminal Coding Agent
subtitle: Coding Agents, LLMs, Python, MCP
image: assets/img/portfolio/coding-agent.svg #main image, can be a link or a file in assets/img/portfolio
alt: Terminal Coding Agent

---

## Objective

A coding agent that runs in the terminal and uses natural language to read, write, and edit files, run shell commands, search the web, and manage Git through any OpenAI-compatible provider.

## Features

- **Interactive REPL** and **single-shot** (`-p "…"`) modes
- **Native tools**: `read_file`, `write_file`, `edit_file`, `grep_files`, `find_files`, `bash`
- **Tool groups** (`core` / `web` / `git` / `mcp`) so the model only sees what it needs
- **Plan mode** - the agent proposes a numbered plan you approve or edit before it acts
- **Event-driven** - display, approval, cost tracking, persistence, and memory are all pluggable listeners
- **MCP client** - connect Git, GitHub, and any other MCP server (stdio or HTTP)
- **Plugins** - add tools by dropping a file in `agent_tools/`
- **Skills & slash commands** - reusable prompts in `.agent/skills/` / `.agent/commands/`
- **Auto-memory** - the agent remembers project facts across sessions
- **Context compaction** - long conversations are summarised automatically
- **Session persistence** - save and resume conversations
- **Subagents** - spawn parallel sub-agents for divisible tasks
- **Web search & fetch** - optional, via `--web`

Please refer to the GitHub link to know more about the project

[Github](https://github.com/abinavrameshs/my-coding-agent)

{:.list-inline}
- Category: Harness Engineering, Multi-agent orchestration, Agentic AI
- Tools: Python, OpenAI-compatible APIs, MCP, uv