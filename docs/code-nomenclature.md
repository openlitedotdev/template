# Code Nomenclature

Welcome to how you should write the code during your work day. I sincerely ask you to respect these decisions, we would not like to have to close your pull request.

## Variables

Variables most of the time have to be `const`

### Example

```tsx
const [acme, setAcme] = useState(0) // ✔

// No use let or var
// let [acme, setAcme] = useState(0) // ❌
// var [acme, setAcme] = useState(0) // ❌
```

## Functions Events

Event functions always have to start with the word `on`

#### Example

```ts
function onLogged() {} // ✔

/** function logged() {} ❌ */
```
