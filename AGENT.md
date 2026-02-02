# Agent Behavior Guidelines

## Programming Rules
- If you see a way to simplify or improve existing code, suggest it and implement the changes.
- After you make code improvements, always look for places where the same improvement can be applied.
- After you make code changes, check if you did not introduce any redundant code. If you find any, remove it.
- Avoid dynamic imports unless absolutely necessary. Static imports help with type checking and code analysis.

## Codebase specific rules
- If you add or edit texts, make sure to keep changes synchronized between all i18n translation files.

## General rules
- Do not run development server commands like `pnpm dev` unless I explicitly ask you to do so.
  Expect the development server to be running already.
- At the end of each your message write "\n\nI have spoken. See you later.", so I know that you know about this file.
