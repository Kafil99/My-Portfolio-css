import React from "react";
import {
    CalculatorIcon,
    DollarSignIcon,
    EuroIcon,
    PoundSterlingIcon,
    ClipboardCopyIcon,
    Gamepad2Icon,
    WholeWordIcon,
} from "lucide-react";
import Link from "next/link";
import "./../styles/Projects.css";

export default function Projects() {
    return (
        <div className="projects-section">
            <div className="container">
                <div className="header">
                    <h2 className="title">
                        My <span className="highlight">Projects</span>
                    </h2>
                </div>

                <div className="grid">
                    {/* Project 1 */}
                    <div className="card">
                        <div className="icon-wrapper">
                            <CalculatorIcon className="icon" />
                        </div>
                        <h3 className="card-title">Npm Calculator</h3>
                        <p className="card-description">
                            "This CLI-based calculator, built with TypeScript and Node.js, performs
                            essential operations: addition, subtraction, multiplication, and division.
                            It's an efficient tool for quick calculations in the terminal."
                        </p>
                        <Link
                            href="https://github.com/Kafil99/Simple-cli-based-Calculator.git"
                            target="_blank"
                        >
                            <button className="btn">View Code</button>
                        </Link>
                    </div>

                    {/* Project 2 */}
                    <div className="card">
                        <div className="icon-wrapper">
                            <DollarSignIcon className="icon" />
                        </div>
                        <h3 className="card-title">Npm Currency Converter</h3>
                        <p className="card-description">
                            "This CLI-based currency converter, built with TypeScript and Node.js,
                            allows users to convert between USD, EUR, GBP, INR, and PKR by simply
                            entering the source currency, target currency, and amount."
                        </p>
                        <Link
                            href="https://github.com/Kafil99/currency-converter"
                            target="_blank"
                        >
                            <button className="btn">View Code</button>
                        </Link>
                    </div>

                    {/* Project 3 */}
                    <div className="card">
                        <div className="icon-wrapper">
                            <EuroIcon className="icon" />
                            <DollarSignIcon className="icon" />
                            <PoundSterlingIcon className="icon" />
                        </div>
                        <h3 className="card-title">Npm ATM</h3>
                        <p className="card-description">
                            "This CLI-based ATM simulator lets users securely check their balance and
                            withdraw funds. With a default balance of $10,000, users can access
                            features by entering a secure PIN (default: 1234)."
                        </p>
                        <Link href="https://github.com/Kafil99/ATM" target="_blank">
                            <button className="btn">View Code</button>
                        </Link>
                    </div>

                    {/* Project 4 */}
                    <div className="card">
                        <div className="icon-wrapper">
                            <Gamepad2Icon className="icon" />
                        </div>
                        <h3 className="card-title">Npm Number Guessing</h3>
                        <p className="card-description">
                            "This CLI-based number guessing game, created with TypeScript and Node.js,
                            challenges players to guess a random number between 1 and 10."
                        </p>
                        <Link
                            href="https://github.com/Kafil99/Cli-Number-Guessing-Game"
                            target="_blank"
                        >
                            <button className="btn">View Code</button>
                        </Link>
                    </div>

                    {/* Project 5 */}
                    <div className="card">
                        <div className="icon-wrapper">
                            <ClipboardCopyIcon className="icon" />
                        </div>
                        <h3 className="card-title">Npm To-Do List</h3>
                        <p className="card-description">
                            "A simple CLI To-Do app using TypeScript and Node.js. It prompts the user
                            to add tasks, asks if they want to add more, and displays the full list
                            when done."
                        </p>
                        <Link href="https://github.com/Kafil99/To-do-list" target="_blank">
                            <button className="btn">View Code</button>
                        </Link>
                    </div>

                    {/* Project 6 */}
                    <div className="card">
                        <div className="icon-wrapper">
                            <WholeWordIcon className="icon" />
                        </div>
                        <h3 className="card-title">kafilahmed999-word-counter</h3>
                        <p className="card-description">
                            "This is a CLI word counter app built with TypeScript and Node.js. It
                            prompts the user to enter text and then counts the number of words in the
                            input, providing the total word count in the terminal."
                        </p>
                        <Link href="https://github.com/Kafil99/Word-Counter" target="_blank">
                            <button className="btn">View Code</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
