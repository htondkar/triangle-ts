## Decisions made:

- Use of TypeScript. It's a statically typed superset of javascript. Because of the type safety it gives you, a whole class of bugs are prevented without writing numerous unit tests. It also has a better developer experience compared to JavaScript.

- Use of "styled-component". It's a css in js library and works very nicely with react. It provides component scoped styles which is very convenient compared to globally scoped css.

* Using Joi for validation. It's a battle tested library for validation. writing validation logic by hand is repetitive pretty bug-prone. So this library was chosen to mitigate this issue.

* Use of create-react-app. It's currently the best option for scaffolding a react project. It's officially supported by facebook and meets all the needs of this project.

## Codebase Structure:

- There are two main directories in src, pages and common. common contains all the common react components that can be re-used throughout the project. Most of these components are stateless. pages on the other hand contains components that are most of the time state-full and are connected to the outside world (global state, etc). these components represent the actual page in the application.
  This structure makes it easy to further develop the project by separating concerns.

- In the TriangleType page, different concerns are each separated into a file. there is a triangle model which contains types and definitions for a triangle. then there is the validation rules in another file, and so on.
