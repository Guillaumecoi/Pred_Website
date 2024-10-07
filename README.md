# Pred Website Project

This repository contains the codebase for **Pred's Website**, developed to demonstrate my coding practices. This project is built using **React**, **Vite**, and **Tailwind CSS**.

## Quick Start

1. **Clone the Repository**:

    ```sh
    git clone https://github.com/Guillaumecoi/Pred_Website.git
    cd Pred_Website
    ```

2. **Install Dependencies**:

    ```sh
    npm install
    ```

3. **Create index.content.ts**:

    For development purposes, duplicate `index.dummy.ts` to `index.content.ts`:

    ```sh
    cp src/contents/index.dummy.ts src/contents/index.content.ts
    ```

4. **Run the Project**:

    Start the development server:

    ```sh
    npm run dev
    ```

## Using the template

The content used on the website is managed separately to ensure privacy:

The content files are in the `src/contents/` folder:
- **`index.content.ts`**: Contains the real content intended for the live website. It is important that this file remains private and is not committed to a public repository.
- **`index.dummy.ts`**: Dummy content for development and demonstration.

The .env file controls which content file is used by the application, making it easy to switch between real and dummy content without changing the core codebase.

```env
USE_REAL_CONTENT=false  # Set to 'true' for real content
```

## Development Practices

- **Modular Code**: Components are reusable and maintainable.
- **Environment Configuration**: Flexible switching between content types using environment variables.
- **Scalable Structure**: Project designed for future growth with a clear and scalable folder setup.