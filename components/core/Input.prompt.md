Rounded pill text field — use in enrolment forms & callbacks.

```jsx
<Input label="Ваше имя" placeholder="Как вас зовут?" required
       iconLeft={<i data-lucide="user"></i>} />
<Input label="Телефон" type="tel" error="Введите корректный номер" />
```

Focus shows a pink ring; `error` turns the field red. Supports `helper`, `iconLeft`, `disabled`.
