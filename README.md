

---

### 📄 `README.md`

# E2E Automation Framework

This is a scalable and maintainable end-to-end (E2E) testing framework using **Cucumber**, **Playwright**, and **TypeScript** to automate user journeys on [saucedemo.com](https://www.saucedemo.com), a demo e-commerce platform.

It follows a Behavior-Driven Development (BDD) approach, enabling collaboration between technical and non-technical team members through human-readable test scenarios.

---

## 📦 Tech Stack

- **[Playwright](https://playwright.dev/):** Fast and reliable browser automation
- **[Cucumber.js](https://github.com/cucumber/cucumber-js):** BDD-style test writing
- **[TypeScript](https://www.typescriptlang.org/):** Strong typing and developer tooling
- **[Cucumber HTML Reporter](https://www.npmjs.com/package/cucumber-html-reporter):** Clean, shareable test reports

---

## 📁 Suggested Folder Structure

```

saudemo/
├── features/
│   ├── step\_definitions/
│   ├── support/
│   └── login.feature
├── tests/
│   └── pages/
│       └── loginPage.ts
├── generate-report.ts
├── tsconfig.json
├── package.json
└── README.md

````

---

## 🧠 Design Considerations

- ✅ **Modular architecture** using Page Object Model (POM) for maintainability
- ✅ **Type-safe** codebase with TypeScript for reliability
- ✅ **Gherkin syntax** to write readable, behavior-driven tests
- ✅ **Separate layers** for test data, steps, and UI logic

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://www.github.com/reenagarha/Cucumber-playwright

````

### 2. Install Dependencies

```bash
npm install
```

---

## 🧪 Running Tests

### Run All Feature Tests

```bash
npm test
```

> Runs Cucumber tests from `features/*.feature`

---

### Generate Test Report

```bash
npm run report
```

> Converts test results into an HTML report using `cucumber-html-reporter`.

---

### Combined: Run Tests and Generate Report

```bash
npm run test:report
```

> Runs tests and generates the HTML report even if tests fail.

---

## ✅ Sample Feature File

```gherkin
Feature: Login functionality

  Scenario: Valid login
    Given I open the saucedemo website
    When I login with valid credentials
    Then I should see the inventory page
```

---

## 📊 Sample Test Report

After running `npm run report`, an HTML report will be generated (typically as `report.html`).
You can customize it via `generate-report.ts`.

![Sample Report](./assets/sample-report.png)

> *Include a screenshot if you're using this in a presentation or portfolio.*

---

## 🔁 Continuous Integration (Optional)

This framework is CI-ready and can be integrated with:

* **GitHub Actions**
* **GitLab CI**
* **Jenkins**
* **Azure DevOps**

> Trigger tests automatically on pull requests, merges, or scheduled runs.

---

## 🔮 Future Improvements

* 🔹 Parallel test execution
* 🔹 Cloud-based cross-browser testing (e.g., BrowserStack, Sauce Labs)
* 🔹 Test data externalization (CSV/JSON)
* 🔹 Slack/email alerts on failed test runs
* 🔹 Dockerize the framework for consistent environments

---

---

## 👤 Author

*Reena Garha*
-------
*Contact: [reenagarha@gmail.com](mailto:reenagarha@gmail.com)*
