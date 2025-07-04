# Test Automation Framework for Restful-Booker API

This repository implements an API test automation framework built with:

- **Node.js** for cross-platform JavaScript execution
- **Mocha** as the test runner
- **Chai** for expressive assertions
- **SuperTest** for HTTP request automation
- **Reusable Operations** to centralize API logic and keep tests DRY
- **Modular, maintainable project structure** for fast scaling and onboarding

---

## Project Structure

Project files under `src/` use **snake_case** naming for consistency and clarity.

```
src/
├── config/        # Centralized API endpoints and base URLs
│
├── operations/    # Reusable functions for specific API interactions (e.g., auth, bookings)
│ └── api/
│ └── e2e/
├── test/
│ └── api/         # Mocha test files, grouped by API functionality
│ └── e2e/
└── utils/         # Common utilities like HTTP request setup (SuperTest)
```

**Naming convention:** All files and folders use **snake_case**.

---

## Key Features

- **Functional API Testing** for the public [Restful-Booker API](https://restful-booker.herokuapp.com/apidoc/index.html)
- **Reusable helper functions** for all main API operations (authentication, bookings)
- **Centralized configuration**—change URLs or endpoints in one place
- **Organized for maintainability**—tests and helpers are clearly separated
- **Easy to extend**—add new scenarios or endpoints with minimal setup

---

## Main Commands

Install dependencies:

```bash
npm install
```

**Run all tests**:

```bash
npm test
```

---

## Application Under Test

The framework targets the [Restful-Booker API](https://restful-booker.herokuapp.com/apidoc/index.html):

- A public RESTful API for testing and practice
- Supports authentication and full CRUD for bookings

---

You now have a scalable, professional API automation framework—ready to extend and maintain with clear, reusable patterns!

---

Let me know if you want to add instructions for CI/CD, badges, or any extra best practices!
