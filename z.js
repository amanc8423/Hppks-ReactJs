/*
1. rules for jsx
- complete code enclosed in one element we use react fragment
-camelCase eg. likeclass is className
-self closing tag
- js(expression) inside jsx is written under { } for eg { 5+5}
- no if else condition inside jsx but we can use ternary operator because it comes under expression
- 

2. why we dont declare variable inside return of a component in reactjs

In ReactJS, we don't declare variables inside the return statement of a component because the return statement is meant to render the component's UI, not to declare variables.

React components are re-rendered frequently, and redeclaring variables on each render could lead to performance issues. Additionally, declaring variables inside the return statement can make the code harder to read and maintain, as it breaks the separation of concerns between UI rendering and data manipulation.

Instead, we declare variables outside of the component's return statement or inside the component's function body but outside of the return statement. This way, we can avoid re-declaring variables on each render and keep our code organized and maintainable.

3.in console it get print two times it is because of strct mode it is render two times to check for bug

4.















*/


