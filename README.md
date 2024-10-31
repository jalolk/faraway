# E2E Test Automation Framework

This repository contains an end-to-end test automation framework for the Faraway Platform demo, built using Playwright and TypeScript. The framework implements the Page Object Model pattern and includes tests for authentication and NFT purchase flows.

Demo: https://sandbox-platform.faraway.com/demo/

## 🛠 Technology Stack

- **TypeScript** - Primary programming language
- **Playwright** - Test automation framework
- **Yarn** - Package manager
- **GitHub Actions** - CI/CD platform

## 🏗 Architecture

The framework follows these architectural principles:

- **Page Object Model (POM)** - Separates test logic from page interactions
- **Component-based approach** - Reusable UI components (Auth, Purchase, Wallet)
- **SOLID principles** - Maintainable and extensible code structure
- **DRY (Don't Repeat Yourself)** - Shared utilities and helper functions
- **KISS (Keep It Simple, Stupid)** - Clear, straightforward implementations

### Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── metaMaskFixtures.ts
├── interfaces/
│   └── PageModel.interface.ts
├── pages/
│   ├── components/
│   │   ├── AuthComponent.ts
│   │   ├── PurchaseComponent.ts
│   │   └── WalletComponent.ts
│   ├── BasePage.ts
│   ├── FarawayPage.ts
│   └── MetaMaskExtension.ts
├── test-data/
│   ├── metaMaskWallet.ts
│   └── userData.ts
└── tests/
    └── e2e/
        ├── auth.test.ts
        └── purchase.test.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version)
- Yarn package manager
- Chrome browser

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:

```bash
yarn install
```

3. Install Playwright browsers:

```bash
yarn playwright install --with-deps
```

### Configuration

1. Create a `.env` file in the root directory (if needed for sensitive data)
2. Update test data in `test-data/` directory if necessary

### Running Tests

Run all tests:

```bash
yarn playwright test
```

Run specific test file:

```bash
yarn playwright test tests/e2e/auth.test.ts
```

## 📊 Test Reports

Test results are automatically generated as HTML reports after each test run. To view the report:

1. Run the tests
2. Open `playwright-report/index.html` in your browser

In CI/CD pipeline, reports are uploaded as artifacts and can be accessed from the GitHub Actions workflow.

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration. The pipeline:

1. Runs on push to main/master branches and pull requests
2. Installs dependencies and Playwright browsers
3. Executes all tests
4. Generates and uploads test reports as artifacts

## 🧪 Test Cases

### Authentication Flow

- Login with email in new tab
- Login with email in popup
- Login with email in same tab
- Verification of user session state

### NFT Purchase Flow

- Network selection and configuration
- Wallet connection
- Transaction approval and confirmation
- Purchase completion verification

## 📝 Code Style

The project uses:

- ESLint for code linting
- Prettier for code formatting

Run linting:

```bash
yarn lint
```

Format code:

```bash
yarn format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
