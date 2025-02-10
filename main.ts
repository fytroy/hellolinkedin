import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Rodney Roy Gitonga </h1>
    <h3>The IT Guy<h3>
    <a target="_blank" href="https://www.linkedin.com/in/rodney-gitonga-9299a41ba">
      My LinkedIn Profile
    </a>
    <br />
    <a target="_blank" href="https://github.com/fytroy"> 
      Visit my github portfolio
    </a>
     <!-- Footer Section -->
     <footer>
      <p>Created by Rodney Roy Gitonga &copy; 2025 - All Rights Reserved <span>&#8482;</span></p>
    </footer>
  `,
  styles: [
    `:host {
      display: flex;
      flex-direction: column;
      min-height: 100vh; /* Ensure the full height of the page */
      background-color: #001f3d; /* Dark blue background */
      color: white; /* White text */
      padding: 20px;
    }`,
    `h1 {
      font-size: 3rem;
      margin-bottom: 1px;
      line-height: 2.5rem;
    }`,
    `h2 {
      font-size: 1.3rem;
      margin-top: 1px;
      line-height:1.5;
    }`,
    `a {
      color: #00aaff; /* Light blue color for links */
      text-decoration: none;
      font-size: 1.2rem;
    }`,
    `a:hover {
      text-decoration: underline;
    }`,
    `footer {
      margin-top: auto; /* Push the footer to the bottom */
      text-align: center;
      padding: 10px;
      font-size: 0.9rem;
      background-color: #001f3d;
      border-top: 1px solid #ffffff;
    }`,
    `footer p {
      margin: 0;
    }`,
  ],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
